import assert from "node:assert/strict";
import test from "node:test";

import handler, {
  expectsArray,
  getUpstreamPath,
} from "../netlify/functions/nookipedia.mjs";

test("allows only the endpoint families used by the app", () => {
  assert.equal(getUpstreamPath("/api/nookipedia/bugs"), "/bugs");
  assert.equal(getUpstreamPath("/api/nookipedia/fish/red%20snapper"), "/fish/red%20snapper");
  assert.equal(getUpstreamPath("/api/nookipedia/fossils/individuals"), "/fossils/individuals");
  assert.equal(getUpstreamPath("/api/nookipedia/fossils/all"), "/fossils/all");
  assert.equal(getUpstreamPath("/api/nookipedia/sea/seaweed"), "/sea/seaweed");
});

test("rejects arbitrary paths and encoded traversal", () => {
  assert.equal(getUpstreamPath("/api/nookipedia/villagers"), null);
  assert.equal(getUpstreamPath("/api/nookipedia/bugs/name/extra"), null);
  assert.equal(getUpstreamPath("/api/nookipedia/bugs/%2e%2e/fish"), null);
  assert.equal(getUpstreamPath("/api/nookipedia/bugs%2ffish"), null);
});

test("identifies collection endpoints that require array responses", () => {
  assert.equal(expectsArray("/bugs"), true);
  assert.equal(expectsArray("/fossils/individuals"), true);
  assert.equal(expectsArray("/bugs/tarantula"), false);
});

test("forwards safe query parameters and keeps the key server-side", async (t) => {
  process.env.NOOKIPEDIA_API_KEY = "test-secret";
  t.after(() => delete process.env.NOOKIPEDIA_API_KEY);

  let upstreamRequest;
  t.mock.method(globalThis, "fetch", async (url, init) => {
    upstreamRequest = { url: url.toString(), init };
    return new Response('[{"name":"seaweed"}]', {
      headers: { "content-type": "application/json" },
    });
  });

  const response = await handler(
    new Request("https://example.com/api/nookipedia/sea?month=8&name=a%20b"),
  );

  assert.equal(response.status, 200);
  assert.equal(upstreamRequest.url, "https://api.nookipedia.com/nh/sea?month=8&name=a%20b");
  assert.equal(upstreamRequest.init.headers["X-API-KEY"], "test-secret");
  assert.doesNotMatch(await response.text(), /test-secret/);
});

test("normalizes methods, missing configuration, and upstream errors", async (t) => {
  const methodResponse = await handler(
    new Request("https://example.com/api/nookipedia/bugs", { method: "POST" }),
  );
  assert.equal(methodResponse.status, 405);
  assert.equal(methodResponse.headers.get("allow"), "GET, HEAD");

  delete process.env.NOOKIPEDIA_API_KEY;
  assert.equal(
    (await handler(new Request("https://example.com/api/nookipedia/bugs"))).status,
    500,
  );

  process.env.NOOKIPEDIA_API_KEY = "test-secret";
  t.after(() => delete process.env.NOOKIPEDIA_API_KEY);
  t.mock.method(globalThis, "fetch", async () =>
    new Response("sensitive upstream details", { status: 500 }),
  );

  const upstreamResponse = await handler(
    new Request("https://example.com/api/nookipedia/bugs"),
  );
  assert.equal(upstreamResponse.status, 502);
  assert.doesNotMatch(await upstreamResponse.text(), /sensitive upstream details/);
});

test("rejects malformed collection responses at the API boundary", async (t) => {
  process.env.NOOKIPEDIA_API_KEY = "test-secret";
  t.after(() => delete process.env.NOOKIPEDIA_API_KEY);
  t.mock.method(globalThis, "fetch", async () =>
    new Response("<html>fallback</html>", {
      headers: { "content-type": "text/html" },
    }),
  );

  const htmlResponse = await handler(
    new Request("https://example.com/api/nookipedia/bugs"),
  );
  assert.equal(htmlResponse.status, 502);
  assert.deepEqual(await htmlResponse.json(), {
    error: "Upstream returned an invalid response",
  });

  globalThis.fetch.mock.mockImplementation(async () =>
    new Response('{"items":[]}', {
      headers: { "content-type": "application/json" },
    }),
  );

  const objectResponse = await handler(
    new Request("https://example.com/api/nookipedia/bugs"),
  );
  assert.equal(objectResponse.status, 502);
  assert.deepEqual(await objectResponse.json(), {
    error: "Upstream returned an invalid collection",
  });
});

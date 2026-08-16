const UPSTREAM_ORIGIN = "https://api.nookipedia.com";
const UPSTREAM_PREFIX = "/nh";
const REQUEST_TIMEOUT_MS = 8_000;
const PROXY_PREFIXES = [
  "/api/nookipedia/",
  "/.netlify/functions/nookipedia/",
];

export const config = { path: "/api/nookipedia/*" };

const jsonError = (status, message, extraHeaders = {}) =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...extraHeaders,
    },
  });

const getUpstreamPath = (pathname) => {
  const prefix = PROXY_PREFIXES.find((candidate) => pathname.startsWith(candidate));
  if (!prefix) return null;

  const encodedPath = pathname.slice(prefix.length);
  if (/%2f|%5c/i.test(encodedPath)) return null;

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(encodedPath);
  } catch {
    return null;
  }

  if (
    decodedPath.includes("\\") ||
    decodedPath.split("/").some((segment) => segment === "" || segment === "." || segment === "..")
  ) {
    return null;
  }

  const segments = decodedPath.split("/");
  const [family, second] = segments;
  const isSingleResource = ["bugs", "fish", "sea"].includes(family) && segments.length <= 2;
  const isFossilResource =
    family === "fossils" &&
    ((second === "all" && segments.length === 2) ||
      (second === "individuals" && segments.length <= 3));

  if (!isSingleResource && !isFossilResource) return null;
  return `/${segments.map(encodeURIComponent).join("/")}`;
};

const expectsArray = (upstreamPath) =>
  ["/bugs", "/fish", "/sea", "/fossils/all", "/fossils/individuals"].includes(
    upstreamPath,
  );

export default async function handler(request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return jsonError(405, "Method not allowed", { allow: "GET, HEAD" });
  }

  const apiKey = process.env.NOOKIPEDIA_API_KEY;
  if (!apiKey) return jsonError(500, "Proxy is not configured");

  const requestUrl = new URL(request.url);
  const upstreamPath = getUpstreamPath(requestUrl.pathname);
  if (!upstreamPath) return jsonError(404, "Endpoint not found");

  const upstreamUrl = new URL(`${UPSTREAM_PREFIX}${upstreamPath}`, UPSTREAM_ORIGIN);
  upstreamUrl.search = requestUrl.search;

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      method: request.method,
      headers: {
        "X-API-KEY": apiKey,
        accept: "application/json",
      },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!upstreamResponse.ok) {
      const status = upstreamResponse.status >= 400 && upstreamResponse.status < 500 ? upstreamResponse.status : 502;
      return jsonError(status, "Upstream request failed");
    }

    let body = null;
    if (request.method !== "HEAD") {
      const contentType = upstreamResponse.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        return jsonError(502, "Upstream returned an invalid response");
      }

      const data = await upstreamResponse.json();
      if (expectsArray(upstreamPath) && !Array.isArray(data)) {
        return jsonError(502, "Upstream returned an invalid collection");
      }
      body = JSON.stringify(data);
    }

    return new Response(body, {
      status: upstreamResponse.status,
      headers: {
        "content-type": upstreamResponse.headers.get("content-type") || "application/json; charset=utf-8",
        "cache-control": "public, max-age=300, s-maxage=3600",
      },
    });
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    return jsonError(timedOut ? 504 : 502, timedOut ? "Upstream request timed out" : "Upstream request failed");
  }
}

export { expectsArray, getUpstreamPath };

import { writeFile } from "node:fs/promises";

await writeFile(new URL("../dist/_redirects", import.meta.url), "/*    /index.html   200\n");

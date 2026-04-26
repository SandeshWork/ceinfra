import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrBundle = path.join(distDir, "server", "entry-server.js");

const routes = [
  "/",
  "/about",
  "/services",
  "/machineries",
  "/projects",
  "/industries",
  "/why-crescent",
  "/careers",
  "/contact",
];

async function main() {
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
  const { render } = await import(pathToFileURL(ssrBundle).href);

  for (const route of routes) {
    try {
      const appHtml = await render(route);
      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      const outPath =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(distDir, route.slice(1), "index.html");

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html, "utf-8");
      console.log(`✓ Prerendered: ${route}`);
    } catch (err) {
      console.warn(`✗ Skipped ${route}:`, err.message);
    }
  }

  console.log("\nPrerendering complete.");
}

main();

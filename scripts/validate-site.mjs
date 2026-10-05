import { access, readFile, readdir } from "node:fs/promises";
import { dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const files = await readdir(root);
const htmlFiles = files.filter((file) => extname(file) === ".html");
const errors = [];
const cache = new Map();

async function html(file) {
  if (!cache.has(file)) cache.set(file, await readFile(resolve(root, file), "utf8"));
  return cache.get(file);
}

for (const file of htmlFiles) {
  const source = await html(file);
  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  duplicates.forEach((id) => errors.push(`${file}: duplicate id #${id}`));

  const h1Count = (source.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) errors.push(`${file}: expected one h1, found ${h1Count}`);

  for (const image of source.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(image[0])) errors.push(`${file}: image without alt text`);
  }

  for (const link of source.matchAll(/<a\s[^>]*target="_blank"[^>]*>/g)) {
    if (!/\srel="[^"]*noreferrer[^"]*"/.test(link[0])) errors.push(`${file}: external target without noreferrer`);
  }

  for (const match of source.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const ref = match[1];
    if (/^(?:https?:|mailto:|tel:|data:)/.test(ref)) continue;
    const [pathPart, anchor] = ref.split("#");
    const targetFile = pathPart || file;
    if (!targetFile || targetFile.startsWith("?")) continue;

    try {
      await access(resolve(root, targetFile));
    } catch {
      errors.push(`${file}: missing ${targetFile}`);
      continue;
    }

    if (anchor && extname(targetFile) === ".html") {
      const target = await html(targetFile);
      if (!target.includes(`id="${anchor}"`)) errors.push(`${file}: missing anchor ${targetFile}#${anchor}`);
    }
  }
}

for (const file of ["index.html", "app.js", "site.js", "styles.css"]) {
  const source = await readFile(resolve(root, file), "utf8");
  if (source.includes("highest-darmstadt.de")) errors.push(`${file}: still links to the previous HIGHEST website`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`OK: ${htmlFiles.length} HTML pages, all local references and anchors resolve.`);
}

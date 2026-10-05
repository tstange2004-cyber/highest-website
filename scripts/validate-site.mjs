/**
 * Kleine Qualitätskontrolle für die statische Website.
 * Prüft Seitenstruktur, interne Verweise sowie eingebundene Dateien.
 */

import { access, readFile, readdir } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlFiles = (await readdir(root)).filter((file) => extname(file) === ".html");
const jsDirectory = resolve(root, "assets/js");
const jsFiles = (await readdir(jsDirectory)).filter((file) => extname(file) === ".js");
const assetsDirectory = resolve(root, "assets");
const errors = [];
const cache = new Map();
const usedAssets = new Set();

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : path;
  }));
  return nested.flat();
}

async function source(filePath) {
  if (!cache.has(filePath)) cache.set(filePath, await readFile(filePath, "utf8"));
  return cache.get(filePath);
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function checkReference(fromFile, reference, baseDirectory) {
  if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(reference)) return;

  const [pathPart, anchor] = reference.split("#");
  const targetPath = pathPart ? resolve(baseDirectory, pathPart) : fromFile;
  const label = relative(root, fromFile);

  if (targetPath.startsWith(`${assetsDirectory}${sep}`)) usedAssets.add(targetPath);

  if (!(await exists(targetPath))) {
    errors.push(`${label}: missing ${reference}`);
    return;
  }

  if (anchor && extname(targetPath) === ".html") {
    const target = await source(targetPath);
    if (!target.includes(`id="${anchor}"`)) {
      errors.push(`${label}: missing anchor ${relative(root, targetPath)}#${anchor}`);
    }
  }
}

for (const file of htmlFiles) {
  const filePath = resolve(root, file);
  const markup = await source(filePath);
  const ids = [...markup.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  duplicates.forEach((id) => errors.push(`${file}: duplicate id #${id}`));

  const h1Count = (markup.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) errors.push(`${file}: expected one h1, found ${h1Count}`);

  for (const image of markup.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(image[0])) errors.push(`${file}: image without alt text`);
  }

  for (const link of markup.matchAll(/<a\s[^>]*target="_blank"[^>]*>/g)) {
    if (!/\srel="[^"]*noreferrer[^"]*"/.test(link[0])) errors.push(`${file}: external target without noreferrer`);
  }

  for (const match of markup.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    await checkReference(filePath, match[1], root);
  }
}

// Auch dynamisch gesetzte Links in JavaScript müssen auf vorhandene Seiten zeigen.
for (const file of jsFiles) {
  const filePath = resolve(jsDirectory, file);
  const script = await source(filePath);
  for (const match of script.matchAll(/["'`]([^"'`]+\.html(?:#[^"'`]*)?)["'`]/g)) {
    await checkReference(filePath, match[1], root);
  }
  for (const match of script.matchAll(/["'`](assets\/[^"'`]+)["'`]/g)) {
    await checkReference(filePath, match[1], root);
  }
}

// Bild- und Schriftpfade innerhalb des Stylesheets werden relativ zum CSS-Ordner aufgelöst.
const cssPath = resolve(root, "assets/css/site.css");
const css = await source(cssPath);
for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
  await checkReference(cssPath, match[1], dirname(cssPath));
}

// Nicht mehr eingebundene Medien oder Schriften sollen nicht unbemerkt liegen bleiben.
const assetFiles = await listFiles(assetsDirectory);
for (const asset of assetFiles) {
  if (asset.startsWith(`${resolve(assetsDirectory, "css")}${sep}`)) continue;
  if (asset.startsWith(`${resolve(assetsDirectory, "js")}${sep}`)) continue;
  if (!usedAssets.has(asset)) errors.push(`${relative(root, asset)}: unused asset`);
}

if (await exists(resolve(root, "home.html"))) {
  errors.push("home.html: obsolete duplicate; index.html is the only homepage");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`OK: ${htmlFiles.length} Seiten und ${jsFiles.length} Skripte sind konsistent verknüpft.`);
}

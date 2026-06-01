import fs from "node:fs";
import path from "node:path";

function fail(message) {
  console.error(`\n[verify-theme-colors] ${message}\n`);
  process.exit(1);
}

const distAssetsDir = path.resolve("dist", "_astro");
if (!fs.existsSync(distAssetsDir)) {
  fail(`Missing ${distAssetsDir}. Did 'astro build' run successfully?`);
}

const cssFiles = fs
  .readdirSync(distAssetsDir)
  .filter((f) => f.endsWith(".css"))
  .map((f) => path.join(distAssetsDir, f));

if (cssFiles.length === 0) {
  fail(`No .css files found in ${distAssetsDir}.`);
}

// Astro splits CSS per-page/component, so the token may live in any one of them.
// Concatenate every CSS asset and check the combined output.
const css = cssFiles.map((p) => fs.readFileSync(p, "utf8")).join("\n").toLowerCase();
const cssFile = cssFiles
  .map((p) => ({ p, size: fs.statSync(p).size }))
  .sort((a, b) => b.size - a.size)[0].p;

// Guardrail:
// We previously had Tailwind theme colors defined using OKLCH values that compiled
// into an unintended mint/teal "off-white" in production (e.g. #d8fff5...).
// This check ensures our canonical token stays correct and that the bad tint
// never returns unnoticed in CI/Elestio builds.
const requiredToken = "--off-white:#f8f7f4";
if (!css.includes(requiredToken)) {
  fail(
    `Expected compiled CSS to include '${requiredToken}' but it did not.\n` +
      `This usually means the design tokens in client/src/index.css changed or were not included.`
  );
}

const forbidden = ["#d8fff5", "oklab(97% -4.37114e-1"];
for (const token of forbidden) {
  if (css.includes(token)) {
    fail(
      `Found forbidden token '${token}' in compiled CSS (${path.basename(cssFile)}).\n` +
        `This indicates off-white may have regressed into the mint/teal tint again.`
    );
  }
}

console.log(
  `[verify-theme-colors] OK (${path.basename(cssFile)}): off-white token looks correct.`
);



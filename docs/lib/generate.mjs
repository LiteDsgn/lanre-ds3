/* Builds the docs' generated inputs from the design system's own files, once per `next dev` / `next build`:
   - .generated/lanre-tokens.css: tokens/*.css scoped to .lanre-preview (see scope-tokens.mjs)
   - .generated/tokens.json: every token with its group comment and note, for the foundations specimens
   - .generated/props.json: each component's props, summary and defaults from its .d.ts and .jsx
   - public/kit/: the playable kit and the files it loads, so the docs can serve it (see writeKit)
   Runs in Node from next.config.mjs, so tools/read-props.js gets the repo's TypeScript 6 API. */
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { readDefaults, readProps } from '../../tools/read-props.js';
import { writeScopedTokens } from './scope-tokens.mjs';

function writeIfChanged(file, text) {
  if (!existsSync(file) || readFileSync(file, 'utf8') !== text) writeFileSync(file, text);
}

/* Declarations in each block, with the standalone comment above them as their group and any trailing comment as a note. */
function readTokens(file) {
  const blocks = [];
  let block = null, group = '';
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    const open = line.match(/^(\S[^{]*)\{\s*$/);
    if (open) { block = { selector: open[1].trim(), group: '', tokens: [] }; blocks.push(block); group = ''; continue; }
    if (/^\s*\}\s*$/.test(line)) { block = null; continue; }
    if (!block) continue;
    const heading = line.match(/^\s*\/\*\s*(.*?)\s*\*\/\s*$/);
    if (heading) { group = heading[1].replace(/^-+\s*|\s*-+$/g, ''); continue; }
    const note = (line.match(/;\s*\/\*\s*(.*?)\s*\*\/\s*$/) || [])[1] || '';
    for (const m of line.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)) block.tokens.push({ name: m[1], value: m[2].trim(), group, note });
  }
  return blocks;
}

/* The playable kit (ui_kits/lanre-game) runs with no build: it loads ../../styles.css and ../../tools/ds-loader.js,
   and the loader fetches components/<group>/<Name>.jsx. Copy just those files into public/kit with the same
   layout, so the docs serve it at /kit/ui_kits/lanre-game/. Only recopies when a source file has changed, so the
   several Next processes a build starts don't delete files from under each other. */
const KIT = ['styles.css', 'tokens', 'tools/ds-loader.js', 'components', 'ui_kits/lanre-game'];
const kitFile = f => /\.(css|jsx?|html)$/.test(f) && !f.endsWith('.card.html');

function listFiles(root, rel) {
  const full = path.join(root, rel);
  if (!statSync(full).isDirectory()) return kitFile(rel) ? [rel] : [];
  return readdirSync(full).sort().flatMap(name => listFiles(root, path.join(rel, name)));
}

function writeKit(repoRoot, outDir) {
  const files = KIT.flatMap(entry => listFiles(repoRoot, entry));
  const stamp = files.map(f => { const st = statSync(path.join(repoRoot, f)); return f + ' ' + st.size + ' ' + st.mtimeMs; }).join('\n');
  const stampFile = path.join(outDir, '.stamp');
  if (existsSync(stampFile) && readFileSync(stampFile, 'utf8') === stamp) return;
  rmSync(outDir, { recursive: true, force: true });
  for (const f of files) cpSync(path.join(repoRoot, f), path.join(outDir, f));
  writeFileSync(stampFile, stamp);
}

export function writeGenerated(repoRoot, docsDir) {
  const out = path.join(docsDir, '.generated');
  mkdirSync(out, { recursive: true });
  writeScopedTokens(path.join(repoRoot, 'tokens'), path.join(out, 'lanre-tokens.css'));

  const tokens = {};
  for (const name of ['colors', 'typography', 'spacing', 'effects', 'gems', 'worlds']) tokens[name] = readTokens(path.join(repoRoot, 'tokens', `${name}.css`));
  writeIfChanged(path.join(out, 'tokens.json'), JSON.stringify(tokens, null, 1) + '\n');

  const props = {};
  const componentsDir = path.join(repoRoot, 'components');
  for (const group of readdirSync(componentsDir).sort()) {
    const dir = path.join(componentsDir, group);
    if (!existsSync(dir) || !readdirSync(dir).length) continue;
    for (const file of readdirSync(dir).filter(f => f.endsWith('.d.ts')).sort()) {
      const name = file.slice(0, -'.d.ts'.length);
      const jsx = path.join(dir, `${name}.jsx`);
      props[`${group}/${name}`] = { ...readProps(path.join(dir, file)), defaults: existsSync(jsx) ? readDefaults(jsx, name) : {} };
    }
  }
  writeIfChanged(path.join(out, 'props.json'), JSON.stringify(props, null, 1) + '\n');

  writeKit(repoRoot, path.join(docsDir, 'public/kit'));
}

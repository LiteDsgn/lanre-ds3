/* Builds the docs' generated inputs from the design system's own files, once per `next dev` / `next build`:
   - .generated/lanre-tokens.css: tokens/*.css scoped to .lanre-preview (see scope-tokens.mjs)
   - .generated/tokens.json: every token with its group comment and note, for the foundations specimens
   - .generated/props.json: each component's props, summary and defaults from its .d.ts and .jsx
   Runs in Node from next.config.mjs, so tools/read-props.js gets the repo's TypeScript 6 API. */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
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
}

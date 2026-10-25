import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createMDX } from 'fumadocs-mdx/next';
import { writeGenerated } from './lib/generate.mjs';

const docsDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(docsDir, '..');

// Scoped tokens, token specimens and props tables come from tokens/ and components/. Regenerated each
// time Next starts, so restart `npm run docs` after changing a token or a .d.ts.
writeGenerated(repoRoot, docsDir);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // The docs import the design system straight from ../components, so the whole repo is the project root.
  turbopack: { root: repoRoot },
  outputFileTracingRoot: repoRoot,
};

export default withMDX(config);

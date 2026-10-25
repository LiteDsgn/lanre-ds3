import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.source/**',
    // copied in from the repo root by lib/generate.mjs; the originals live outside docs/
    '.generated/**',
    'public/kit/**',
  ]),
]);

export default eslintConfig;

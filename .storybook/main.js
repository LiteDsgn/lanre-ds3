import react from '@vitejs/plugin-react';
import { mergeConfig } from 'vite';
import dtsArgTypes from './dts-argtypes.js';

/* "Open in editor" uses launch-editor. It opens the editor app you have running, and only falls back to
   $EDITOR when none is. `npm run` sets EDITOR to vi, and Vim exits with code 1 without a terminal, so
   swap that terminal fallback for Cursor's CLI. A running VS Code, LAUNCH_EDITOR or VISUAL still wins. */
if (!process.env.LAUNCH_EDITOR && /^(vi|vim|nvim|nano)$/.test(process.env.EDITOR || 'vi')) process.env.EDITOR = 'cursor';

/* Stories live in stories/, not next to the components, so components/ stays exactly what the
   showcase loader, the bundle compiler and the birthday app copy expect. */
export default {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: config => mergeConfig(config, { plugins: [react(), dtsArgTypes()] }),
};

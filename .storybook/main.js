import react from '@vitejs/plugin-react';
import { mergeConfig } from 'vite';
import dtsArgTypes from './dts-argtypes.js';

/* Stories live in stories/, not next to the components, so components/ stays exactly what the
   showcase loader, the bundle compiler and the birthday app copy expect. */
export default {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: config => mergeConfig(config, { plugins: [react(), dtsArgTypes()] }),
};

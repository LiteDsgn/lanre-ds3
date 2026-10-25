import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Lanre';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'LiteDsgn',
  repo: 'lanre-ds3',
  branch: 'main',
};

/** Where "Open in Storybook" links point. Run `npm run storybook` locally, or set this to a deployed Storybook. */
export const storybookUrl = (process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006').replace(/\/$/, '');

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}

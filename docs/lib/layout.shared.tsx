import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig, storybookUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <span className="lanre-wordmark">{appName}</span>,
    },
    links: [{ text: 'Storybook', url: storybookUrl, external: true }],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

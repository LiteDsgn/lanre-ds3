import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { storybookUrl } from '@/lib/shared';

const SURFACES = {
  meadow: 'var(--bg-meadow)',
  sky: 'var(--bg-sky)',
  dusk: 'var(--bg-dusk)',
  cream: 'var(--cream-50)',
  panel: 'var(--cream-100)',
  world: 'var(--world-bg)',
} as const;

export type Surface = keyof typeof SURFACES;

/* A live design-system preview: the tokens only exist inside .lanre-preview, and not-prose keeps
   Fumadocs' typography off the components. Picks a painted ground like the Storybook decorator. */
export function Preview({ children, surface, world, padding = 24, className, style }: {
  children: ReactNode;
  surface?: Surface;
  world?: string;
  padding?: number | string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn('not-prose lanre-preview my-6 overflow-x-auto rounded-[12px] border border-fd-border', className)}
      data-world={world}
      style={{ background: SURFACES[surface ?? (world ? 'world' : 'meadow')], padding, ...style }}
    >
      {children}
    </div>
  );
}

/* Storybook story ids are the kebab-cased title, e.g. "Components/Buttons/Button" → components-buttons-button. */
export function StorybookLink({ title }: { title: string }) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return (
    <p>
      <a href={`${storybookUrl}/?path=/docs/${id}--docs`} target="_blank" rel="noreferrer">
        Open {title.split('/').pop()} in Storybook
      </a>{' '}
      for live controls, every state and the accessibility checks.
    </p>
  );
}

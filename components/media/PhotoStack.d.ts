import * as React from 'react';

/**
 * Ordered photo viewer: one photo at a time, prev/next, dot + "n / total" indicator, optional per-photo caption. Manual only.
 * @startingPoint section="Media" subtitle="Ordered photos with manual paging" viewport="700x380"
 */
export interface PhotoStackProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  photos: { src?: string; alt?: string; caption?: string }[];
  /** Controlled index (optional). */
  index?: number;
  onChange?: (index: number) => void;
  /** Frame height in px. Default 280. */
  height?: number;
  width?: number | string;
  /** contain (default: never crops a memory) or cover. */
  fit?: 'contain' | 'cover';
  style?: React.CSSProperties;
}

export function PhotoStack(props: PhotoStackProps): JSX.Element;

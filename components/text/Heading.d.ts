import * as React from 'react';

/**
 * A screen heading: a small wood tag, a big outlined title in the world's colour, and a cream plate with one line of explanation.
 * @startingPoint section="Text" subtitle="Eyebrow, outlined title and cream plate" viewport="700x300"
 */
export interface HeadingProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** A short label above the title. */
  eyebrow?: string;
  title: string;
  /** One or two sentences on a cream plate under the title. */
  lede?: React.ReactNode;
  /** Title size in px. Default 34. */
  size?: number;
  /** The title's element. Default h1. */
  as?: 'h1' | 'h2' | 'h3';
}

export function Heading(props: HeadingProps): React.JSX.Element;

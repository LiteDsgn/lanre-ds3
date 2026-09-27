import * as React from 'react';

/**
 * Readable card for a contributor's written memory (or Henry's letter): warm parchment, 20px UI type at 1.6 leading, ≤ 640px column.
 * @startingPoint section="Media" subtitle="Written memory card" viewport="700x260"
 */
export interface MemoryTextProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Paragraphs (use <p> elements). */
  children?: React.ReactNode;
  /** lg 20px (iPad) · md 17px (phone) · sm 15px. */
  size?: 'lg' | 'md' | 'sm';
  /** Gold quote-mark ornament (default true). */
  ornament?: boolean;
  width?: number | string;
  /** Default var(--layout-reading-max) = 640px. */
  maxWidth?: number | string;
  style?: React.CSSProperties;
}

export function MemoryText(props: MemoryTextProps): JSX.Element;

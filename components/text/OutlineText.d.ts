import * as React from 'react';

/**
 * Display text with a dark stroke painted behind the fill, level numbers, panel titles, captions over the world.
 * @startingPoint section="Text" subtitle="Outlined display type in 5 sizes" viewport="700x200"
 */
export interface OutlineTextProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'color'> {
  /** Element tag. Default span. */
  as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'p';
  /** Preset (xl 44 / lg 32 / md 24 / sm 18 / xs 14) or a px number. */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | number;
  /** Fill: white (default), gold, cream, blue, green, or any CSS color. */
  color?: 'white' | 'gold' | 'cream' | 'blue' | 'green' | string;
  /** Stroke tone: ink (default), stone (locked), blue (current level), gold, green, coral, berry, wood, or any CSS color. */
  stroke?: 'ink' | 'stone' | 'blue' | 'gold' | 'green' | 'coral' | 'berry' | 'wood' | string;
  /** Uppercase (default true). */
  uppercase?: boolean;
  /** Hard drop shadow under the text (default true). */
  shadow?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function OutlineText(props: OutlineTextProps): JSX.Element;

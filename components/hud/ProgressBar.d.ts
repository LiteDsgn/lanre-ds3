import * as React from 'react';

/**
 * Striped, bevelled progress bar in a dark inset track, XP, loading, boost timers, quest progress.
 * @startingPoint section="HUD" subtitle="Striped XP / loading bar with cap + label" viewport="700x200"
 */
export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Current value; percent = value / max. */
  value: number;
  /** Default 1 (value is a 0–1 ratio). */
  max?: number;
  tone?: 'gold' | 'blue' | 'teal' | 'green' | 'coral' | 'berry';
  /** sm 14 / md 22 / lg 30 px tall. */
  size?: 'sm' | 'md' | 'lg';
  /** Centered outlined label, e.g. "6/20" or "75%". */
  label?: React.ReactNode;
  /** Diagonal stripes on the fill (default true). */
  striped?: boolean;
  /** Node overlapping the left end (a level star badge, an avatar). */
  cap?: React.ReactNode;
  width?: number | string;
  /** dark = brown inset over the world (default); light = cream, inside panels. */
  track?: 'dark' | 'light';
  style?: React.CSSProperties;
}

export function ProgressBar(props: ProgressBarProps): JSX.Element;

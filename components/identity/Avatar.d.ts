import * as React from 'react';

/**
 * Contributor portrait with a white ring; falls back to a deterministic generated avatar (hue + pattern from seed, initials); mystery mode shows a neutral "?" and leaks nothing.
 * @startingPoint section="Identity" subtitle="Portrait, generated fallback, mystery" viewport="700x140"
 */
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Display name (initials + accessible label). */
  name?: string;
  /** Stable id used to pick the generated look (falls back to name). Use the contributor id so the avatar never changes. */
  seed?: string;
  /** Portrait URL. When present, replaces the generated avatar. */
  src?: string;
  /** Diameter in px. Default 64. */
  size?: number;
  /** Neutral unknown-person avatar. Ignores name/seed/src entirely so nothing identifying can leak. */
  mystery?: boolean;
  /** White ring (default true). */
  ring?: boolean;
  alt?: string;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
/** First letters of up to two words. */
export function initials(name?: string): string;

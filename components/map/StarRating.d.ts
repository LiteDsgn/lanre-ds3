import * as React from 'react';

/**
 * Gold/grey star row for level results; arc mode raises the middle star (level-complete crown).
 * @startingPoint section="Map" subtitle="0–3 stars, flat or arched" viewport="700x140"
 */
export interface StarRatingProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Earned stars. */
  value?: number;
  /** Default 3. */
  max?: number;
  /** Star size in px. Default 28. */
  size?: number;
  /** Middle star larger and raised, outer stars tilted. */
  arc?: boolean;
  /** Pop-in each earned star in sequence. */
  animate?: boolean;
  gap?: number;
  style?: React.CSSProperties;
}

export function StarRating(props: StarRatingProps): JSX.Element;

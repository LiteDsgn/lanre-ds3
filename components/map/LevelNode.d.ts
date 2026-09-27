import * as React from 'react';

/**
 * Level puck on the world map: a 3D stone/blue disc with an outlined number; stars above when complete, pulse ring when current.
 * @startingPoint section="Map" subtitle="Locked / current / complete level pucks" viewport="700x200"
 */
export interface LevelNodeProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'style'> {
  number: number | string;
  /** locked = grey stone, unplayable; current = blue with pulse ring; complete = blue with a star row. */
  state?: 'locked' | 'current' | 'complete';
  /** Earned stars (0–3), shown for complete. */
  stars?: number;
  /** Puck width in px. Default 84. */
  size?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function LevelNode(props: LevelNodeProps): JSX.Element;

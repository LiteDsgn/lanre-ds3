import * as React from 'react';

/**
 * A sign for choosing a world: a plank on two posts with the world's glyph, name and a line about it. A chosen sign glows and gets a tick. A locked sign, like the summit, is a stone plank that does nothing.
 * @startingPoint section="Contributor" subtitle="Choose a world, on signs hung over one road" viewport="700x560"
 */
export interface WorldSignProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan';
  /** Overrides the world's display name. */
  name?: string;
  /** Overrides the world's glyph. A locked sign always shows a lock. */
  glyph?: string;
  /** The line on the cream tag under the name. Defaults to the world's own. Pass "" for none. */
  blurb?: string;
  /** A number on a small marker at the sign's top left, for the order along the road. */
  number?: number;
  selected?: boolean;
  /** A stone sign that can't be chosen. It has no button and no number. */
  locked?: boolean;
  /** Hangs off the sign's bottom left, such as a "Your stop" Tag. */
  badge?: React.ReactNode;
  onClick?: () => void;
}

export function WorldSign(props: WorldSignProps): React.JSX.Element;

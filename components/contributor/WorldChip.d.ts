import * as React from 'react';

/**
 * A pill that shows the world a memory is in, with its glyph on a round medal, and changes it when pressed. Filled with the world's accent, with a small caret to say it can be changed.
 * @startingPoint section="Contributor" subtitle="The world a memory is in, as a pill" viewport="700x160"
 */
export interface WorldChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan';
  /** Overrides the world's display name. */
  name?: string;
  /** Overrides the world's glyph. */
  glyph?: string;
  /** The little caret that says "tap to change". Default true. */
  caret?: boolean;
  onClick?: () => void;
}

export function WorldChip(props: WorldChipProps): React.JSX.Element;

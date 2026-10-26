import * as React from 'react';

/**
 * One world in a list to choose from: its glyph on a round medal, its name and a line about it, with a radio on the right. The chosen row turns teal.
 * @startingPoint section="Contributor" subtitle="A list of worlds to pick from" viewport="700x420"
 */
export interface WorldOptionProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'children'> {
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan';
  /** Overrides the world's display name. */
  name?: string;
  /** Overrides the world's glyph. */
  glyph?: string;
  /** The line under the name. Defaults to the world's own. */
  blurb?: string;
  checked?: boolean;
  onChange?: (checked: true) => void;
}

export function WorldOption(props: WorldOptionProps): React.JSX.Element;

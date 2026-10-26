import * as React from 'react';

/**
 * The sign that marks where a world starts on the map: a plank on two posts, tinted with the world's accent, with its glyph, its name and a count. An optional button underneath opens the author's note for that world.
 * @startingPoint section="Map" subtitle="The sign at the start of a world" viewport="700x380"
 */
export interface WorldGateProps extends React.HTMLAttributes<HTMLDivElement> {
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan' | 'summit';
  /** Overrides the world's display name. */
  name?: string;
  /** Overrides the world's glyph, a Phosphor icon name. */
  glyph?: string;
  /** The line under the name, such as "4 memories" or "Surprises only". Leave it out for none. */
  detail?: string;
  /** Shows a "note" button under the sign. Called when it's pressed. */
  onNote?: () => void;
  /** Label on the note button. Default "A note from the author". */
  noteLabel?: string;
}

export function WorldGate(props: WorldGateProps): React.JSX.Element;

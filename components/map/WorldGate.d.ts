import * as React from 'react';

/**
 * Wooden signpost that opens a world on the map: world glyph + name on a board tinted with the world accent, level range, optional taped narrator note. Summit variant locks until the main path is complete.
 * @startingPoint section="Map" subtitle="World signpost with narrator note; locked summit" viewport="700x380"
 */
export interface WorldGateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan' | 'summit';
  /** Overrides the world's display name. */
  name?: string;
  /** e.g. "Levels 1–5". */
  levels?: string;
  /** Henry's authored note between worlds (never invented copy). */
  note?: React.ReactNode;
  /** Default "Henry". */
  noteAuthor?: string;
  /** Stone board + lock; shows "Opens when the road is complete". */
  locked?: boolean;
  /** Default 340. */
  width?: number | string;
  style?: React.CSSProperties;
}

export function WorldGate(props: WorldGateProps): JSX.Element;

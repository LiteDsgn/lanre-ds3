import * as React from 'react';

export interface DockStop {
  id: string;
  /** The stop's name, used for its accessible label unless `ariaLabel` is set. */
  name: string;
  /** The short name under the stop. Defaults to `name`. */
  label?: string;
  /** A Phosphor icon name. */
  glyph: string;
  /** done is lit gold, here is blue with a ring, ahead is stone. */
  state: 'done' | 'here' | 'ahead';
  /** How many surprises are still hidden there. */
  hidden?: number;
  /** A full accessible label, such as "Mango Grove, you are here, 2 surprises still hidden". */
  ariaLabel?: string;
}

/**
 * The dock down the side of the map: a compass that jumps to what's next, then one stop for each place on the road, from the top. Done stops are lit, the one you're at is ringed, and a count says how many surprises are still hidden. On phones it folds into the compass until it's tapped.
 * @startingPoint section="Toolbar" subtitle="Fast travel down the side" viewport="700x560"
 */
export interface FastTravelDockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** In order from the top of the dock. */
  stops: DockStop[];
  /** Folds into the compass until opened. */
  phone?: boolean;
  /** On a phone, whether it's open. */
  open?: boolean;
  /** The count on the folded compass: the surprises still hidden, in all. */
  hiddenTotal?: number;
  /** The word under the compass. Default "Next". */
  nextLabel?: string;
  /** The group's accessible name. Default "Fast travel". */
  label?: string;
  compassLabel?: string;
  openLabel?: string;
  closeLabel?: string;
  /** Sits inside a positioned box instead of covering the window. */
  contained?: boolean;
  /** The compass was pressed. On a phone it opens or closes the dock. */
  onCompass?: () => void;
  /** The "next" stop on an open phone dock was pressed. */
  onNext?: () => void;
  onTravel?: (id: string) => void;
  /** The dim area behind an open phone dock was pressed. */
  onClose?: () => void;
}

export function FastTravelDock(props: FastTravelDockProps): React.JSX.Element;

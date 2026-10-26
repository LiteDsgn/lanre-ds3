import * as React from 'react';

export interface ViewerPiece {
  /** A Phosphor icon name, such as "image" or "microphone". */
  icon: string;
  label: string;
  /** A short note shown until the piece is seen, such as a length. */
  meta?: string;
  /** Shows a tick, once the viewer has been through it. */
  seen?: boolean;
}

/**
 * The deck's keys, one per piece of the memory, each with its icon and name. A seen key shows a tick. With more than three pieces only the one on screen keeps its name.
 * @startingPoint section="Viewer" subtitle="The keys, one per piece" viewport="700x140"
 */
export interface ViewerKeysProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  pieces: ViewerPiece[];
  /** Index of the piece on screen. */
  at?: number;
  onSelect?: (index: number) => void;
  /** Accessible name of the group. Default "In this memory". */
  label?: string;
}

export function ViewerKeys(props: ViewerKeysProps): React.JSX.Element;

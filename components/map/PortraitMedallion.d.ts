import * as React from 'react';

/**
 * Portrait medallion: a revealed friend on a gold pedestal, with the level number on a plate underneath. Takes the LevelNode's place once a level is complete, and stays tappable for replay.
 * @startingPoint section="Map" subtitle="Completed levels as portrait medallions" viewport="700x220"
 */
export interface PortraitMedallionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'onClick'> {
  /** The revealed friend's name. Used for the generated avatar's initials and the accessible name. */
  name: string;
  /** Contributor id that seeds the generated avatar, so it stays the same everywhere. */
  seed?: string;
  /** Portrait URL. Without one, the generated avatar is used. */
  src?: string;
  /** Level number on the plate underneath. Leave it out for discoveries. */
  number?: number | string;
  /** Medallion width in px. Default 84, the same as LevelNode. */
  size?: number;
  /** Play the arrival animation. Use it once, for the level that was just completed. */
  pop?: boolean;
  /** Makes it a button for replay, with the bevel press. */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Accessible name. Defaults to "Replay level {number}, {name}" (or "Replay surprise from {name}") when clickable, otherwise "Level {number}, {name}" or the name. */
  label?: string;
  style?: React.CSSProperties;
}

export function PortraitMedallion(props: PortraitMedallionProps): React.JSX.Element;

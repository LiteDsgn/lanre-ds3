import * as React from 'react';

/**
 * World picker chip (primary theme of a package): world swatch + glyph + name; selected fills with the world accent and adds a tick.
 * @startingPoint section="Contributor" subtitle="Theme picker chips for the four worlds" viewport="700x160"
 */
export interface WorldChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  world?: 'mango_grove' | 'small_chops' | 'good_energy' | 'japan';
  selected?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md';
  /** Adds the prompt blurb under the name. */
  showBlurb?: boolean;
  style?: React.CSSProperties;
}

export function WorldChip(props: WorldChipProps): JSX.Element;

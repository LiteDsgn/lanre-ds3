import * as React from 'react';

/**
 * "Your People" collection tile: revealed (avatar + name + gem badge), mystery (neutral, nothing identifying) or new (late arrival awaiting discovery).
 * @startingPoint section="Identity" subtitle="Revealed / mystery / new collection tiles" viewport="700x200"
 */
export interface PersonTileProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** mystery renders no name, portrait or gem regardless of the other props. */
  state?: 'revealed' | 'mystery' | 'new';
  name?: string;
  relationship?: string;
  portrait?: string;
  seed?: string;
  gem?: 'amber' | 'emerald' | 'amethyst' | 'pearl';
  tier?: 1 | 2 | 3;
  /** Default 116. */
  width?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function PersonTile(props: PersonTileProps): JSX.Element;

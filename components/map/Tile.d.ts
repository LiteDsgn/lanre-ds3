import * as React from 'react';

/**
 * 3D board tile (rounded square with a solid side) for grid/path boards; variants tint the tile by terrain or purpose.
 * @startingPoint section="Map" subtitle="Terrain tiles: grass, sand, stone, water, reward, hazard, start" viewport="700x180"
 */
export interface TileProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'content'> {
  variant?: 'grass' | 'sand' | 'stone' | 'water' | 'reward' | 'hazard' | 'start';
  /** Tile width in px. Default 64. */
  size?: number;
  /** Centered content: a GameIcon, a number, a piece. Text renders outlined in display type. */
  content?: React.ReactNode;
  /** Gold glow ring: reachable / selected tile. */
  active?: boolean;
  /** Makes the tile a button. */
  onClick?: () => void;
  /** Accessible name when clickable. */
  label?: string;
  style?: React.CSSProperties;
}

export function Tile(props: TileProps): JSX.Element;

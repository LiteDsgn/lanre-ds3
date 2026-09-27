import * as React from 'react';

/**
 * Inventory / merge-grid cell: translucent dark square over the world with filled, empty, locked and add states; selected glows teal.
 * @startingPoint section="Rewards" subtitle="Inventory grid cells with counts + selection" viewport="700x200"
 */
export interface ItemCellProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style' | 'content'> {
  state?: 'empty' | 'filled' | 'locked' | 'add';
  /** The item glyph/illustration shown when filled. */
  content?: React.ReactNode;
  /** Level / quantity shown bottom-right when filled. */
  count?: number | string;
  /** Teal border + glow. */
  selected?: boolean;
  /** Ghosted silhouette (undiscovered item). */
  dim?: boolean;
  /** Default 72. */
  size?: number;
  onClick?: () => void;
  label?: string;
  style?: React.CSSProperties;
}

export function ItemCell(props: ItemCellProps): JSX.Element;

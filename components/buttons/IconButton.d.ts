import * as React from 'react';

/**
 * Round (or rounded-square) bevelled button holding a single glyph; optional notification badge and outlined caption.
 * @startingPoint section="Buttons" subtitle="Round glyph button with badge + caption" viewport="700x260"
 */
export interface IconButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  variant?: 'primary' | 'play' | 'confirm' | 'danger' | 'premium' | 'wood' | 'ghost' | 'locked';
  /** sm 36px / md 48px / lg 60px. */
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
  /** true renders a red "!" dot; a number/string renders a count. */
  badge?: boolean | number | string;
  /** Outlined uppercase caption under the button (e.g. SHOP, QUESTS). Also used as aria-label. */
  label?: string;
  /** The glyph, e.g. <i className="ph-fill ph-gear" /> or <GameIcon name="gift" />. */
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;

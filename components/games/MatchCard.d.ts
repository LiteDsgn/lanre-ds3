import * as React from 'react';

/**
 * Flip card for the brief, skippable matching game: blue "?" back, cream face with a themed symbol; matched pairs get a green ring + tick.
 * @startingPoint section="Games" subtitle="Matching cards: down / up / matched" viewport="700x180"
 */
export interface MatchCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  symbol?: 'mango' | 'rice' | 'flower' | 'dumbbell' | 'lantern' | 'star' | 'heart' | 'leaf';
  face?: 'down' | 'up' | 'matched';
  /** Card width in px (height 1.15×). Default 84. */
  size?: number;
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  style?: React.CSSProperties;
}

export function MatchCard(props: MatchCardProps): JSX.Element;

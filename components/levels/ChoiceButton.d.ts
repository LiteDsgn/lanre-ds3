import * as React from 'react';

/**
 * Full-width answer option for the sender guess and the friends' quiz. Letter badge + result glyph make states colour-independent.
 * @startingPoint section="Levels" subtitle="Guess / quiz option: idle, selected, correct, wrong, dim" viewport="700x330"
 */
export interface ChoiceButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** 0 → A, 1 → B, 2 → C … */
  index?: number;
  /** idle · selected (blue) · correct (green + check) · wrong (coral + ×, shakes once) · dim (stone, after resolution). */
  state?: 'idle' | 'selected' | 'correct' | 'wrong' | 'dim';
  /** md 56px (phone) · lg 64px (iPad). */
  size?: 'md' | 'lg';
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function ChoiceButton(props: ChoiceButtonProps): JSX.Element;

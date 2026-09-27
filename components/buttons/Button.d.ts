import * as React from 'react';

/**
 * Chunky bevelled game button. Solid darker bottom edge, top highlight, presses down 4px.
 * @startingPoint section="Buttons" subtitle="Bevelled CTA in 8 tones and 3 sizes" viewport="700x260"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Tone. primary = gold (default CTA), play = sky blue, confirm = teal OK, danger = coral, premium = berry, wood = brown frame, ghost = cream, locked = stone. */
  variant?: 'primary' | 'play' | 'confirm' | 'danger' | 'premium' | 'wood' | 'ghost' | 'locked';
  /** sm 36px / md 48px / lg 60px tall. */
  size?: 'sm' | 'md' | 'lg';
  /** display = Titan One uppercase (default); ui = Quicksand bold sentence case for longer labels. */
  typeface?: 'display' | 'ui';
  /** Leading icon node (e.g. <GameIcon name="play" size={20} />). */
  icon?: React.ReactNode;
  /** Trailing node (e.g. a price or a CurrencyPill). */
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  /** Stretch to container width. */
  block?: boolean;
  /** Fully rounded ends. */
  pill?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;

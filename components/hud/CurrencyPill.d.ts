import * as React from 'react';

/**
 * HUD currency readout: dark inset pill, glyph overlapping the left edge, optional "+" buy button on the right.
 * @startingPoint section="HUD" subtitle="Coins / gems / hearts readout with + button" viewport="700x160"
 */
export interface CurrencyPillProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Built-in glyph + tone. Default coin. */
  kind?: 'coin' | 'gem' | 'ruby' | 'heart' | 'energy' | 'star' | 'key';
  /** Formatted amount, e.g. "50,253k" or "3/3". */
  value: React.ReactNode;
  /** Custom glyph node replacing the built-in one (e.g. <GameIcon kind="chest" />). */
  icon?: React.ReactNode;
  /** When set, renders the teal "+" button and calls this on tap. */
  onAdd?: () => void;
  /** sm 28px / md 36px tall. */
  size?: 'sm' | 'md';
  /** dark = translucent brown over the world (default); light = cream, for inside panels. */
  tone?: 'dark' | 'light';
  minWidth?: number;
  style?: React.CSSProperties;
}

export function CurrencyPill(props: CurrencyPillProps): JSX.Element;

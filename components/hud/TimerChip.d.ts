import * as React from 'react';

/**
 * Small countdown chip (clock glyph + mm:ss) for boosts, offers, energy refills.
 * @startingPoint section="HUD" subtitle="Countdown chip" viewport="700x120"
 */
export interface TimerChipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Pre-formatted time, e.g. "00:02" or "3h 12m". */
  time: React.ReactNode;
  /** Phosphor glyph name. Default clock. */
  icon?: string;
  tone?: 'dark' | 'light';
  size?: 'sm' | 'md';
  /** Coral text + gentle float when time is nearly up. */
  urgent?: boolean;
  style?: React.CSSProperties;
}

export function TimerChip(props: TimerChipProps): JSX.Element;

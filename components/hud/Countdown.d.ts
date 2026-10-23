import * as React from 'react';

/**
 * Live countdown that ticks every second: a wooden board with day, hour, minute and second tiles, or a ticking TimerChip for the HUD.
 * @startingPoint section="HUD" subtitle="Live countdown: wooden board or HUD chip" viewport="700x300"
 */
export interface CountdownProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  /** When it ends: a Date, an ISO string or a timestamp in ms. */
  to: Date | string | number;
  /** board = the wooden board with tiles (default). chip = a ticking DD:HH:MM:SS TimerChip. */
  variant?: 'board' | 'chip';
  /** What it counts down to, e.g. "your birthday". Read out as "3 days, 4 hours and 12 minutes until your birthday". */
  label?: string;
  /** Board only: the gold tag across the top. Defaults to "Until {label}". */
  title?: React.ReactNode;
  /** Board only: a line under the tiles, such as the date. */
  caption?: React.ReactNode;
  /** Phosphor glyph name. Defaults to gift on the board and hourglass-medium on the chip. */
  icon?: string;
  /** What to show once the time has passed. Default nothing. */
  ended?: React.ReactNode;
  /** Chip only: turns urgent (coral, floating) within this many ms of the end. Default one day. */
  urgentWithin?: number;
  /** Chip only: TimerChip tone. */
  tone?: 'dark' | 'light';
  /** Chip only: TimerChip size. */
  size?: 'sm' | 'md';
  /** Freeze the clock at this timestamp in ms, for fixtures and screenshots. */
  now?: number;
  style?: React.CSSProperties;
}

export function Countdown(props: CountdownProps): React.JSX.Element | null;

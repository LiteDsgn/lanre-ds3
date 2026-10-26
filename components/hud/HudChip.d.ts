import * as React from 'react';

/** True for a moment each time `count` goes up, so a chip can bump as something is found. */
export function useBump(count: number): boolean;

/**
 * A count on the HUD, such as friends or surprises found: a dark pill with a big glyph overlapping its left edge. A tap does something about it. A coral dot says something new has arrived.
 * @startingPoint section="HUD" subtitle="Friends and surprises counts" viewport="700x140"
 */
export interface HudChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** A Phosphor icon name. Default "users-three". */
  icon?: string;
  /** teal is steady. berry glints every few seconds, for surprises. */
  tone?: 'teal' | 'berry';
  /** The count, such as "3/5". */
  value: string;
  /** Bumps the chip, once. Use `useBump(count)`. */
  bump?: boolean;
  /** A coral dot: something new has arrived. */
  fresh?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function HudChip(props: HudChipProps): React.JSX.Element;

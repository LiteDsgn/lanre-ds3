import * as React from 'react';

/**
 * Reward / status toast: dark pill that pops in with a bounce. Position it from the parent (usually top-center or above the bottom bar).
 * @startingPoint section="Feedback" subtitle="Bouncing reward toast" viewport="700x140"
 */
export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Leading glyph, e.g. <GameIcon kind="coin" size={32} />. */
  icon?: React.ReactNode;
  /** Headline in display type, e.g. "+50". */
  message: React.ReactNode;
  /** Small UI-type line under the headline, e.g. "Coins collected". */
  detail?: React.ReactNode;
  /** Headline color. */
  tone?: 'gold' | 'blue' | 'teal' | 'coral' | 'berry' | 'white';
  /** Renders nothing when false. */
  visible?: boolean;
  style?: React.CSSProperties;
}

export function Toast(props: ToastProps): JSX.Element | null;

import * as React from 'react';

/**
 * A card with a round sticker and a message: a quiet note, a warning, or a celebration. It slides up when it appears, and warnings are announced.
 * @startingPoint section="Feedback" subtitle="Sticker and message card: info, warn, gold" viewport="700x360"
 */
export interface NoticeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** info is the quiet cream card, warn is coral and announced, gold is for celebration. */
  tone?: 'info' | 'warn' | 'gold';
  /** A Phosphor icon name without the prefix. Default "info". */
  icon?: string;
  children?: React.ReactNode;
}

export function Notice(props: NoticeProps): React.JSX.Element;

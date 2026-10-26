import * as React from 'react';

/**
 * The contributor's clue as a taped note over the screen. Pressing it puts it back.
 * @startingPoint section="Viewer" subtitle="The clue as a taped note" viewport="700x200"
 */
export interface ClueCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  clue: string;
  /** Small line above the clue. Default "Their clue". */
  label?: string;
  /** Line under the clue. Default "Tap to put it back". */
  hint?: string;
  /** Plays the leaving animation. */
  leaving?: boolean;
  onClick?: () => void;
}

export function ClueCard(props: ClueCardProps): React.JSX.Element;

import * as React from 'react';

/**
 * The contributor's clue, parked as a tab on the cabinet. Pressing it calls the clue over the screen as a ClueCard. On narrow phones the tab just says "clue".
 * @startingPoint section="Viewer" subtitle="The clue tab" viewport="700x120"
 */
export interface ClueTabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** True while the clue card is out. */
  open?: boolean;
  /** The part that drops away on narrow phones. Default "Their ". */
  prefix?: string;
  label?: string;
  onClick?: () => void;
}

export function ClueTab(props: ClueTabProps): React.JSX.Element;

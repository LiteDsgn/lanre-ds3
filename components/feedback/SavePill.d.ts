import * as React from 'react';

/**
 * The autosave state for a HUD, as a round cloud: it bobs while saving, pops once saved, and shows its word for a moment when pressed. Errors show "Not saved" and stay on screen.
 * @startingPoint section="Feedback" subtitle="Autosave cloud: saving, saved, not saved" viewport="700x140"
 */
export interface SavePillProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  status?: 'saved' | 'saving' | 'pending' | 'error' | 'conflict';
  /** How long the word stays after a press, in ms. Default 2500. */
  wordMs?: number;
}

export function SavePill(props: SavePillProps): React.JSX.Element;

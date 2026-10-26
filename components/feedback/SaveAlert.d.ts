import * as React from 'react';

/**
 * The full message behind a failed save: a conflict says what happened and offers Reload, an error says it will retry. Renders nothing otherwise.
 * @startingPoint section="Feedback" subtitle="Conflict and error messages for autosave" viewport="700x140"
 */
export interface SaveAlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  status?: 'saved' | 'saving' | 'pending' | 'error' | 'conflict';
  /** The reason. For a conflict it is the whole message; for an error it follows "Not saved yet:". */
  error?: string | null;
  /** Shows a Reload button on a conflict. */
  onReload?: () => void;
}

export function SaveAlert(props: SaveAlertProps): React.JSX.Element | null;

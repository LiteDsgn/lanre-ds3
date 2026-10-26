import * as React from 'react';

/**
 * The one big button on the deck. It always says what happens next, with a round dial on the right. Blue and nudging while waiting on a guess, green once saved.
 * @startingPoint section="Viewer" subtitle="The big button that says what's next" viewport="700x140"
 */
export interface ViewerKnobProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  /** A Phosphor icon name for the dial. Default "caret-right". */
  icon?: string;
  weight?: 'bold' | 'fill';
  /** guess = waiting on a guess. saved = done. */
  tone?: 'guess' | 'saved';
  /** A gentle nudge every few seconds, like the Level button on the map. */
  attract?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function ViewerKnob(props: ViewerKnobProps): React.JSX.Element;

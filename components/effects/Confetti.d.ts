import * as React from 'react';

/**
 * A one-shot burst of coloured paper from the middle of its parent, for a reveal or a win. Hidden for reduced motion.
 * @startingPoint section="Effects" subtitle="One-shot paper burst" viewport="700x360"
 */
export interface ConfettiProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** How many pieces. Default 46. */
  pieces?: number;
  /** Seeds the random spread, so a burst looks the same each time. Change it for a different pattern. */
  seed?: string;
}

export function Confetti(props: ConfettiProps): React.JSX.Element;

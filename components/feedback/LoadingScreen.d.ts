import * as React from 'react';

/**
 * The boot screen: sky, drifting clouds, the title, a striped gold bar that grows and shrinks, and a hill with the road setting off. Fills the window.
 * @startingPoint section="Feedback" subtitle="Full-window boot screen" viewport="700x420"
 */
export interface LoadingScreenProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The name shown big above the bar. Left out when empty. */
  title?: string;
  /** The words under the bar. Default "Loading…". */
  label?: string;
}

export function LoadingScreen(props: LoadingScreenProps): React.JSX.Element;

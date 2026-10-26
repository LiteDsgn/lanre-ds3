import * as React from 'react';

/**
 * The bar along the bottom of the map: two tabs with the big Next button between them, floating over the window, centred.
 * @startingPoint section="Toolbar" subtitle="Two tabs and a big Next button" viewport="700x260"
 */
export interface ToolbarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** The accessible name. Default "Adventure tools". */
  label?: string;
  /** Sits inside a positioned box instead of covering the window. */
  contained?: boolean;
  /** ToolbarTabs on either side of a ToolbarNext. */
  children?: React.ReactNode;
}

export function Toolbar(props: ToolbarProps): React.JSX.Element;

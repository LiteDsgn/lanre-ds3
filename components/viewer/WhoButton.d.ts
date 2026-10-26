import * as React from 'react';

/**
 * Who sent it, on the cabinet: a mystery face and "Ready to guess" until they've guessed, then the friend's face and "From" with their name. Pressing it opens the tray either way.
 * @startingPoint section="Viewer" subtitle="Mystery face, then the friend" viewport="700x140"
 */
export interface WhoButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** True once they know who it was from. */
  found?: boolean;
  /** Berry instead of blue, for a surprise beside the road. */
  berry?: boolean;
  name?: string;
  /** Stable id for the generated avatar. */
  seed?: string;
  portrait?: string;
  /** What it says before the reveal. Default "Ready to guess". */
  text?: string;
  onClick?: () => void;
}

export function WhoButton(props: WhoButtonProps): React.JSX.Element;

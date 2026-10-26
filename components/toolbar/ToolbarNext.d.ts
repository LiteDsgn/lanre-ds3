import * as React from 'react';

/**
 * The big round button in the middle of the toolbar. It shows what's next, such as a level number, a padlock or an envelope. While the road rearranges itself it's busy and can't be pressed, and once the letter is ready it turns gold.
 * @startingPoint section="Toolbar" subtitle="The big Next button, in each of its moods" viewport="700x200"
 */
export interface ToolbarNextProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** The small word above the value. Default "Next". */
  caption?: string;
  /** Gold, with a glow, for the letter. */
  gold?: boolean;
  /** Cream, for while the road rearranges itself. Not a button then, and hidden from screen readers. */
  busy?: boolean;
  /** Stone, for when there's nothing to open. */
  disabled?: boolean;
  onClick?: () => void;
  /** The value: a number, or an icon such as a padlock, an envelope or an hourglass. */
  children?: React.ReactNode;
}

export function ToolbarNext(props: ToolbarNextProps): React.JSX.Element;

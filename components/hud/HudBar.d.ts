import * as React from 'react';

/**
 * The bar along the top of the map: chips on the left and a slot on the right, such as a sound toggle, that drops away on phones. It sits over the window and lets taps through to the map, except on what's inside it.
 * @startingPoint section="HUD" subtitle="The map's top bar, with HudChips" viewport="700x180"
 */
export interface HudBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** HudChips. On a narrow phone they wrap onto a second row instead of pushing the right side off screen. */
  left?: React.ReactNode;
  /** Hidden on phones. */
  right?: React.ReactNode;
  /** Hides the bar, for when something covers the map. */
  hidden?: boolean;
  /** Sits inside a positioned box instead of covering the window. */
  contained?: boolean;
}

export function HudBar(props: HudBarProps): React.JSX.Element;

import * as React from 'react';

/**
 * Ordered contents of a memory package (text / photo / audio / video) as tappable steps with seen ticks and an "n / total" readout. Never auto-advances.
 * @startingPoint section="Levels" subtitle="Package contents stepper" viewport="700x120"
 */
export interface PackageStepperProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  items: { type: 'text' | 'photo' | 'audio' | 'video'; label?: string }[];
  /** Index of the item on screen. */
  current?: number;
  /** Indices the viewer has opened (green tick). */
  seen?: number[];
  onSelect?: (index: number) => void;
  /** White outlined readout when placed on the world instead of a panel. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

export function PackageStepper(props: PackageStepperProps): JSX.Element;

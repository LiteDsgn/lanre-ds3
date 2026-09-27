import * as React from 'react';

/**
 * Chunky on/off toggle with an inset track and a bevelled knob that bounces across.
 * @startingPoint section="Forms" subtitle="Inset toggle, teal/blue/gold" viewport="700x120"
 */
export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'style' | 'onChange'> {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** On-state color. Default teal. */
  tone?: 'teal' | 'blue' | 'gold' | 'green' | 'berry';
  size?: 'sm' | 'md';
  /** Accessible name (visible label is rendered by the parent row). */
  label?: string;
  style?: React.CSSProperties;
}

export function Switch(props: SwitchProps): JSX.Element;

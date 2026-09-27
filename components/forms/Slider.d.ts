import * as React from 'react';

/**
 * Volume-style slider: inset dark track, colored fill, chunky bevelled grip knob. Wraps a native range input for accessibility.
 * @startingPoint section="Forms" subtitle="Volume slider with grip knob" viewport="700x140"
 */
export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'onChange'> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  tone?: 'blue' | 'teal' | 'gold' | 'green' | 'berry';
  /** Leading glyph (e.g. <GameIcon kind="music" />). */
  icon?: React.ReactNode;
  /** Total width incl. icon. Default 220. */
  width?: number | string;
  disabled?: boolean;
  /** Accessible name. */
  label?: string;
  style?: React.CSSProperties;
}

export function Slider(props: SliderProps): JSX.Element;

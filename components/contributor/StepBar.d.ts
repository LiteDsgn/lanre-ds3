import * as React from 'react';

/**
 * Contributor-flow progress: numbered step pucks on a short stretch of road that fills green as steps finish. The current puck pulses, and a step forward celebrates.
 * @startingPoint section="Contributor" subtitle="Flow steps, with and without labels" viewport="700x200"
 */
export interface StepBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** Step names, in order. Without `labels` they're only read out to screen readers. */
  steps: string[];
  /** 0-based current step. */
  current?: number;
  /** Shows each step's name under its puck, on wider 68px slots. Without it, slots are 46px. */
  labels?: boolean;
  style?: React.CSSProperties;
}

export function StepBar(props: StepBarProps): React.JSX.Element;

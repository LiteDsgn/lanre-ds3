import * as React from 'react';

/**
 * Contributor-flow progress: numbered pucks joined by a line that fills green as steps complete; compact mode prints "Step 2 of 5: Memory" for phones.
 * @startingPoint section="Contributor" subtitle="Flow steps, full and compact" viewport="700x200"
 */
export interface StepBarProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  steps: string[];
  /** 0-based current step. */
  current?: number;
  /** Lets the contributor go back to completed steps. */
  onSelect?: (index: number) => void;
  compact?: boolean;
  style?: React.CSSProperties;
}

export function StepBar(props: StepBarProps): JSX.Element;

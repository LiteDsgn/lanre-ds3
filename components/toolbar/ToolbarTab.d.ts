import * as React from 'react';

/**
 * A tab on the toolbar: a round icon and a short label.
 * @startingPoint section="Toolbar" subtitle="A toolbar tab" viewport="700x140"
 */
export interface ToolbarTabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** A Phosphor icon name, such as "users-three". */
  icon: string;
  weight?: 'fill' | 'bold';
  label: string;
  onClick?: () => void;
}

export function ToolbarTab(props: ToolbarTabProps): React.JSX.Element;

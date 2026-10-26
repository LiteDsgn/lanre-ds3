import * as React from 'react';

/**
 * A pill-shaped tab switch for two or three views of the same list, such as People and Keepsakes. The chosen tab lifts onto a white pill.
 * @startingPoint section="Buttons" subtitle="Pill tab switch" viewport="700x140"
 */
export interface SegmentedTab {
  id: string;
  label: React.ReactNode;
}

export interface SegmentedTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: SegmentedTab[];
  /** The id of the tab that is on. */
  value: string;
  onChange?: (id: string) => void;
  /** Accessible name for the group, such as "Collection". */
  label?: string;
}

export function SegmentedTabs(props: SegmentedTabsProps): React.JSX.Element;

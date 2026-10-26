import * as React from 'react';

/**
 * Hangs a column of WorldSigns over one road, with a straight stretch of road showing between the signs.
 * @startingPoint section="Contributor" subtitle="Signs hung over one road" viewport="700x560"
 */
export interface WorldSignsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** The group's accessible name, such as "Where on the road". */
  label: string;
  children?: React.ReactNode;
}

export function WorldSigns(props: WorldSignsProps): React.JSX.Element;

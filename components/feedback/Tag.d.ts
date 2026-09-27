import * as React from 'react';

/**
 * Small uppercase label chip: MOST POPULAR, 3X VALUE, ONE-TIME OFFER, NEW. Sits on a card edge or next to a title.
 * @startingPoint section="Feedback" subtitle="Uppercase label chip in 8 tones" viewport="700x120"
 */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  tone?: 'danger' | 'gold' | 'teal' | 'blue' | 'berry' | 'green' | 'stone' | 'wood';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;

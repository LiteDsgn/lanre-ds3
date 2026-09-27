import * as React from 'react';

/**
 * Notification dot / count bubble with a white ring. Pin it to a button or tab corner.
 * @startingPoint section="Feedback" subtitle="Notification dot + count" viewport="700x120"
 */
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** "!" (default) or a number/short string. */
  count?: React.ReactNode;
  tone?: 'danger' | 'gold' | 'blue' | 'teal' | 'green';
  size?: 'sm' | 'md';
  /** Gentle bob to draw the eye. */
  pulse?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;

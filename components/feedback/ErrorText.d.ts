import * as React from 'react';

/**
 * A short coral error line for under a form or field. Renders nothing without a message, and is announced to screen readers when one appears.
 * @startingPoint section="Feedback" subtitle="Coral error line, announced" viewport="700x120"
 */
export interface ErrorTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

export function ErrorText(props: ErrorTextProps): React.JSX.Element | null;

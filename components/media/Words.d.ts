import * as React from 'react';

/** Messages shorter than this sit big in the middle and type themselves in. Longer ones read like a letter. */
export const SHORT_CHARS: number;

/**
 * A written memory, filling its box. A few words sit big in the middle and type themselves in once. Longer text lays out as paragraphs that scroll, with a "Scroll to keep reading" hint.
 * @startingPoint section="Media" subtitle="A written memory in a screen" viewport="700x420"
 */
export interface WordsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** The text. A blank line starts a new paragraph. */
  text: string;
  /** True once it has typed in, so it doesn't type again. Short messages only. */
  typed?: boolean;
  /** Called when the last character is in, or straight away for long text. */
  onTyped?: () => void;
  /** Accessible name for the scrolling text. Default "Message". */
  label?: string;
}

export function Words(props: WordsProps): React.JSX.Element;

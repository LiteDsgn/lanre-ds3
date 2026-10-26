import * as React from 'react';

/**
 * The card that stands in when a photo, video or voice note didn't load, with a Try again button.
 * @startingPoint section="Media" subtitle="When media didn't load" viewport="700x140"
 */
export interface UnavailableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** What failed, in a word or two: "photo", "video", "voice note", "set of photos". Reads "This photo didn't load." */
  what?: string;
  onRetry?: () => void;
}

export function Unavailable(props: UnavailableProps): React.JSX.Element;

import * as React from 'react';

/**
 * A voice note as a cassette: two reels that spin while it plays, a wave, a play button, a seek bar and the time. Never plays by itself, and it stays put when it ends.
 * @startingPoint section="Media" subtitle="Voice note on a cassette" viewport="700x340"
 */
export interface CassetteProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Audio URL. Without one, an Unavailable card shows. */
  src?: string;
  /** Label on the tape. Default "Voice note". Keep it neutral during a mystery, never the sender's name. */
  title?: string;
  /** Length in seconds, shown until the file reports its own. Recordings often report nothing until played through. */
  duration?: number;
  /** A line under the cassette. */
  heading?: string;
  /** A smaller line under the heading. */
  hint?: string;
  onError?: () => void;
  /** Called with "tap" when the play button is pressed, so you can play a sound. */
  onSound?: (name: 'tap') => void;
}

export function Cassette(props: CassetteProps): React.JSX.Element;

import * as React from 'react';

/**
 * Voice-note player: bevelled play/pause, seekable inset track, tabular time. Ends paused: never auto-advances.
 * @startingPoint section="Media" subtitle="Voice note player" viewport="700x140"
 */
export interface AudioPlayerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Audio URL. Without one the player runs a demo clock of `duration` seconds. */
  src?: string;
  /** Neutral title, e.g. "Voice note", never the sender's name during a mystery. */
  title?: string;
  /** Fallback duration in seconds for the demo clock. */
  duration?: number;
  tone?: 'teal' | 'blue' | 'gold' | 'coral' | 'berry';
  style?: React.CSSProperties;
}

export function AudioPlayer(props: AudioPlayerProps): JSX.Element;

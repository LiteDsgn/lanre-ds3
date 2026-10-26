import * as React from 'react';

/**
 * A video on a strip of film, with sprocket holes down the sides. It keeps its own shape, upright ones included, loads with a shimmer, and uses the browser's controls so full screen works on a phone.
 * @startingPoint section="Media" subtitle="Video on a film strip" viewport="700x420"
 */
export interface FilmProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** Video URL. Without one, an Unavailable card shows. */
  src?: string;
  /** A neutral line under the film, never the sender. */
  caption?: string;
  /** The video's own size in px, used for its shape until it loads. Default 16 by 9. */
  width?: number;
  height?: number;
  /** Pauses the video when it turns true, for when something else opens on top. */
  paused?: boolean;
  onError?: () => void;
}

export function Film(props: FilmProps): React.JSX.Element;

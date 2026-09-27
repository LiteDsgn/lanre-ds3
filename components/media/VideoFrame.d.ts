import * as React from 'react';

/**
 * Video with system-styled controls (big play, play/pause, seek, time, mute, full screen). No autoplay, no loop, ends on a "play again" state.
 * @startingPoint section="Media" subtitle="Video frame with controls" viewport="700x400"
 */
export interface VideoFrameProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** Video URL. Without one a striped placeholder is shown. */
  src?: string;
  poster?: string;
  /** CSS aspect-ratio. Default "16 / 9"; use "9 / 16" for phone recordings. */
  ratio?: string;
  /** Neutral caption under the frame. */
  caption?: React.ReactNode;
  width?: number | string;
  style?: React.CSSProperties;
}

export function VideoFrame(props: VideoFrameProps): JSX.Element;

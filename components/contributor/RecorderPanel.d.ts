import * as React from 'react';

/**
 * The card a voice recorder lives in, drawing one step at a time: a prompt and Record, a blinking dot with the time and Stop, or the take to play back with Redo and Use this. It only shows a state; AudioRecorder does the recording.
 * @startingPoint section="Contributor" subtitle="Voice-recorder card: idle, recording, review" viewport="700x300"
 */
export interface RecorderPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  phase?: 'idle' | 'recording' | 'review';
  /** False when the browser can't record, which shows a note to upload a file instead. Default true. */
  supported?: boolean;
  /** The line above Record. Default "Record a voice note." */
  prompt?: React.ReactNode;
  /** Time recorded so far, in seconds. */
  seconds?: number;
  /** The limit shown beside the time, in seconds. Default 600. */
  maxSeconds?: number;
  /** The recorded take to play back in the review step. */
  url?: string | null;
  /** A problem to show under the step, such as a blocked microphone. */
  error?: string | null;
  onRecord?: () => void;
  onStop?: () => void;
  onRedo?: () => void;
  onUse?: () => void;
  onCancel?: () => void;
}

export function RecorderPanel(props: RecorderPanelProps): React.JSX.Element;
/** 90 gives "1:30". Returns null for a missing or non-finite number. */
export function formatDuration(seconds?: number | null): string | null;

import * as React from 'react';
import { RecorderPanelProps } from './RecorderPanel';

/** What onDone receives: the take, ready to upload. */
export interface RecordedAudio {
  blob: Blob;
  kind: 'audio';
  /** The format that was recorded, such as "audio/mp4" or "audio/webm". */
  mimeType: string;
  /** "voice-note.m4a", ".ogg" or ".webm", to match the format. */
  filename: string;
  durationSeconds: number;
}

/**
 * A voice-note recorder: record, listen back, then use or discard. It asks for the microphone when Record is pressed, stops by itself at the limit, and keeps the take in the browser until Use this.
 * @startingPoint section="Contributor" subtitle="Working voice-note recorder" viewport="700x300"
 */
export interface AudioRecorderProps extends Omit<RecorderPanelProps, 'phase' | 'supported' | 'seconds' | 'url' | 'error' | 'onRecord' | 'onStop' | 'onRedo' | 'onUse'> {
  /** Called with the take when Use this is pressed. */
  onDone?: (audio: RecordedAudio) => void;
  onCancel?: () => void;
  /** The longest take, in seconds. Default 600. */
  maxSeconds?: number;
}

export function AudioRecorder(props: AudioRecorderProps): React.JSX.Element;

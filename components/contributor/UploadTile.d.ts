import * as React from 'react';

/**
 * One block of a memory: a numbered step marker, its kind, and keys to move or remove it. Photo, video and voice note blocks add a thumbnail and the upload's state. The caption or the text field goes in as children.
 * @startingPoint section="Contributor" subtitle="Memory blocks: text, and every upload state" viewport="700x620"
 */
export interface UploadTileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  type?: 'text' | 'photo' | 'video' | 'audio';
  /** 0-based place in the memory. Every block after the first gets a stretch of road up to the one above. */
  index?: number;
  /** How many blocks the memory has, so the last one can't move down. */
  count?: number;
  /** Upload state for photo, video and audio blocks. stalled = it stopped before finishing; missing = the file is gone. */
  state?: 'uploading' | 'done' | 'error' | 'stalled' | 'missing';
  /** 0–1 while uploading. */
  progress?: number;
  /** Filename, for the contributor only. */
  name?: string;
  /** Duration and size, e.g. "0:42 · 12.6 MB". */
  details?: React.ReactNode;
  /** Thumbnail URL for photos. */
  thumb?: string;
  /** Why the upload failed. Shown after "Upload failed". */
  reason?: string;
  /** A message under the upload's state, such as a retry that failed too. */
  error?: React.ReactNode;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onRemove?: () => void;
  /** Shows Retry on failed and stalled uploads. */
  onRetry?: () => void;
  /** Shows Cancel while uploading. */
  onCancel?: () => void;
  /** The caption field, or the text field of a text block. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function UploadTile(props: UploadTileProps): React.JSX.Element;

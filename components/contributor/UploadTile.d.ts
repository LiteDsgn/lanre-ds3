import * as React from 'react';

/**
 * Contributor upload cell: add (dashed), uploading (% + bar), error (warning + Retry), done (thumb + tick). Media-type glyph bottom-left, remove × top-right.
 * @startingPoint section="Contributor" subtitle="Upload states: add / uploading / error / done" viewport="700x180"
 */
export interface UploadTileProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  type?: 'photo' | 'video' | 'audio' | 'text';
  state?: 'idle' | 'uploading' | 'error' | 'done';
  /** 0–1 while uploading. */
  progress?: number;
  /** Filename shown under the tile (contributor-side only). */
  name?: string;
  /** Thumbnail URL for photos/videos. */
  thumb?: string;
  onAdd?: () => void;
  onRetry?: () => void;
  onRemove?: () => void;
  /** Default 104. */
  size?: number;
  style?: React.CSSProperties;
}

export function UploadTile(props: UploadTileProps): JSX.Element;

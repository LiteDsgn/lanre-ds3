import * as React from 'react';

export interface AlbumPhoto {
  src?: string;
  /** Alt text. Falls back to "Photo n". */
  alt?: string;
  caption?: string;
  /** The photo's own size in px. Used for its shape until it loads, then the file's own size wins. */
  width?: number;
  height?: number;
  /** Stable key. Defaults to `src`. */
  id?: string;
}

/**
 * Photos in a box, one at a time on a tilted polaroid, at their own shape. A strip of thumbnails jumps around, arrows and swipes page through, and tapping a photo opens it full screen in a lightbox.
 * @startingPoint section="Media" subtitle="Photos, a strip and a lightbox" viewport="700x520"
 */
export interface AlbumProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Photos without a `src` are skipped. If none have one, the album shows an Unavailable card. */
  photos: AlbumPhoto[];
  /** The photo on show. Leave it out and the album keeps its own place. */
  index?: number;
  onIndex?: (index: number) => void;
  /** A photo failed to load, or Try again was pressed on the Unavailable card. */
  onError?: () => void;
  /** Called with "tick" when paging and "tap" when opening a photo, so you can play a sound. */
  onSound?: (name: 'tick' | 'tap') => void;
  /** Where the lightbox is drawn. Default `document.body`. Pass an element inside a themed wrapper if your tokens are scoped. */
  lightboxRoot?: HTMLElement | null;
}

export function Album(props: AlbumProps): React.JSX.Element;

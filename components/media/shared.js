'use client';
import { useCallback, useState } from 'react';

/* Helpers shared by the media components. */

export const reduceMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const clock = s => Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
// Browser recordings (webm) often report an Infinity duration until played through; treat that as unknown.
export const finite = d => (Number.isFinite(d) && d > 0 ? d : 0);

/* Whether a photo or video has arrived, for a skeleton while it is on its way. Keyed by the URL, so a fresh link
   (or the next photo) starts loading again. A photo already in the cache counts as arrived straight away. */
export function useLoaded(src) {
  const [arrived, setArrived] = useState(null);
  const loaded = !!src && arrived === src;
  const done = useCallback(() => setArrived(src ?? null), [src]);
  const checkImage = useCallback(el => { if (el && el.complete && el.naturalWidth > 0) setArrived(src ?? null); }, [src]);
  return { loaded, done, checkImage };
}

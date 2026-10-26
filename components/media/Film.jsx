'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useLoaded } from './shared.js';
import { Unavailable } from './Unavailable';

/* A video on a strip of film. It keeps its own shape, upright ones included, and uses the browser's own controls,
   so full screen works on a phone. Fills the width of the box it sits in, which is a size container. */
export function Film({ src, caption, width, height, paused = false, onError, ...rest }) {
  const video = useRef(null);
  const [natural, setNatural] = useState(null);
  const { loaded, done } = useLoaded(src);
  useEffect(() => { if (paused && video.current) video.current.pause(); }, [paused]);
  // A server-rendered video can have its metadata before React is listening, and React doesn't replay that event.
  useEffect(() => {
    const el = video.current;
    if (!el || el.readyState < 1) return;
    done();
    if (el.videoWidth && el.videoHeight) setNatural({ w: el.videoWidth, h: el.videoHeight });
  }, [src, done]);
  if (!src) return <Unavailable what="video" onRetry={onError} />;
  const shape = natural || (width && height ? { w: width, h: height } : { w: 16, h: 9 });
  return (
    <figure className="mp-film" style={{ '--w': shape.w, '--h': shape.h, '--cap': caption ? '34px' : '0px' }} {...rest}>
      <div className="mp-film-strip mp-media" data-loaded={loaded}>
        <span className="mp-shimmer mp-on-dark mp-inset" aria-hidden="true" />
        <video ref={video}
          // The fragment asks the browser to paint the first frame instead of a black box.
          src={src + '#t=0.001'} controls playsInline preload="metadata"
          onLoadedMetadata={e => {
            done();
            const { videoWidth: w, videoHeight: h } = e.currentTarget;
            if (w && h) setNatural({ w, h });
          }}
          onError={onError} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { clock, finite } from './shared.js';
import { Unavailable } from './Unavailable';

/* A voice note as a cassette: two reels that spin while it plays, a wave, a play button and a seek bar. */
export function Cassette({ src, title = 'Voice note', duration = 0, heading, hint, onError, onSound, ...rest }) {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(duration);
  // A server-rendered audio element can know its length before React is listening.
  useEffect(() => {
    const a = audio.current;
    if (a && a.readyState >= 1) setDur(finite(a.duration) || duration);
  }, [src, duration]);
  if (!src) return <Unavailable what="voice note" onRetry={onError} />;

  const known = e => setDur(finite(e.currentTarget.duration) || duration);
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (onSound) onSound('tap');
    if (a.paused) a.play().catch(() => setPlaying(false));
    else a.pause();
  };
  const pct = dur ? Math.min(100, (t / dur) * 100) : 0;

  return (
    <div className={'mp-tape-deck' + (playing ? ' mp-playing' : '')} {...rest}>
      <audio ref={audio} src={src} preload="metadata" onLoadedMetadata={known} onDurationChange={known}
        onTimeUpdate={e => setT(e.currentTarget.currentTime)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={onError} />
      <div className="mp-cassette">
        <div className="mp-cassette-label">
          <span>{title}</span>
          <span>{dur ? clock(dur) : ''}</span>
        </div>
        <div className="mp-reels" aria-hidden="true">
          <span className="mp-reel" />
          <span className="mp-wave">
            {Array.from({ length: 22 }, (_, i) => (
              <i key={i} style={{ '--bar': Math.round(10 + Math.abs(Math.sin(i * 1.7)) * 30) + 'px', '--delay': (i % 7) * -120 + 'ms' }} />
            ))}
          </span>
          <span className="mp-reel" />
        </div>
        <div className="mp-transport">
          <button type="button" className="mp-cassette-play" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
            <i className={'ph-fill ph-' + (playing ? 'pause' : 'play')} aria-hidden="true" />
          </button>
          <span className="mp-seek">
            <span className="mp-seek-bar"><b style={{ width: pct + '%' }} /></span>
            <input type="range" min={0} max={dur || 1} step={0.1} value={t}
              onChange={e => { const to = Number(e.target.value); setT(to); if (audio.current) audio.current.currentTime = to; }}
              aria-label="Seek the voice note" />
          </span>
          <span className="mp-cassette-time">{clock(t)}</span>
        </div>
      </div>
      {heading && <h4 className="mp-tape-heading">{heading}</h4>}
      {hint && <p className="mp-tape-hint">{hint}</p>}
    </div>
  );
}

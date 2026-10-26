'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { reduceMotion } from './shared.js';

/* A few words sit big in the middle of the box; anything longer reads like a letter. */
export const SHORT_CHARS = 180;

export function Words({ text = '', typed = false, onTyped, label = 'Message', ...rest }) {
  const clean = text.trim();
  const short = clean.length < SHORT_CHARS;
  const [shown, setShown] = useState(() => (short && !typed && !reduceMotion() ? 0 : clean.length));
  const [more, setMore] = useState(false);
  const box = useRef(null);
  const done = useRef(onTyped);
  useEffect(() => { done.current = onTyped; });

  // Short messages type themselves in, once. The rest of the text is already laid out, so nothing jumps.
  useEffect(() => {
    if (shown >= clean.length) { if (done.current) done.current(); return; }
    const id = window.setTimeout(() => setShown(n => Math.min(clean.length, n + 2)), 28);
    return () => window.clearTimeout(id);
  }, [shown, clean.length]);

  const measure = useCallback(() => {
    const el = box.current;
    if (el) setMore(el.scrollHeight - el.scrollTop - el.clientHeight > 24);
  }, []);
  useEffect(() => {
    const id = window.requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => { window.cancelAnimationFrame(id); window.removeEventListener('resize', measure); };
  }, [measure]);

  const paragraphs = clean.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
  return (
    <>
      <div ref={box} className={'mp-words' + (short ? ' mp-words-short' : '')} onScroll={measure} tabIndex={0} role="group" aria-label={label} {...rest}>
        <div className="mp-words-inner">
          {short ? (
            <p>
              <span>{clean.slice(0, shown)}</span>
              {shown < clean.length && (
                <>
                  <span className="mp-words-cursor" aria-hidden="true" />
                  <span className="mp-words-unwritten">{clean.slice(shown)}</span>
                </>
              )}
            </p>
          ) : (
            paragraphs.map((p, i) => <p key={i}>{p}</p>)
          )}
        </div>
      </div>
      {more && <div className="mp-words-more" aria-hidden="true">Scroll to keep reading</div>}
    </>
  );
}

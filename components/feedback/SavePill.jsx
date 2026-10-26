'use client';
import React, { useEffect, useState } from 'react';

/* The autosave state for a HUD, as a cloud that sits on its own so nothing crowds the screen. Pressing it shows the word for a moment.
   Errors stay spelled out. status is 'saved', 'saving', 'pending', 'error' or 'conflict'. */
export function SavePill({ status = 'saved', wordMs = 2500, className, ...rest }) {
  const [word, setWord] = useState(false);
  useEffect(() => {
    if (!word) return undefined;
    const t = setTimeout(() => setWord(false), wordMs);
    return () => clearTimeout(t);
  }, [word, wordMs]);
  if (status === 'conflict' || status === 'error') {
    return (
      <span className={['mp-save-pill mp-save-pill-warn', className].filter(Boolean).join(' ')} aria-hidden="true" {...rest}>
        <i className="ph-fill ph-cloud-slash" /> Not saved
      </span>
    );
  }
  const saved = status === 'saved';
  const label = saved ? 'Saved' : 'Saving';
  return (
    <button type="button" className={['mp-save-pill', saved ? 'mp-save-pill-pop' : 'mp-save-pill-busy', word ? '' : 'mp-save-pill-icon', className].filter(Boolean).join(' ')}
      onClick={() => setWord(true)} aria-label={label} {...rest}>
      <i key={status} className={'ph-fill ' + (saved ? 'ph-cloud-check' : 'ph-cloud-arrow-up')} aria-hidden="true" />
      <span className={word ? 'mp-save-word' : 'mp-sr'} role="status" aria-live="polite">{label}</span>
    </button>
  );
}

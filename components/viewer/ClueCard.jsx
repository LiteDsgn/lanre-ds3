'use client';
import React from 'react';

/* The clue as a taped note over the screen. Pressing it puts it back. */
export function ClueCard({ clue, label = 'Their clue', hint = 'Tap to put it back', leaving = false, onClick, ...rest }) {
  return (
    <button type="button" className={'mp-clue-card' + (leaving ? ' mp-clue-card-leaving' : '')} onClick={onClick} {...rest}>
      <span className="mp-clue-tape" aria-hidden="true" />
      <span className="mp-viewer-label">{label}</span>
      <strong>{clue}</strong>
      <em>{hint}</em>
    </button>
  );
}

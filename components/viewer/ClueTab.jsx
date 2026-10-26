'use client';
import React from 'react';

/* The contributor's clue, parked as a tab on the cabinet. Pressing it calls the clue over the screen. */
export function ClueTab({ open = false, prefix = 'Their ', label = 'clue', onClick, ...rest }) {
  return (
    <button type="button" className={'mp-clue-tab' + (open ? ' mp-clue-tab-on' : '')} aria-expanded={open} onClick={onClick} {...rest}>
      <i className="ph-fill ph-push-pin" aria-hidden="true" />
      <span><span className="mp-clue-tab-their">{prefix}</span>{label}</span>
    </button>
  );
}

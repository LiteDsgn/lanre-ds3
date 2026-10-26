'use client';
import React from 'react';

/* The big round button in the middle of the toolbar. It shows what's next, such as a level number, a padlock or an envelope.
   While the road rearranges itself it's `busy` and can't be pressed. Once the letter is ready it turns `gold`. */
export function ToolbarNext({ caption = 'Next', gold = false, busy = false, disabled = false, onClick, children, ...rest }) {
  if (busy) {
    return (
      <span className="mp-next mp-next-busy" aria-hidden="true" {...rest}>
        <small>{caption}</small>
        <b>{children}</b>
      </span>
    );
  }
  return (
    <button type="button" className={'mp-next' + (gold ? ' mp-next-gold' : '')} onClick={onClick} disabled={disabled} {...rest}>
      <small>{caption}</small>
      <b>{children}</b>
    </button>
  );
}

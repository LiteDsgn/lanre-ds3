'use client';
import React from 'react';
import { Avatar } from '../identity/Avatar';

/* Who sent it: a mystery face until they've guessed, then the friend. Pressing it opens the tray either way. */
export function WhoButton({ found = false, berry = false, name, seed, portrait, text = 'Ready to guess', onClick, ...rest }) {
  return (
    <button type="button" className={'mp-who' + (found ? ' mp-who-found' : berry ? ' mp-who-berry' : '')} onClick={onClick} {...rest}>
      {found ? <Avatar name={name} seed={seed} src={portrait || undefined} size={40} alt="" /> : <Avatar mystery size={40} />}
      <span className="mp-who-text">
        {found ? <><small>From</small>{name}</> : text}
      </span>
    </button>
  );
}

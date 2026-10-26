'use client';
import React from 'react';
import { Avatar } from './Avatar';

/* The person's own avatar as a button, with a small pencil to say it can be changed. Fixed at 48px so it sits in a HUD row. */
export function AvatarButton({ name, seed, src, label = 'Edit your name and photo', onClick, className, ...rest }) {
  return (
    <button type="button" className={['mp-avatar-button', className].filter(Boolean).join(' ')} onClick={onClick} aria-label={label} {...rest}>
      <Avatar name={name} alt="" seed={seed} src={src} size={48} />
      <span className="mp-avatar-badge" aria-hidden="true"><i className="ph-fill ph-pencil-simple" /></span>
    </button>
  );
}

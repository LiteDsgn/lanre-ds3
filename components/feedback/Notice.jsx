'use client';
import React from 'react';
import { Sticker } from './Sticker';

const STICKER_TONE = { info: 'blue', warn: 'coral', gold: 'gold' };

/* A card with a sticker and a message. Warnings are announced to screen readers when they appear. */
export function Notice({ tone = 'info', icon = 'info', children, className, ...rest }) {
  const cls = ['mp-notice', tone === 'warn' ? 'mp-notice-warn' : tone === 'gold' ? 'mp-notice-gold' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} role={tone === 'warn' ? 'alert' : undefined} {...rest}>
      <Sticker icon={icon} tone={STICKER_TONE[tone] || 'blue'} />
      <div>{children}</div>
    </div>
  );
}

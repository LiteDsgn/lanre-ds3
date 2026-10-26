'use client';
import React, { useEffect, useState } from 'react';
import { CurrencyPill } from './CurrencyPill';

/* True for a moment each time `count` goes up, so a chip bumps as something is found. */
export function useBump(count) {
  const [seen, setSeen] = useState(count);
  const [bump, setBump] = useState(false);
  if (count !== seen) {
    setSeen(count);
    if (count > seen) setBump(true);
  }
  useEffect(() => {
    if (!bump) return;
    const t = window.setTimeout(() => setBump(false), 560);
    return () => window.clearTimeout(t);
  }, [bump]);
  return bump;
}

/* A count on the HUD, such as friends found or surprises found. A tap does something about it. Give it an aria-label
   that says the count in words and what pressing it does. */
export function HudChip({ icon = 'users-three', tone = 'teal', value, bump = false, fresh = false, disabled = false, onClick, ...rest }) {
  return (
    <button type="button" className={'mp-hud-chip' + (bump ? ' mp-hud-bump' : '')} onClick={onClick} disabled={disabled} {...rest}>
      <CurrencyPill size="md" value={value} icon={<i className={'ph-fill ph-' + icon + ' ' + (tone === 'berry' ? 'mp-hud-sparkle' : 'mp-hud-friends')} />} minWidth={86} />
      {fresh && <span className="mp-hud-new" aria-hidden="true" />}
    </button>
  );
}

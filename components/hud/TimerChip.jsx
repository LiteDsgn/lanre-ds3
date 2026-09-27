import React from 'react';

export function TimerChip({ time, icon = 'clock', tone = 'dark', size = 'md', urgent = false, style, ...rest }) {
  const h = size === 'sm' ? 24 : 32; const fs = size === 'sm' ? 12 : 15;
  const dark = tone === 'dark';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: h, padding: '0 12px 0 8px', borderRadius: 'var(--radius-pill)', boxSizing: 'border-box',
      background: dark ? 'var(--surface-hud)' : 'var(--cream-50)', border: '2px solid ' + (dark ? 'oklch(0.20 0.05 55 / 0.9)' : 'var(--cream-300)'),
      color: urgent ? 'var(--coral-300)' : (dark ? '#fff' : 'var(--ink-900)'), fontFamily: 'var(--font-display)', fontSize: fs, letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums',
      textShadow: dark ? '0 2px 0 oklch(0 0 0 / 0.35)' : 'none', animation: urgent ? 'mp-float var(--dur-idle) ease-in-out infinite' : 'none', ...style }} {...rest}>
      <i className={'ph-fill ph-' + icon} style={{ fontSize: fs + 4, lineHeight: 1, color: urgent ? 'var(--coral-300)' : (dark ? '#fff' : 'var(--ink-700)') }} />
      <span>{time}</span>
    </span>
  );
}

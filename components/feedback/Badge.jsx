import React from 'react';

const TONES = { danger: ['var(--coral-300)', 'var(--coral-500)', 'var(--coral-700)'], gold: ['var(--gold-300)', 'var(--gold-500)', 'var(--gold-700)'],
  blue: ['var(--blue-300)', 'var(--blue-500)', 'var(--blue-700)'], teal: ['var(--teal-300)', 'var(--teal-500)', 'var(--teal-700)'], green: ['var(--green-300)', 'var(--green-500)', 'var(--green-700)'] };

export function Badge({ count = '!', tone = 'danger', size = 'md', pulse = false, style, ...rest }) {
  const [top, mid, shade] = TONES[tone] || TONES.danger;
  const d = size === 'sm' ? 18 : 24; const fs = size === 'sm' ? 11 : 13;
  return (
    <span style={{ display: 'inline-grid', placeItems: 'center', minWidth: d, height: d, padding: '0 ' + (d * 0.25) + 'px', boxSizing: 'border-box', borderRadius: 'var(--radius-pill)',
      background: 'linear-gradient(180deg, ' + top + ', ' + mid + ' 55%)', border: '2px solid #fff', boxShadow: '0 2px 0 ' + shade + ', 0 3px 6px oklch(0 0 0 / 0.25)',
      color: tone === 'gold' ? 'var(--gold-900)' : '#fff', fontFamily: 'var(--font-display)', fontSize: fs, lineHeight: 1, letterSpacing: '0.02em',
      animation: pulse ? 'mp-float 1.6s ease-in-out infinite' : 'none', ...style }} {...rest}>{count}</span>
  );
}

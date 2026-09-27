import React from 'react';

const TONES = { danger: ['var(--coral-500)', 'var(--coral-700)', '#fff'], gold: ['var(--gold-500)', 'var(--gold-700)', 'var(--gold-900)'], teal: ['var(--teal-500)', 'var(--teal-700)', '#fff'],
  blue: ['var(--blue-500)', 'var(--blue-700)', '#fff'], berry: ['var(--berry-500)', 'var(--berry-700)', '#fff'], green: ['var(--green-500)', 'var(--green-700)', '#fff'], stone: ['var(--stone-500)', 'var(--stone-700)', '#fff'], wood: ['var(--wood-500)', 'var(--wood-700)', '#fff'] };

export function Tag({ tone = 'danger', size = 'md', icon, children, style, ...rest }) {
  const [bg, shade, text] = TONES[tone] || TONES.danger;
  const h = size === 'sm' ? 18 : 24; const fs = size === 'sm' ? 10 : 12;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: h, padding: '0 ' + (h * 0.4) + 'px', borderRadius: 'var(--radius-xs)', boxSizing: 'border-box',
      background: bg, boxShadow: '0 2px 0 ' + shade + ', inset 0 1px 0 oklch(1 0 0 / 0.45)', color: text, fontFamily: 'var(--font-display)', fontSize: fs, lineHeight: 1, letterSpacing: '0.06em', textTransform: 'uppercase',
      whiteSpace: 'nowrap', ...style }} {...rest}>{icon}{children}</span>
  );
}

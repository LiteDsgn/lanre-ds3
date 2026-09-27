import React, { useState } from 'react';

const VARIANTS = {
  // [top, face, side, text stroke]
  grass:  ['var(--green-300)', 'var(--green-500)', 'var(--green-700)', 'var(--green-900)'],
  sand:   ['var(--cream-50)',  'var(--cream-200)', 'var(--wood-300)',  'var(--wood-700)'],
  stone:  ['var(--stone-100)', 'var(--stone-300)', 'var(--stone-500)', 'var(--stone-700)'],
  water:  ['var(--blue-100)',  'var(--blue-300)',  'var(--blue-500)',  'var(--blue-700)'],
  reward: ['var(--gold-300)',  'var(--gold-500)',  'var(--gold-700)',  'var(--gold-900)'],
  hazard: ['var(--berry-300)', 'var(--berry-500)', 'var(--berry-700)', 'var(--berry-900)'],
  start:  ['var(--teal-300)',  'var(--teal-500)',  'var(--teal-700)',  'var(--teal-900)'],
};

export function Tile({ variant = 'grass', size = 64, content, active = false, onClick, label, style, ...rest }) {
  const [down, setDown] = useState(false);
  const [top, mid, side, stroke] = VARIANTS[variant] || VARIANTS.grass;
  const depth = Math.round(size * 0.16);
  const lift = down && onClick ? Math.round(depth * 0.4) : depth;
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag type={onClick ? 'button' : undefined} onClick={onClick} aria-label={label} onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', border: 0, margin: 0, padding: 0, background: 'none', cursor: onClick ? 'pointer' : 'default', position: 'relative', display: 'inline-block', width: size, height: Math.round(size * 0.82) + depth, flex: 'none', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: depth - lift, height: Math.round(size * 0.82), borderRadius: Math.round(size * 0.28), boxSizing: 'border-box',
        background: 'linear-gradient(180deg, ' + top + ', ' + mid + ' 70%)', border: '3px solid ' + top,
        boxShadow: '0 ' + lift + 'px 0 ' + side + ', 0 ' + (lift + 4) + 'px 10px oklch(0.2 0.05 60 / 0.3)' + (active ? ', 0 0 0 4px oklch(0.92 0.14 90 / 0.9), 0 0 24px oklch(0.86 0.17 85 / 0.8)' : ''),
        transition: 'top var(--dur-fast), box-shadow var(--dur-fast)', display: 'grid', placeItems: 'center' }}>
        <span style={{ display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', color: '#fff', fontSize: Math.round(size * 0.36), lineHeight: 1, WebkitTextStroke: Math.round(size * 0.05) + 'px ' + stroke, paintOrder: 'stroke fill' }}>{content}</span>
      </span>
    </Tag>
  );
}

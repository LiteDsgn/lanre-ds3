import React, { useState } from 'react';

export function ItemCell({ state = 'empty', content, count, selected = false, dim = false, size = 72, onClick, label, style, ...rest }) {
  const [down, setDown] = useState(false);
  const clickable = !!onClick && state !== 'locked';
  const Tag = clickable ? 'button' : 'div';
  return (
    <Tag type={clickable ? 'button' : undefined} onClick={clickable ? onClick : undefined} aria-label={label} onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', margin: 0, padding: 0, position: 'relative', display: 'grid', placeItems: 'center', width: size, height: size, flex: 'none', boxSizing: 'border-box', cursor: clickable ? 'pointer' : 'default',
        borderRadius: 'var(--radius-md)', background: selected ? 'var(--surface-cell-active)' : 'var(--surface-cell)',
        border: '3px solid ' + (selected ? 'var(--teal-300)' : 'oklch(1 0 0 / 0.08)'),
        boxShadow: selected ? '0 0 0 3px oklch(0.88 0.09 184 / 0.5), 0 0 18px oklch(0.76 0.13 180 / 0.8), inset 0 2px 6px oklch(0 0 0 / 0.25)' : 'inset 0 2px 6px oklch(0 0 0 / 0.25)',
        transform: down && clickable ? 'scale(0.96)' : 'scale(1)', transition: 'transform var(--dur-fast), box-shadow var(--dur-base)', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      {state === 'filled' && <span style={{ display: 'grid', placeItems: 'center', opacity: dim ? 0.45 : 1, filter: dim ? 'grayscale(0.6)' : 'none' }}>{content}</span>}
      {state === 'locked' && <i aria-hidden="true" className="ph-fill ph-lock" style={{ fontSize: size * 0.4, color: 'oklch(1 0 0 / 0.35)', lineHeight: 1 }} />}
      {state === 'add' && <i aria-hidden="true" className="ph-bold ph-plus" style={{ fontSize: size * 0.5, color: 'var(--gold-500)', WebkitTextStroke: (size * 0.05) + 'px var(--gold-900)', paintOrder: 'stroke fill', lineHeight: 1, filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.25))' }} />}
      {count != null && state === 'filled' && (
        <span style={{ position: 'absolute', right: 6, bottom: 4, fontFamily: 'var(--font-display)', fontSize: Math.round(size * 0.2), lineHeight: 1, color: '#fff',
          WebkitTextStroke: (size * 0.035) + 'px var(--ink-900)', paintOrder: 'stroke fill', opacity: dim ? 0.6 : 1 }}>{count}</span>
      )}
    </Tag>
  );
}

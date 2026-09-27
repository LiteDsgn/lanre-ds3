import React from 'react';

export function StarRating({ value = 0, max = 3, size = 28, arc = false, animate = false, gap, style, ...rest }) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const on = i < value;
    const mid = arc && max % 2 === 1 && i === Math.floor(max / 2);
    const side = arc && !mid ? (i < max / 2 ? -1 : 1) : 0;
    const s = mid ? size * 1.35 : size;
    stars.push(
      <span key={i} aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: s, height: s, lineHeight: 1,
        transform: arc ? 'translateY(' + (mid ? -size * 0.35 : 0) + 'px) rotate(' + (side * 14) + 'deg)' : 'none',
        filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.22))', animation: animate && on ? 'mp-pop var(--dur-slow) var(--ease-bounce) both ' + (i * 140) + 'ms' : 'none' }}>
        <i className="ph-fill ph-star" style={{ fontSize: s, lineHeight: 1, color: on ? 'var(--gold-500)' : 'var(--stone-300)',
          WebkitTextStroke: (s * 0.1) + 'px ' + (on ? 'var(--gold-700)' : 'var(--stone-700)'), paintOrder: 'stroke fill' }} />
      </span>
    );
  }
  return <span role="img" aria-label={value + ' of ' + max + ' stars'} style={{ display: 'inline-flex', alignItems: 'flex-end', gap: gap == null ? Math.round(size * 0.05) : gap, ...style }} {...rest}>{stars}</span>;
}

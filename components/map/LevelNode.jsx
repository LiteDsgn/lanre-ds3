import React, { useState } from 'react';

export function LevelNode({ number, state = 'locked', stars = 0, size = 84, onClick, style, ...rest }) {
  const [down, setDown] = useState(false);
  const locked = state === 'locked';
  const h = Math.round(size * 0.62), depth = Math.round(size * 0.13);
  const top = locked ? 'radial-gradient(ellipse at 50% 30%, var(--stone-100), var(--stone-300) 80%)' : 'radial-gradient(ellipse at 50% 30%, var(--blue-300), var(--blue-500) 80%)';
  const side = locked ? 'var(--stone-500)' : 'var(--blue-700)';
  const rim = locked ? 'var(--stone-300)' : 'var(--blue-300)';
  const stroke = locked ? 'var(--stone-700)' : 'var(--blue-700)';
  const lift = down && !locked ? Math.round(depth * 0.4) : depth;
  const starEls = [];
  if (state === 'complete') for (let i = 0; i < 3; i++) {
    const on = i < stars, s = Math.round(size * 0.3), mid = i === 1;
    starEls.push(<i key={i} className="ph-fill ph-star" aria-hidden="true" style={{ fontSize: s, lineHeight: 1, color: on ? 'var(--gold-500)' : 'var(--stone-300)', WebkitTextStroke: (s * 0.1) + 'px ' + (on ? 'var(--gold-700)' : 'var(--stone-700)'), paintOrder: 'stroke fill',
      transform: 'translateY(' + (mid ? -s * 0.3 : 0) + 'px) rotate(' + ((i - 1) * 16) + 'deg)', filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.22))' }} />);
  }
  return (
    <button type="button" onClick={locked ? undefined : onClick} aria-label={'Level ' + number + (locked ? ', locked' : state === 'complete' ? ', ' + stars + ' stars' : ', current')} aria-disabled={locked}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', background: 'none', border: 0, padding: 0, margin: 0, cursor: locked ? 'default' : 'pointer', position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', width: size + 8, WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      <span aria-hidden="true" style={{ display: 'flex', alignItems: 'flex-end', height: Math.round(size * 0.36), marginBottom: -Math.round(size * 0.02), gap: 0, zIndex: 2 }}>{starEls}</span>
      <span style={{ position: 'relative', width: size, height: h, marginTop: 0 }}>
        {state === 'current' && <span aria-hidden="true" style={{ position: 'absolute', inset: -2, borderRadius: '50%', animation: 'mp-pulse-ring 1.6s ease-out infinite' }} />}
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: top, border: '3px solid ' + rim,
          boxShadow: '0 ' + lift + 'px 0 ' + side + ', 0 ' + (lift + 6) + 'px 12px oklch(0.2 0.05 60 / 0.35), inset 0 3px 0 oklch(1 0 0 / 0.55)',
          transform: 'translateY(' + (depth - lift) + 'px)', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)', boxSizing: 'border-box' }}>
          <span style={{ position: 'absolute', left: '18%', top: '12%', width: '28%', height: '18%', borderRadius: '50%', background: 'oklch(1 0 0 / 0.45)' }} />
          <span style={{ position: 'absolute', right: '20%', bottom: '22%', width: '10%', height: '8%', borderRadius: '50%', background: 'oklch(1 0 0 / 0.35)' }} />
        </span>
        <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', transform: 'translateY(' + (depth - lift - depth * 0.35) + 'px)', transition: 'transform var(--dur-fast)',
          fontFamily: 'var(--font-display)', fontSize: Math.round(size * 0.46), lineHeight: 1, color: '#fff', WebkitTextStroke: Math.round(size * 0.07) + 'px ' + stroke, paintOrder: 'stroke fill', textShadow: '0 3px 0 oklch(0 0 0 / 0.2)' }}>{number}</span>
      </span>
    </button>
  );
}

import React, { useState } from 'react';

export function RewardCard({ title, icon, amount, state = 'available', featured = false, onClick, width, style, ...rest }) {
  const [down, setDown] = useState(false);
  const claimed = state === 'claimed', locked = state === 'locked', avail = state === 'available';
  const clickable = avail && onClick;
  const border = featured ? 'var(--blue-500)' : 'var(--wood-500)';
  const strip = featured ? 'var(--blue-700)' : 'var(--wood-700)';
  const body = featured ? 'linear-gradient(180deg, var(--blue-100), var(--blue-300))' : 'linear-gradient(180deg, var(--cream-50), var(--wood-100))';
  return (
    <div role={clickable ? 'button' : undefined} tabIndex={clickable ? 0 : undefined} onClick={clickable ? onClick : undefined}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ position: 'relative', display: 'flex', flexDirection: featured ? 'row' : 'column', alignItems: 'center', width: width || (featured ? '100%' : 96), boxSizing: 'border-box',
        borderRadius: 'var(--radius-md)', border: '3px solid ' + border, background: body, overflow: 'hidden', cursor: clickable ? 'pointer' : 'default',
        boxShadow: '0 ' + (down && clickable ? 1 : 4) + 'px 0 ' + strip + ', 0 6px 10px oklch(0.2 0.05 60 / 0.2)' + (avail ? ', 0 0 0 3px oklch(0.92 0.14 90 / 0.9), 0 0 18px oklch(0.86 0.17 85 / 0.7)' : ''),
        transform: 'translateY(' + (down && clickable ? 3 : 0) + 'px)', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)',
        filter: locked ? 'saturate(0.35) brightness(0.92)' : 'none', ...style }} {...rest}>
      <div style={{ alignSelf: 'stretch', flex: featured ? '0 0 auto' : undefined, display: 'grid', placeItems: 'center', padding: featured ? '0 14px' : '5px 6px', minWidth: featured ? 72 : undefined,
        background: strip, color: '#fff', fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', textShadow: '0 1px 0 oklch(0 0 0 / 0.3)', whiteSpace: 'nowrap' }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: featured ? 'row' : 'column', alignItems: 'center', justifyContent: 'center', gap: featured ? 12 : 4, padding: featured ? '10px 14px' : '10px 8px 10px', flex: 1 }}>
        <span style={{ display: 'grid', placeItems: 'center', animation: avail ? 'mp-float var(--dur-idle) ease-in-out infinite' : 'none' }}>{icon}</span>
        {amount != null && <span style={{ fontFamily: 'var(--font-display)', fontSize: featured ? 22 : 16, lineHeight: 1, color: featured ? '#fff' : 'var(--ink-900)',
          WebkitTextStroke: featured ? '3px var(--blue-700)' : '0', paintOrder: 'stroke fill', letterSpacing: '0.02em' }}>{amount}</span>}
      </div>
      {claimed && (
        <div aria-label="Claimed" style={{ position: 'absolute', inset: 0, background: 'oklch(0.58 0.16 140 / 0.45)', display: 'grid', placeItems: 'center' }}>
          <i className="ph-bold ph-check" style={{ fontSize: 40, color: '#fff', WebkitTextStroke: '3px var(--green-700)', paintOrder: 'stroke fill', filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.25))' }} />
        </div>
      )}
      {locked && <i aria-hidden="true" className="ph-fill ph-lock" style={{ position: 'absolute', top: 30, right: 6, fontSize: 18, color: 'var(--stone-300)', WebkitTextStroke: '2px var(--stone-700)', paintOrder: 'stroke fill' }} />}
    </div>
  );
}

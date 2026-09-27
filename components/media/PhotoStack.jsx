import React, { useState } from 'react';

export function PhotoStack({ photos = [], index, onChange, height = 280, width = '100%', fit = 'contain', style, ...rest }) {
  const [inner, setInner] = useState(0);
  const i = index == null ? inner : index, n = Math.max(1, photos.length);
  const go = next => { next = (next + n) % n; if (onChange) onChange(next); if (index == null) setInner(next); };
  const p = photos[i] || {};
  const Nav = ({ dir, label }) => (
    <button type="button" aria-label={label} onClick={() => go(i + dir)} style={{ position: 'absolute', top: '50%', left: dir < 0 ? 10 : 'auto', right: dir > 0 ? 10 : 'auto', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', border: '3px solid #fff', padding: 0, cursor: 'pointer',
      background: 'linear-gradient(180deg, #fff, var(--cream-100))', boxShadow: '0 4px 0 var(--cream-300), 0 6px 12px oklch(0 0 0 / 0.25)', color: 'var(--ink-900)', fontSize: 22, display: 'grid', placeItems: 'center' }}>
      <i className={'ph-bold ph-caret-' + (dir < 0 ? 'left' : 'right')} aria-hidden="true" />
    </button>
  );
  return (
    <div style={{ width, display: 'grid', gap: 10, ...style }} {...rest}>
      <div style={{ position: 'relative', height, borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '4px solid var(--cream-300)', background: 'var(--cream-200)', boxShadow: '0 6px 0 var(--cream-300), 0 12px 24px oklch(0.22 0.05 60 / 0.2)' }}>
        {p.src ? <img src={p.src} alt={p.alt || ''} style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }} />
          : <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'repeating-linear-gradient(-45deg, oklch(0 0 0 / 0.05) 0 12px, transparent 12px 24px)', font: '600 12px/1.3 ui-monospace, Menlo, monospace', color: 'var(--ink-500)', textAlign: 'center' }}>{'photo ' + (i + 1)}<br />(contributor upload)</div>}
        {p.caption && <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, padding: '8px 14px', borderRadius: 'var(--radius-md)', background: 'var(--surface-hud)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 14, textAlign: 'center' }}>{p.caption}</div>}
        {n > 1 && <Nav dir={-1} label="Previous photo" />}
        {n > 1 && <Nav dir={1} label="Next photo" />}
      </div>
      {n > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {photos.map((_, k) => <button key={k} type="button" aria-label={'Photo ' + (k + 1)} aria-current={k === i ? 'true' : undefined} onClick={() => go(k)}
            style={{ width: k === i ? 16 : 12, height: k === i ? 16 : 12, borderRadius: '50%', border: '2px solid #fff', padding: 0, cursor: 'pointer', background: k === i ? 'var(--blue-500)' : 'var(--stone-300)', boxShadow: '0 2px 0 ' + (k === i ? 'var(--blue-700)' : 'var(--stone-500)') }} />)}
          <span style={{ marginLeft: 8, fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--ink-700)', letterSpacing: '0.04em' }}>{(i + 1) + ' / ' + n}</span>
        </div>
      )}
    </div>
  );
}

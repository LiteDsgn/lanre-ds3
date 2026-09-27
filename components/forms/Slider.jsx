import React from 'react';

export function Slider({ value = 50, min = 0, max = 100, step = 1, onChange, tone = 'blue', icon, width = 220, disabled = false, label, style, ...rest }) {
  const pct = ((value - min) / ((max - min) || 1)) * 100;
  const c = ['var(--' + tone + '-300)', 'var(--' + tone + '-500)', 'var(--' + tone + '-700)'];
  const h = 18, kw = 28, kh = 36;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, width, opacity: disabled ? 0.6 : 1, ...style }} {...rest}>
      {icon}
      <div style={{ position: 'relative', flex: 1, height: kh, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: h, borderRadius: 'var(--radius-pill)', background: 'linear-gradient(180deg, var(--stone-700), var(--stone-500))',
          boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.4), 0 2px 0 oklch(1 0 0 / 0.5)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 'calc(' + pct + '% + ' + (kw / 2) + 'px)', borderRadius: 'inherit',
            background: 'linear-gradient(180deg, ' + c[0] + ', ' + c[1] + ' 60%, ' + c[2] + ')', boxShadow: 'inset 0 2px 0 oklch(1 0 0 / 0.5)' }} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: 'calc(' + pct + '% - ' + (pct / 100) * kw + 'px)', width: kw, height: kh, borderRadius: 'var(--radius-sm)',
          background: 'linear-gradient(180deg, ' + c[0] + ', ' + c[1] + ' 50%)', boxShadow: '0 3px 0 ' + c[2] + ', 0 5px 8px oklch(0 0 0 / 0.3), inset 0 2px 0 oklch(1 0 0 / 0.5)',
          display: 'grid', placeItems: 'center', gridAutoFlow: 'column', gap: 3, pointerEvents: 'none' }}>
          <span style={{ width: 3, height: 14, borderRadius: 2, background: c[2], boxShadow: '0 1px 0 oklch(1 0 0 / 0.4)' }} />
          <span style={{ width: 3, height: 14, borderRadius: 2, background: c[2], boxShadow: '0 1px 0 oklch(1 0 0 / 0.4)' }} />
        </div>
        <input type="range" aria-label={label} min={min} max={max} step={step} value={value} disabled={disabled} onChange={e => onChange && onChange(Number(e.target.value))}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: disabled ? 'default' : 'pointer' }} />
      </div>
    </div>
  );
}

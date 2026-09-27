import React from 'react';

export function RadioCard({ checked = false, onChange, title, description, icon, tone = 'teal', style, ...rest }) {
  const c = ['var(--' + tone + '-100)', 'var(--' + tone + '-500)', 'var(--' + tone + '-700)'];
  return (
    <button type="button" role="radio" aria-checked={checked} onClick={() => onChange && onChange(true)}
      style={{ appearance: 'none', margin: 0, width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', boxSizing: 'border-box', textAlign: 'left', cursor: 'pointer', borderRadius: 'var(--radius-lg)',
        border: '3px solid ' + (checked ? c[1] : 'var(--cream-300)'), background: checked ? 'linear-gradient(180deg, ' + c[0] + ', #fff)' : 'linear-gradient(180deg, #fff, var(--cream-100))', boxShadow: '0 4px 0 ' + (checked ? c[2] : 'var(--cream-300)'),
        fontFamily: 'var(--font-ui)', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      {icon && <span style={{ flex: 'none', display: 'grid', placeItems: 'center', width: 44 }}>{icon}</span>}
      <span style={{ flex: 1, minWidth: 0, display: 'grid', gap: 2 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{title}</span>
        {description && <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink-700)', lineHeight: 1.4 }}>{description}</span>}
      </span>
      <span aria-hidden="true" style={{ width: 28, height: 28, borderRadius: '50%', flex: 'none', border: '3px solid ' + (checked ? c[1] : 'var(--stone-500)'), background: checked ? c[1] : '#fff', boxShadow: 'inset 0 2px 3px oklch(0 0 0 / 0.1)', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 14 }}>{checked && <i className="ph-bold ph-check" />}</span>
    </button>
  );
}

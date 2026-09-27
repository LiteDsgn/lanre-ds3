import React from 'react';

export function Switch({ checked = false, onChange, disabled = false, tone = 'teal', size = 'md', label, style, ...rest }) {
  const w = size === 'sm' ? 44 : 56; const h = size === 'sm' ? 26 : 32; const k = h - 8;
  const on = ['var(--' + tone + '-300)', 'var(--' + tone + '-500)', 'var(--' + tone + '-700)'];
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled} onClick={() => !disabled && onChange && onChange(!checked)}
      style={{ appearance: 'none', border: 0, padding: 0, margin: 0, cursor: disabled ? 'default' : 'pointer', position: 'relative', width: w, height: h, flex: 'none', borderRadius: 'var(--radius-pill)',
        background: checked ? 'linear-gradient(180deg, ' + on[2] + ', ' + on[1] + ')' : 'linear-gradient(180deg, var(--stone-700), var(--stone-500))',
        boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.35), 0 2px 0 oklch(1 0 0 / 0.5)', opacity: disabled ? 0.6 : 1,
        transition: 'background var(--dur-base)', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      <span aria-hidden="true" style={{ position: 'absolute', top: 2, left: checked ? w - k - 4 : 2, width: k, height: k, borderRadius: '50%',
        background: 'linear-gradient(180deg, #fff, var(--cream-100))', boxShadow: '0 2px 0 var(--cream-300), 0 3px 5px oklch(0 0 0 / 0.25)',
        transition: 'left var(--dur-base) var(--ease-bounce)' }}>
        <span style={{ position: 'absolute', inset: '30%', borderRadius: '50%', background: checked ? on[1] : 'var(--stone-300)', transition: 'background var(--dur-base)' }} />
      </span>
    </button>
  );
}

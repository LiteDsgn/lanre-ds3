'use client';
import React, { useState } from 'react';

const DROP = '0 14px 24px oklch(0.22 0.05 60 / 0.3)';
const GLOW = '0 0 0 4px oklch(0.76 0.13 180 / 0.5), 0 0 28px oklch(0.76 0.13 180 / 0.6)';

export function RadioCard({ checked = false, onChange, title, description, media, style, ...rest }) {
  const [down, setDown] = useState(false);
  return (
    <button type="button" role="radio" aria-checked={checked} onClick={() => onChange && onChange(true)}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerCancel={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '22px 12px 16px', boxSizing: 'border-box',
        borderRadius: 'var(--radius-lg)', border: '4px solid ' + (checked ? 'var(--teal-500)' : 'var(--cream-300)'),
        background: checked ? 'linear-gradient(180deg, var(--teal-100), #fff)' : 'linear-gradient(180deg, #fff, var(--cream-100))',
        boxShadow: checked ? '0 5px 0 var(--teal-700), ' + DROP + ', ' + GLOW : '0 5px 0 var(--cream-300), ' + DROP,
        font: 'inherit', textAlign: 'center', cursor: 'pointer', WebkitTapHighlightColor: 'transparent',
        transition: 'transform var(--dur-fast) var(--ease-out)', transform: down ? 'translateY(3px)' : undefined, ...style }} {...rest}>
      <span aria-hidden="true" style={{ position: 'absolute', right: 10, top: 10, width: 28, height: 28, boxSizing: 'border-box', borderRadius: '50%',
        border: '3px solid ' + (checked ? 'var(--teal-500)' : 'var(--stone-500)'), background: checked ? 'var(--teal-500)' : '#fff', boxShadow: 'inset 0 2px 3px oklch(0 0 0 / 0.1)',
        display: 'grid', placeItems: 'center', color: '#fff', fontSize: 14, animation: checked ? 'mp-radio-pop var(--dur-base) var(--ease-bounce) both' : undefined }}>
        {checked && <i className="ph-bold ph-check" />}
      </span>
      {media}
      <strong style={{ fontSize: 16, lineHeight: 1.2, color: 'var(--ink-900)' }}>{title}</strong>
      {description && <span style={{ fontSize: 13, lineHeight: 1.4, fontWeight: 600, color: 'var(--ink-700)' }}>{description}</span>}
    </button>
  );
}

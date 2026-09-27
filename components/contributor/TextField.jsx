import React, { useState } from 'react';

let uid = 0;
export function TextField({ label, value = '', onChange, placeholder, helper, error, multiline = false, rows = 4, maxLength, optional = false, id, style, inputStyle, ...rest }) {
  const [auto] = useState(() => 'mp-field-' + (++uid));
  const fid = id || auto;
  const [focus, setFocus] = useState(false);
  const border = error ? 'var(--coral-500)' : focus ? 'var(--blue-300)' : 'var(--cream-300)';
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div style={{ display: 'grid', gap: 6, fontFamily: 'var(--font-ui)', ...style }} {...rest}>
      {label && (
        <label htmlFor={fid} style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink-700)', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <span>{label}{optional && <span style={{ fontWeight: 600, color: 'var(--ink-500)' }}> · optional</span>}</span>
          {maxLength != null && <span style={{ fontWeight: 600, fontSize: 12, color: String(value).length > maxLength ? 'var(--coral-700)' : 'var(--ink-500)', fontVariantNumeric: 'tabular-nums' }}>{String(value).length + '/' + maxLength}</span>}
        </label>
      )}
      <Tag id={fid} value={value} onChange={e => onChange && onChange(e.target.value)} placeholder={placeholder} rows={multiline ? rows : undefined} maxLength={maxLength} aria-invalid={!!error || undefined} aria-describedby={helper || error ? fid + '-help' : undefined}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', boxSizing: 'border-box', minHeight: 52, padding: multiline ? '14px 16px' : '0 16px', borderRadius: 'var(--radius-md)', border: '3px solid ' + border, background: 'var(--cream-50)', boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.06)',
          fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 16, lineHeight: 1.4, color: 'var(--ink-900)', outline: 'none', resize: multiline ? 'vertical' : 'none', transition: 'border-color var(--dur-fast)', ...inputStyle }} />
      {(error || helper) && (
        <div id={fid + '-help'} style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: 13, color: error ? 'var(--coral-700)' : 'var(--ink-500)' }}>
          {error && <i className="ph-fill ph-warning" aria-hidden="true" />}{error || helper}
        </div>
      )}
    </div>
  );
}

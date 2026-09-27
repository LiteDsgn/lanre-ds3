import React, { useState } from 'react';

const KINDS = { coin: ['coin', 'var(--gold-500)', 'var(--gold-900)'], gem: ['sketch-logo', 'var(--blue-500)', 'var(--blue-900)'], ruby: ['sketch-logo', 'var(--coral-500)', 'var(--coral-900)'],
  heart: ['heart', 'var(--coral-500)', 'var(--coral-900)'], energy: ['lightning', 'var(--teal-500)', 'var(--teal-900)'], star: ['star', 'var(--gold-500)', 'var(--gold-900)'], key: ['key', 'var(--gold-500)', 'var(--gold-900)'] };
const SIZES = { sm: [28, 14, 34, 22], md: [36, 18, 44, 28] }; // [pill height, font, icon, plus size]

export function CurrencyPill({ kind = 'coin', value, icon, onAdd, size = 'md', tone = 'dark', minWidth, style, ...rest }) {
  const [down, setDown] = useState(false);
  const [glyph, fill, stroke] = KINDS[kind] || KINDS.coin;
  const [h, fs, ic, plus] = SIZES[size] || SIZES.md;
  const dark = tone === 'dark';
  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', height: h, minWidth: minWidth || h * 3,
      padding: '0 ' + (onAdd ? plus * 0.7 + 6 : 12) + 'px 0 ' + (ic * 0.72) + 'px', boxSizing: 'border-box', borderRadius: 'var(--radius-pill)',
      background: dark ? 'var(--surface-hud)' : 'var(--cream-50)', border: dark ? '2px solid oklch(0.20 0.05 55 / 0.9)' : '2px solid var(--cream-300)',
      boxShadow: dark ? 'inset 0 2px 4px oklch(0 0 0 / 0.35), 0 2px 0 oklch(1 0 0 / 0.15)' : 'inset 0 2px 3px oklch(0 0 0 / 0.08), 0 2px 0 var(--cream-300)',
      fontFamily: 'var(--font-display)', fontSize: fs, color: dark ? '#fff' : 'var(--ink-900)', letterSpacing: '0.02em',
      textShadow: dark ? '0 2px 0 oklch(0 0 0 / 0.35)' : 'none', ...style }} {...rest}>
      <span aria-hidden="true" style={{ position: 'absolute', left: -ic * 0.28, top: '50%', transform: 'translateY(-50%)', width: ic, height: ic, display: 'grid', placeItems: 'center', filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.25))' }}>
        {icon || <i className={'ph-fill ph-' + glyph} style={{ fontSize: ic, lineHeight: 1, color: fill, WebkitTextStroke: (ic * 0.11) + 'px ' + stroke, paintOrder: 'stroke fill' }} />}
      </span>
      <span style={{ flex: 1, textAlign: 'center', paddingLeft: 2, whiteSpace: 'nowrap' }}>{value}</span>
      {onAdd && (
        <button type="button" aria-label="Add" onClick={onAdd} onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
          style={{ position: 'absolute', right: -plus * 0.3, top: '50%', transform: 'translateY(-50%) translateY(' + (down ? 2 : 0) + 'px)', width: plus, height: plus, border: '2px solid #fff', borderRadius: 'var(--radius-sm)', padding: 0, cursor: 'pointer',
            background: 'linear-gradient(180deg, var(--teal-300), var(--teal-500) 50%)', boxShadow: '0 ' + (down ? 1 : 3) + 'px 0 var(--teal-700)', color: '#fff', fontSize: plus * 0.6, lineHeight: 1, display: 'grid', placeItems: 'center',
            transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)' }}>
          <i className="ph-bold ph-plus" />
        </button>
      )}
    </div>
  );
}

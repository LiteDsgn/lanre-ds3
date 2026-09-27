import React from 'react';

function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
const HUES = [25, 55, 95, 140, 175, 215, 260, 300, 335];
const PATTERNS = ['dots', 'stripes', 'rings', 'plain'];
export function initials(name = '') { return String(name).trim().split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join(''); }

export function Avatar({ name = '', seed, src, size = 64, mystery = false, ring = true, alt, style, ...rest }) {
  const b = Math.max(2, Math.round(size * 0.05));
  const base = { position: 'relative', width: size, height: size, borderRadius: '50%', flex: 'none', overflow: 'hidden', boxSizing: 'border-box', border: ring ? b + 'px solid #fff' : 0,
    boxShadow: '0 ' + b + 'px 0 oklch(0 0 0 / 0.18), 0 4px 10px oklch(0.2 0.05 60 / 0.25)', display: 'grid', placeItems: 'center', ...style };
  if (mystery) return (
    <span role="img" aria-label="Unknown person" style={{ ...base, background: 'radial-gradient(circle at 50% 30%, var(--stone-100), var(--stone-300) 70%)' }} {...rest}>
      <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: size * 0.5, color: '#fff', WebkitTextStroke: (size * 0.06) + 'px var(--stone-700)', paintOrder: 'stroke fill', lineHeight: 1 }}>?</span>
    </span>
  );
  if (src) return <span style={base} {...rest}><img src={src} alt={alt || name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></span>;
  const h = hash(String(seed || name || 'anon')), hue = HUES[h % HUES.length], pat = PATTERNS[(h >> 4) % PATTERNS.length];
  const light = 'oklch(0.86 0.11 ' + hue + ')', mid = 'oklch(0.68 0.16 ' + hue + ')', deep = 'oklch(0.42 0.12 ' + hue + ')';
  const cell = Math.round(size * 0.22), band = Math.round(size * 0.08);
  const overlay = pat === 'dots' ? 'radial-gradient(oklch(1 0 0 / 0.35) 18%, transparent 21%) 0 0 / ' + cell + 'px ' + cell + 'px'
    : pat === 'stripes' ? 'repeating-linear-gradient(-45deg, oklch(1 0 0 / 0.22) 0 ' + band + 'px, transparent ' + band + 'px ' + (band * 2.5) + 'px)'
    : pat === 'rings' ? 'repeating-radial-gradient(circle at 50% 120%, oklch(1 0 0 / 0.25) 0 ' + band + 'px, transparent ' + band + 'px ' + (band * 2.5) + 'px)' : '';
  return (
    <span role="img" aria-label={alt || name || 'Contributor'} style={{ ...base, background: (overlay ? overlay + ', ' : '') + 'linear-gradient(160deg, ' + light + ', ' + mid + ' 60%, ' + deep + ')' }} {...rest}>
      <span aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontSize: size * 0.42, color: '#fff', WebkitTextStroke: (size * 0.05) + 'px ' + deep, paintOrder: 'stroke fill', lineHeight: 1, letterSpacing: '0.02em' }}>{initials(name) || '•'}</span>
    </span>
  );
}

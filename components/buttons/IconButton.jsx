import React, { useState } from 'react';

const TONES = {
  primary: ['var(--gold-300)', 'var(--gold-500)', 'var(--gold-700)', 'var(--gold-900)'],
  play:    ['var(--blue-300)', 'var(--blue-500)', 'var(--blue-700)', '#fff'],
  confirm: ['var(--teal-300)', 'var(--teal-500)', 'var(--teal-700)', '#fff'],
  danger:  ['var(--coral-300)', 'var(--coral-500)', 'var(--coral-700)', '#fff'],
  premium: ['var(--berry-300)', 'var(--berry-500)', 'var(--berry-700)', '#fff'],
  wood:    ['var(--wood-300)', 'var(--wood-500)', 'var(--wood-700)', '#fff'],
  ghost:   ['#fff', 'var(--cream-100)', 'var(--cream-300)', 'var(--ink-900)'],
  locked:  ['var(--stone-300)', 'var(--stone-500)', 'var(--stone-700)', '#fff'],
};
// [diameter, bevel depth, icon font-size]
const SIZES = { sm: [36, 3, 18], md: [48, 5, 24], lg: [60, 7, 30] };

export function IconButton({ variant = 'play', size = 'md', shape = 'circle', badge, label, children, disabled = false, onClick, style, ...rest }) {
  const [down, setDown] = useState(false);
  const [top, mid, shade, text] = TONES[disabled ? 'locked' : variant] || TONES.play;
  const [d, depth, fs] = SIZES[size] || SIZES.md;
  const lift = down && !disabled ? 1 : depth;
  const btn = (
    <button type="button" disabled={disabled} onClick={onClick} aria-label={label}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerCancel={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{
        appearance: 'none', border: 0, margin: 0, padding: 0, cursor: disabled ? 'default' : 'pointer', position: 'relative',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: d, height: d, flex: 'none',
        borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
        background: 'linear-gradient(180deg, ' + top + ' 0%, ' + mid + ' 45%)',
        boxShadow: '0 ' + lift + 'px 0 ' + shade + ', 0 ' + (lift + 5) + 'px 12px oklch(0.2 0.04 60 / 0.25), inset 0 2px 0 oklch(1 0 0 / 0.45)',
        transform: 'translateY(' + (depth - lift) + 'px)',
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        color: text, fontSize: fs, lineHeight: 1, textShadow: text === '#fff' ? '0 2px 0 ' + shade : 'none',
        opacity: disabled ? 0.85 : 1, userSelect: 'none', WebkitTapHighlightColor: 'transparent',
        ...(label ? {} : style),
      }} {...(label ? {} : rest)}>
      {children}
      {badge != null && badge !== false && (
        <span style={{ position: 'absolute', top: -6, right: -6, minWidth: 22, height: 22, padding: '0 6px', boxSizing: 'border-box', borderRadius: 'var(--radius-pill)',
          background: 'linear-gradient(180deg, var(--coral-300), var(--coral-500) 50%)', boxShadow: '0 2px 0 var(--coral-700), 0 3px 6px oklch(0 0 0 / 0.25)', border: '2px solid #fff',
          color: '#fff', fontFamily: 'var(--font-display)', fontSize: 12, lineHeight: '18px', textAlign: 'center' }}>{badge === true ? '!' : badge}</span>
      )}
    </button>
  );
  if (!label) return btn;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6, ...style }} {...rest}>
      {btn}
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#fff',
        WebkitTextStroke: '0.2em var(--ink-900)', paintOrder: 'stroke fill', textShadow: '0 2px 0 oklch(0 0 0 / 0.25)' }}>{label}</span>
    </div>
  );
}

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
// [height, padding-x, font-size, bevel depth]
const SIZES = { sm: [36, 14, 14, 3], md: [48, 22, 18, 5], lg: [60, 30, 24, 7] };

export function Button({ variant = 'primary', size = 'md', typeface = 'display', icon, trailing, children, disabled = false, block = false, pill = false, onClick, style, ...rest }) {
  const [down, setDown] = useState(false);
  const [hover, setHover] = useState(false);
  const [top, mid, shade, text] = TONES[disabled ? 'locked' : variant] || TONES.primary;
  const [h, px, fs, depth] = SIZES[size] || SIZES.md;
  const lift = down && !disabled ? 1 : depth;
  const display = typeface === 'display';
  return (
    <button type="button" disabled={disabled} onClick={onClick}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerCancel={() => setDown(false)}
      onPointerEnter={() => setHover(true)} onPointerLeave={() => { setDown(false); setHover(false); }}
      style={{
        appearance: 'none', border: 0, margin: 0, cursor: disabled ? 'default' : 'pointer',
        display: block ? 'flex' : 'inline-flex', width: block ? '100%' : undefined, boxSizing: 'border-box',
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
        height: h, minWidth: h, padding: '0 ' + px + 'px',
        borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
        background: 'linear-gradient(180deg, ' + top + ' 0%, ' + mid + ' 42%, ' + mid + ' 100%)',
        boxShadow: '0 ' + lift + 'px 0 ' + shade + ', 0 ' + (lift + 6) + 'px 14px oklch(0.2 0.04 60 / 0.25), inset 0 2px 0 oklch(1 0 0 / 0.45)',
        transform: 'translateY(' + (depth - lift) + 'px)',
        filter: hover && !disabled && !down ? 'brightness(1.06)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), filter var(--dur-fast)',
        fontFamily: display ? 'var(--font-display)' : 'var(--font-ui)',
        fontWeight: display ? 400 : 700,
        fontSize: display ? fs : fs - 1, lineHeight: 1, letterSpacing: display ? '0.02em' : 0,
        textTransform: display ? 'uppercase' : 'none',
        color: text, textShadow: text === '#fff' ? '0 2px 0 ' + shade : 'none',
        opacity: disabled ? 0.85 : 1, userSelect: 'none', WebkitTapHighlightColor: 'transparent', whiteSpace: 'nowrap',
        ...style,
      }} {...rest}>
      {icon}{children}{trailing}
    </button>
  );
}

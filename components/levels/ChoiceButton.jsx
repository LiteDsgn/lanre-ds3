import React, { useState } from 'react';

const TONES = {
  idle:     { top: '#fff', mid: 'var(--cream-100)', shade: 'var(--cream-300)', text: 'var(--ink-900)', badge: 'var(--blue-500)', badgeText: '#fff' },
  selected: { top: 'var(--blue-300)', mid: 'var(--blue-500)', shade: 'var(--blue-700)', text: '#fff', badge: '#fff', badgeText: 'var(--blue-700)' },
  correct:  { top: 'var(--green-300)', mid: 'var(--green-500)', shade: 'var(--green-700)', text: '#fff', badge: '#fff', badgeText: 'var(--green-700)', glyph: 'check', sr: 'Correct' },
  wrong:    { top: 'var(--coral-300)', mid: 'var(--coral-500)', shade: 'var(--coral-700)', text: '#fff', badge: '#fff', badgeText: 'var(--coral-700)', glyph: 'x', sr: 'Not this one' },
  dim:      { top: 'var(--stone-100)', mid: 'var(--stone-300)', shade: 'var(--stone-500)', text: 'var(--ink-700)', badge: 'var(--stone-500)', badgeText: '#fff' },
};
const SR = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };

export function ChoiceButton({ index = 0, state = 'idle', size = 'md', children, onClick, disabled = false, style, ...rest }) {
  const [down, setDown] = useState(false);
  const t = TONES[state] || TONES.idle;
  const h = size === 'lg' ? 64 : 56, depth = 5;
  const off = disabled || state === 'dim' || state === 'correct' || state === 'wrong';
  const lift = down && !off ? 1 : depth;
  return (
    <button type="button" onClick={off ? undefined : onClick} disabled={disabled} aria-pressed={state === 'selected'} aria-disabled={off && !disabled ? true : undefined}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', border: 0, margin: 0, width: '100%', minHeight: h, padding: '8px 14px 8px 10px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 14, borderRadius: 'var(--radius-md)', textAlign: 'left', cursor: off ? 'default' : 'pointer',
        background: 'linear-gradient(180deg, ' + t.top + ' 0%, ' + t.mid + ' 42%)', boxShadow: '0 ' + lift + 'px 0 ' + t.shade + ', 0 ' + (lift + 5) + 'px 12px oklch(0.2 0.04 60 / 0.2), inset 0 2px 0 oklch(1 0 0 / 0.45)',
        transform: 'translateY(' + (depth - lift) + 'px)', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: size === 'lg' ? 20 : 18, color: t.text,
        textShadow: t.text === '#fff' ? '0 2px 0 ' + t.shade : 'none', opacity: state === 'dim' ? 0.7 : 1, WebkitTapHighlightColor: 'transparent', animation: state === 'wrong' ? 'mp-shake 0.4s var(--ease-out) 1' : 'none', ...style }} {...rest}>
      <span aria-hidden="true" style={{ width: 34, height: 34, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', background: t.badge, color: t.badgeText, fontFamily: 'var(--font-display)', fontSize: 16, boxShadow: 'inset 0 -2px 0 oklch(0 0 0 / 0.15)' }}>{String.fromCharCode(65 + index)}</span>
      <span style={{ flex: 1, minWidth: 0, lineHeight: 1.2 }}>{children}</span>
      {t.glyph && <span style={{ width: 30, height: 30, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', background: '#fff', color: t.badgeText, fontSize: 18 }}><i className={'ph-bold ph-' + t.glyph} aria-hidden="true" /><span style={SR}>{t.sr}</span></span>}
    </button>
  );
}

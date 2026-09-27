import React, { useState } from 'react';

const KINDS = { mango: ['orange', 'gold'], rice: ['bowl-food', 'white'], flower: ['flower', 'coral'], dumbbell: ['barbell', 'blue'], lantern: ['lamp-pendant', 'coral'], gift: ['gift', 'berry'], letter: ['envelope', 'gold'], star: ['star', 'gold'] };
const TONES = { gold: ['var(--gold-500)', 'var(--gold-900)'], white: ['#fff', 'var(--ink-900)'], coral: ['var(--coral-500)', 'var(--coral-900)'], blue: ['var(--blue-500)', 'var(--blue-900)'], berry: ['var(--berry-500)', 'var(--berry-900)'], teal: ['var(--teal-500)', 'var(--teal-900)'] };

export function DiscoveryMarker({ kind = 'gift', state = 'available', label, size = 64, onClick, style, ...rest }) {
  const [down, setDown] = useState(false);
  const [glyph, toneKey] = KINDS[kind] || KINDS.gift;
  const [fill, stroke] = TONES[toneKey] || TONES.gold;
  const hidden = state === 'hidden', opened = state === 'opened', isNew = state === 'new', live = state === 'available' || isNew;
  const ped = Math.round(size * 0.42);
  return (
    <button type="button" onClick={onClick} aria-label={label || (hidden ? 'Something in the bushes' : (isNew ? 'New surprise: ' : 'Discovery: ') + kind + (opened ? ', opened' : ''))}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', background: 'none', border: 0, padding: 0, margin: 0, position: 'relative', display: 'inline-grid', justifyItems: 'center', width: size + 24, cursor: 'pointer', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      {isNew && <span style={{ marginBottom: 6, height: 20, padding: '0 8px', borderRadius: 6, background: 'var(--gold-500)', boxShadow: '0 2px 0 var(--gold-700)', fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--gold-900)', display: 'grid', placeItems: 'center', whiteSpace: 'nowrap', animation: 'mp-float 1.6s ease-in-out infinite' }}>NEW SURPRISE</span>}
      <span style={{ position: 'relative', width: size, height: Math.round(size * 0.98), display: 'grid', placeItems: 'end center' }}>
        <span aria-hidden="true" style={{ position: 'absolute', left: '6%', right: '6%', bottom: 0, height: ped, borderRadius: '50%',
          background: hidden ? 'radial-gradient(ellipse at 40% 25%, var(--green-300), var(--green-500) 55%, var(--green-700))' : 'radial-gradient(ellipse at 50% 30%, var(--wood-300), var(--wood-500) 70%)',
          boxShadow: '0 ' + (down ? 2 : 5) + 'px 0 ' + (hidden ? 'var(--green-900)' : 'var(--wood-700)') + ', 0 8px 10px oklch(0.2 0.05 60 / 0.3)' + (live ? ', 0 0 0 4px oklch(0.92 0.14 90 / 0.8), 0 0 22px oklch(0.86 0.17 85 / 0.7)' : ''),
          transform: 'translateY(' + (down ? 3 : 0) + 'px)', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)' }} />
        {hidden
          ? <i aria-hidden="true" className="ph-fill ph-sparkle" style={{ position: 'absolute', right: '12%', top: '30%', fontSize: size * 0.28, color: '#fff', filter: 'drop-shadow(0 1px 0 var(--green-900))', animation: 'mp-sparkle 2s ease-in-out infinite' }} />
          : <i aria-hidden="true" className={'ph-fill ph-' + glyph} style={{ position: 'relative', fontSize: size * 0.6, lineHeight: 1, color: fill, WebkitTextStroke: (size * 0.06) + 'px ' + stroke, paintOrder: 'stroke fill', filter: 'drop-shadow(0 3px 0 oklch(0 0 0 / 0.25))', marginBottom: Math.round(ped * 0.45), opacity: opened ? 0.75 : 1, animation: live ? 'mp-float var(--dur-idle) ease-in-out infinite' : 'none' }} />}
        {opened && <span aria-hidden="true" style={{ position: 'absolute', right: -2, top: '10%', width: 22, height: 22, borderRadius: '50%', background: 'var(--green-500)', border: '2px solid #fff', color: '#fff', fontSize: 12, display: 'grid', placeItems: 'center', boxShadow: '0 2px 0 var(--green-700)' }}><i className="ph-bold ph-check" /></span>}
      </span>
      {label && <span style={{ marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#fff', WebkitTextStroke: '0.2em var(--ink-900)', paintOrder: 'stroke fill', textShadow: '0 2px 0 oklch(0 0 0 / 0.25)', whiteSpace: 'nowrap' }}>{label}</span>}
    </button>
  );
}

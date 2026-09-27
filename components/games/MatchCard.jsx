import React from 'react';

const SYMBOLS = { mango: ['orange', 'var(--gold-500)', 'var(--gold-900)'], rice: ['bowl-food', '#fff', 'var(--ink-900)'], flower: ['flower', 'var(--coral-500)', 'var(--coral-900)'], dumbbell: ['barbell', 'var(--blue-500)', 'var(--blue-900)'], lantern: ['lamp-pendant', 'var(--coral-500)', 'var(--coral-900)'], star: ['star', 'var(--gold-500)', 'var(--gold-900)'], heart: ['heart', 'var(--coral-500)', 'var(--coral-900)'], leaf: ['leaf', 'var(--green-500)', 'var(--green-900)'] };
const reduce = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function MatchCard({ symbol = 'mango', face = 'down', size = 84, onClick, disabled = false, label, style, ...rest }) {
  const [glyph, fill, stroke] = SYMBOLS[symbol] || SYMBOLS.star;
  const up = face !== 'down', matched = face === 'matched';
  const faceStyle = { position: 'absolute', inset: 0, borderRadius: 'var(--radius-md)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', display: 'grid', placeItems: 'center', boxSizing: 'border-box' };
  const swap = reduce() ? 'none' : 'opacity 0s linear 225ms';
  return (
    <button type="button" onClick={onClick} disabled={disabled || up} aria-label={label || (up ? symbol + (matched ? ', matched' : '') : 'Face-down card')}
      style={{ appearance: 'none', background: 'none', border: 0, padding: 0, margin: 0, width: size, height: Math.round(size * 1.15), perspective: 600, cursor: disabled || up ? 'default' : 'pointer', flex: 'none', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      <span style={{ position: 'relative', display: 'block', width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: up ? 'rotateY(180deg)' : 'none', transition: reduce() ? 'none' : 'transform 450ms var(--ease-in-out)' }}>
        <span aria-hidden="true" style={{ ...faceStyle, opacity: up ? 0 : 1, transition: swap, background: 'radial-gradient(circle at 50% 30%, var(--blue-300), var(--blue-500) 70%)', border: '3px solid var(--blue-300)', boxShadow: '0 5px 0 var(--blue-700), 0 8px 12px oklch(0.2 0.05 60 / 0.3), inset 0 2px 0 oklch(1 0 0 / 0.5)' }}>
          <span style={{ position: 'absolute', inset: 8, borderRadius: 10, border: '2px dashed oklch(1 0 0 / 0.5)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: size * 0.42, lineHeight: 1, color: '#fff', WebkitTextStroke: (size * 0.05) + 'px var(--blue-700)', paintOrder: 'stroke fill' }}>?</span>
        </span>
        <span aria-hidden="true" style={{ ...faceStyle, opacity: up ? 1 : 0, transition: swap, transform: 'rotateY(180deg)', background: 'linear-gradient(180deg, #fff, var(--cream-100))', border: '3px solid ' + (matched ? 'var(--green-500)' : 'var(--cream-300)'), boxShadow: '0 5px 0 ' + (matched ? 'var(--green-700)' : 'var(--cream-300)') + ', 0 8px 12px oklch(0.2 0.05 60 / 0.2)' }}>
          <i className={'ph-fill ph-' + glyph} style={{ fontSize: size * 0.5, lineHeight: 1, color: fill, WebkitTextStroke: (size * 0.055) + 'px ' + stroke, paintOrder: 'stroke fill', filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.2))' }} />
          {matched && <span style={{ position: 'absolute', right: -8, top: -8, width: 24, height: 24, borderRadius: '50%', background: 'var(--green-500)', border: '2px solid #fff', color: '#fff', fontSize: 13, display: 'grid', placeItems: 'center', boxShadow: '0 2px 0 var(--green-700)' }}><i className="ph-bold ph-check" /></span>}
        </span>
      </span>
    </button>
  );
}

import React from 'react';
import { WORLDS } from '../map/worlds.js';

export function WorldChip({ world = 'mango_grove', selected = false, onClick, size = 'md', showBlurb = false, style, ...rest }) {
  const W = WORLDS[world] || WORLDS.mango_grove;
  const h = size === 'sm' ? 40 : 52, sw = h - 16;
  return (
    <button type="button" data-world={world} onClick={onClick} aria-pressed={selected}
      style={{ appearance: 'none', margin: 0, display: 'inline-flex', alignItems: 'center', gap: 10, minHeight: h, padding: '6px 16px 6px 8px', borderRadius: 999, cursor: 'pointer', textAlign: 'left',
        border: '3px solid ' + (selected ? 'var(--world-accent)' : 'var(--cream-300)'), background: selected ? 'linear-gradient(180deg, var(--world-accent), var(--world-accent-shade))' : 'linear-gradient(180deg, #fff, var(--cream-100))',
        boxShadow: '0 4px 0 ' + (selected ? 'var(--world-stroke)' : 'var(--cream-300)'), color: selected ? '#fff' : 'var(--ink-900)', textShadow: selected ? '0 2px 0 var(--world-accent-shade)' : 'none',
        fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: size === 'sm' ? 14 : 16, WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      <span aria-hidden="true" style={{ width: sw, height: sw, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', background: 'linear-gradient(180deg, var(--world-sky), var(--world-ground))', border: '2px solid #fff', boxShadow: '0 2px 0 oklch(0 0 0 / 0.15)', color: '#fff', fontSize: sw * 0.55 }}>
        <i className={'ph-fill ph-' + W.glyph} style={{ WebkitTextStroke: '2px var(--world-stroke)', paintOrder: 'stroke fill', lineHeight: 1 }} />
      </span>
      <span style={{ display: 'grid', lineHeight: 1.15 }}><span>{W.name}</span>{showBlurb && <span style={{ fontWeight: 600, fontSize: 12, opacity: 0.85 }}>{W.blurb}</span>}</span>
      {selected && <i className="ph-bold ph-check" aria-hidden="true" style={{ fontSize: 18, marginLeft: 4 }} />}
    </button>
  );
}

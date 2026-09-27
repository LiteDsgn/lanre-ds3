import React from 'react';
import { WORLDS } from './worlds.js';

export function WorldGate({ world = 'mango_grove', name, levels, note, noteAuthor = 'Henry', locked = false, width = 340, style, ...rest }) {
  const W = WORLDS[world] || WORLDS.mango_grove;
  const title = name || W.name;
  const strokeTone = locked ? 'var(--stone-700)' : 'var(--world-stroke)';
  const post = { position: 'absolute', top: 0, bottom: -14, width: 14, borderRadius: 6, background: 'linear-gradient(90deg, var(--wood-300), var(--wood-500) 60%, var(--wood-700))', boxShadow: '0 4px 0 var(--wood-900)' };
  return (
    <div data-world={world} style={{ width, maxWidth: '100%', display: 'grid', justifyItems: 'center', gap: 16, fontFamily: 'var(--font-ui)', boxSizing: 'border-box', ...style }} {...rest}>
      <div style={{ position: 'relative', width: '100%', paddingTop: 8 }}>
        <span aria-hidden="true" style={{ ...post, left: '12%' }} />
        <span aria-hidden="true" style={{ ...post, right: '12%' }} />
        <div style={{ position: 'relative', margin: '0 4%', minHeight: 84, borderRadius: 'var(--radius-lg)', border: '5px solid var(--wood-700)',
          background: locked ? 'linear-gradient(180deg, var(--stone-300), var(--stone-500))' : 'linear-gradient(180deg, var(--world-accent), var(--world-accent-shade))',
          boxShadow: '0 6px 0 var(--wood-900), inset 0 3px 0 oklch(1 0 0 / 0.35), 0 12px 20px oklch(0.2 0.05 60 / 0.3)', display: 'grid', justifyItems: 'center', alignContent: 'center', gap: 8, padding: '12px 18px', textAlign: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <i aria-hidden="true" className={'ph-fill ph-' + (locked ? 'lock' : W.glyph)} style={{ fontSize: 26, lineHeight: 1, color: '#fff', WebkitTextStroke: '2.5px ' + strokeTone, paintOrder: 'stroke fill', filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.25))' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: title.length > 16 ? 20 : 26, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '0.03em', color: '#fff', WebkitTextStroke: '0.16em ' + strokeTone, paintOrder: 'stroke fill', textShadow: '0 3px 0 oklch(0 0 0 / 0.25)' }}>{title}</span>
          </span>
          {(levels || locked) && <span style={{ height: 22, padding: '0 10px', borderRadius: 6, background: 'var(--cream-100)', boxShadow: '0 2px 0 var(--cream-300)', fontFamily: 'var(--font-display)', fontSize: 12, letterSpacing: '0.06em', color: 'var(--ink-700)', display: 'grid', placeItems: 'center', textTransform: 'uppercase' }}>{locked ? 'Opens when the road is complete' : levels}</span>}
        </div>
      </div>
      {note && (
        <div style={{ position: 'relative', width: '88%', padding: '18px 18px 14px', boxSizing: 'border-box', borderRadius: 'var(--radius-md)', background: 'linear-gradient(180deg, #fff, var(--cream-100))', border: '3px solid var(--cream-300)', boxShadow: '0 5px 0 var(--cream-300), 0 8px 16px oklch(0.22 0.05 60 / 0.2)', transform: 'rotate(-1deg)', fontWeight: 600, fontSize: 15, lineHeight: 1.5, color: 'var(--ink-900)', textWrap: 'pretty' }}>
          <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: -12, transform: 'translateX(-50%) rotate(2deg)', width: 70, height: 20, background: 'oklch(0.92 0.14 90 / 0.7)', borderRadius: 3 }} />
          <span style={{ display: 'block', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-500)', marginBottom: 6 }}>{'A note from ' + noteAuthor}</span>
          {note}
        </div>
      )}
    </div>
  );
}

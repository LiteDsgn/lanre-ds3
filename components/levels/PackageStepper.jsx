import React from 'react';

const GLYPH = { text: 'article', photo: 'image', audio: 'microphone', video: 'video-camera' };
const LABEL = { text: 'Text', photo: 'Photo', audio: 'Audio', video: 'Video' };

export function PackageStepper({ items = [], current = 0, seen = [], onSelect, onDark = false, style, ...rest }) {
  return (
    <nav aria-label="Memory contents" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', rowGap: 10, ...style }} {...rest}>
      {items.map((it, i) => {
        const cur = i === current, done = !cur && seen.includes(i), up = !cur && !done;
        const bg = cur ? 'linear-gradient(180deg, var(--blue-300), var(--blue-500) 45%)' : done ? 'linear-gradient(180deg, var(--green-300), var(--green-500) 45%)' : 'linear-gradient(180deg, #fff, var(--cream-100))';
        const shade = cur ? 'var(--blue-700)' : done ? 'var(--green-700)' : 'var(--cream-300)';
        return (
          <React.Fragment key={i}>
            {i > 0 && <span aria-hidden="true" style={{ width: 22, height: 4, borderRadius: 2, flex: 'none', background: done || cur ? 'var(--green-500)' : onDark ? 'oklch(1 0 0 / 0.5)' : 'var(--cream-300)' }} />}
            <button type="button" onClick={onSelect ? () => onSelect(i) : undefined} aria-current={cur ? 'step' : undefined}
              aria-label={(it.label || LABEL[it.type] || 'Item') + ', ' + (i + 1) + ' of ' + items.length + (done ? ', seen' : '')}
              style={{ appearance: 'none', border: 0, padding: 0, margin: 0, width: 48, height: 48, borderRadius: '50%', display: 'grid', placeItems: 'center', position: 'relative', flex: 'none', cursor: onSelect ? 'pointer' : 'default',
                background: bg, boxShadow: '0 4px 0 ' + shade + ', inset 0 2px 0 oklch(1 0 0 / 0.45)', color: up ? 'var(--ink-700)' : '#fff', fontSize: 22, textShadow: up ? 'none' : '0 1px 0 ' + shade,
                animation: cur ? 'mp-pulse-ring 1.6s ease-out infinite' : 'none', WebkitTapHighlightColor: 'transparent' }}>
              <i className={'ph-fill ph-' + (GLYPH[it.type] || 'article')} aria-hidden="true" />
              {done && <span aria-hidden="true" style={{ position: 'absolute', right: -4, top: -4, width: 18, height: 18, borderRadius: '50%', background: '#fff', color: 'var(--green-700)', fontSize: 12, display: 'grid', placeItems: 'center', boxShadow: '0 1px 0 var(--green-700)' }}><i className="ph-bold ph-check" /></span>}
            </button>
          </React.Fragment>
        );
      })}
      <span style={{ marginLeft: 12, fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.04em', color: onDark ? '#fff' : 'var(--ink-700)', WebkitTextStroke: onDark ? '0.18em var(--ink-900)' : '0', paintOrder: 'stroke fill' }}>{Math.min(current + 1, items.length) + ' / ' + items.length}</span>
    </nav>
  );
}

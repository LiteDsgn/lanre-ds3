import React from 'react';

export function StepBar({ steps = [], current = 0, onSelect, compact = false, style, ...rest }) {
  const n = Math.max(1, steps.length);
  const doneW = n > 1 ? 'calc((100% - 100% / ' + n + ') * ' + (Math.min(current, n - 1) / (n - 1)) + ')' : '0px';
  return (
    <nav aria-label="Progress" style={{ display: 'grid', gap: 8, fontFamily: 'var(--font-ui)', ...style }} {...rest}>
      <div style={{ position: 'relative' }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: 16, left: 'calc(100% / ' + (n * 2) + ')', right: 'calc(100% / ' + (n * 2) + ')', height: 4, borderRadius: 2, background: 'var(--cream-300)' }} />
        <span aria-hidden="true" style={{ position: 'absolute', top: 16, left: 'calc(100% / ' + (n * 2) + ')', width: doneW, height: 4, borderRadius: 2, background: 'var(--green-500)', transition: 'width var(--dur-slow) var(--ease-out)' }} />
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(' + n + ', 1fr)', position: 'relative' }}>
          {steps.map((s, i) => {
            const done = i < current, cur = i === current;
            const bg = done ? 'linear-gradient(180deg, var(--green-300), var(--green-500) 45%)' : cur ? 'linear-gradient(180deg, var(--blue-300), var(--blue-500) 45%)' : 'linear-gradient(180deg, #fff, var(--cream-100))';
            const shade = done ? 'var(--green-700)' : cur ? 'var(--blue-700)' : 'var(--cream-300)';
            return (
              <li key={i} style={{ display: 'grid', justifyItems: 'center', gap: 6 }}>
                <button type="button" disabled={!onSelect || i > current} onClick={onSelect ? () => onSelect(i) : undefined} aria-current={cur ? 'step' : undefined} aria-label={'Step ' + (i + 1) + ' of ' + n + ': ' + s + (done ? ', done' : '')}
                  style={{ appearance: 'none', border: 0, margin: 0, padding: 0, width: 36, height: 36, borderRadius: '50%', display: 'grid', placeItems: 'center', background: bg, boxShadow: '0 3px 0 ' + shade + ', inset 0 2px 0 oklch(1 0 0 / 0.45)', color: done || cur ? '#fff' : 'var(--ink-700)', fontFamily: 'var(--font-display)', fontSize: 14, cursor: onSelect && i <= current ? 'pointer' : 'default', textShadow: done || cur ? '0 1px 0 ' + shade : 'none' }}>
                  {done ? <i className="ph-bold ph-check" aria-hidden="true" /> : i + 1}
                </button>
                {!compact && <span style={{ fontWeight: 700, fontSize: 12, color: cur ? 'var(--ink-900)' : 'var(--ink-500)', textAlign: 'center', lineHeight: 1.2 }}>{s}</span>}
              </li>
            );
          })}
        </ol>
      </div>
      {compact && <span style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink-700)', textAlign: 'center' }}>{'Step ' + (current + 1) + ' of ' + n + ': '}<span style={{ color: 'var(--ink-900)' }}>{steps[current]}</span></span>}
    </nav>
  );
}

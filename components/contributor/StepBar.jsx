'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';

// Where each trail was last seen in this tab, so only a forward step celebrates.
const seen = {};
// Decided in the browser, before paint. A server can't know what this tab saw, and an object shared
// by every request would leak one visitor's steps into someone else's page.
const useBrowserEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function StepBar({ steps = [], current = 0, labels = false, style, ...rest }) {
  const slot = labels ? 68 : 46;
  const kind = steps.join('|');
  const [advanced, setAdvanced] = useState(false);
  // Once per mount: did they just finish the step before this one?
  useBrowserEffect(() => {
    const prev = seen[kind];
    if (prev !== undefined && current === prev + 1) setAdvanced(true);
  }, []);
  // Remember every step it shows, not only the first, so a bar that moved while mounted isn't misread later.
  useBrowserEffect(() => { seen[kind] = current; }, [kind, current]);
  const n = steps.length;
  const filled = Math.max(0, Math.min(current, n - 1)); // all done fills the road, never past its end
  return (
    <nav aria-label="Progress" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6, boxSizing: 'border-box', ...style }} {...rest}>
      <div style={{ position: 'relative' }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: 12, left: slot / 2, right: slot / 2, height: 12, borderRadius: 999,
          background: 'var(--world-path)', boxShadow: '0 0 0 3px var(--world-path-edge), 0 4px 0 3px oklch(0.25 0.05 60 / 0.2)' }} />
        <span aria-hidden="true" className={advanced ? 'mp-trail-fill-grow' : undefined} style={{ position: 'absolute', top: 16, left: slot / 2, width: slot * filled, height: 4, borderRadius: 999,
          background: 'var(--green-500)', transition: 'width var(--dur-slow) var(--ease-out)',
          ...(advanced ? { '--from': slot * Math.min(current - 1, filled) + 'px', '--to': slot * filled + 'px' } : null) }} />
        <ol style={{ position: 'relative', listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          {steps.map((label, i) => {
            const done = i < current, cur = i === current, justDone = advanced && i === current - 1;
            return (
              <li key={i} aria-current={cur ? 'step' : undefined} style={{ width: slot, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <span aria-hidden="true" className={'mp-step' + (done ? ' mp-step-done' : cur ? ' mp-step-current' : '') + (justDone ? ' mp-step-pop' : '')}>
                  {done ? <i className="ph-bold ph-check" /> : i + 1}
                  {cur && <span style={{ position: 'absolute', inset: -4, borderRadius: '50%', animation: 'mp-pulse-ring 1.6s ease-out infinite' }} />}
                </span>
                {labels ? (
                  <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#fff', WebkitTextStroke: '0.22em var(--world-stroke)', paintOrder: 'stroke fill', whiteSpace: 'nowrap', fontSize: 11 }}>
                    {label}{done && <span className="mp-sr">, done</span>}
                  </span>
                ) : (
                  <span className="mp-sr">{'Step ' + (i + 1) + ' of ' + n + ': ' + label}{done && <span className="mp-sr">, done</span>}</span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

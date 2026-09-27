import React from 'react';

export function MemoryText({ children, size = 'lg', ornament = true, width = '100%', maxWidth = 'var(--layout-reading-max)', style, ...rest }) {
  const fs = size === 'lg' ? 20 : size === 'md' ? 17 : 15;
  return (
    <div style={{ position: 'relative', width, maxWidth, boxSizing: 'border-box', padding: ornament ? '30px 26px 24px' : '22px 24px', borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(180deg, #fff, var(--cream-100))', border: '3px solid var(--cream-300)', boxShadow: 'inset 0 3px 0 oklch(1 0 0 / 0.7), 0 6px 0 var(--cream-300), 0 10px 20px oklch(0.22 0.05 60 / 0.18)',
      fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: fs, lineHeight: 1.6, color: 'var(--ink-900)', textWrap: 'pretty', ...style }} {...rest}>
      {ornament && <span aria-hidden="true" style={{ position: 'absolute', left: 18, top: -8, fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1, color: 'var(--gold-300)', textShadow: '0 2px 0 var(--gold-700)' }}>“</span>}
      <div style={{ display: 'grid', gap: '0.8em' }}>{children}</div>
    </div>
  );
}

import React from 'react';

/* Layout helpers shared by the stories, the same ones the preview cards used. */
export const Row = ({ children, gap = 14, align = 'center', style }) => <div style={{ display: 'flex', gap, alignItems: align, flexWrap: 'wrap', ...style }}>{children}</div>;
export const Col = ({ children, gap = 16, style }) => <div style={{ display: 'grid', gap, ...style }}>{children}</div>;
export const Note = ({ children, dark = true }) => (
  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, opacity: .9, ...(dark ? { color: '#fff', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)' } : { color: 'var(--ink-700)' }) }}>{children}</span>
);
/* Plain Phosphor glyph, for the inside of bevelled buttons. */
export const Ph = ({ n, weight = 'fill' }) => <i className={'ph-' + weight + ' ph-' + n} />;

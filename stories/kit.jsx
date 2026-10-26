import React from 'react';

/* Layout helpers shared by the stories, the same ones the preview cards used. */
export const Row = ({ children, gap = 14, align = 'center', style }) => <div style={{ display: 'flex', gap, alignItems: align, flexWrap: 'wrap', ...style }}>{children}</div>;
export const Col = ({ children, gap = 16, style }) => <div style={{ display: 'grid', gap, ...style }}>{children}</div>;
export const Note = ({ children, dark = true }) => (
  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, opacity: .9, ...(dark ? { color: '#fff', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)' } : { color: 'var(--ink-700)' }) }}>{children}</span>
);
/* Plain Phosphor glyph, for the inside of bevelled buttons. */
export const Ph = ({ n, weight = 'fill' }) => <i className={'ph-' + weight + ' ph-' + n} />;
/* A placeholder photo (sky, sun, hills) for thumbnails, so no demo needs a real picture. */
export const samplePhoto = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" fill="#8fd3f4"/><circle cx="70" cy="26" r="12" fill="#ffd66b"/><path d="M0 70 Q30 48 56 66 T96 60 V96 H0Z" fill="#7cc46a"/><path d="M0 82 Q40 66 96 80 V96 H0Z" fill="#5aa84f"/></svg>');
/* A sized, positioned box like a viewer screen, for the media components that fill their box. It's a size container, so photos and video can fit themselves to it. */
export const Screen = ({ children, width = 390, height = 480, style }) => <div style={{ position: 'relative', width, height, maxWidth: '100%', containerType: 'size', overflow: 'hidden', borderRadius: 'var(--radius-lg)', background: 'var(--cream-50)', boxShadow: 'var(--shadow-drop)', ...style }}>{children}</div>;

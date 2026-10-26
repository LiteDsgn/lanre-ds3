'use client';
import React from 'react';

/* A round bevelled badge holding one white glyph. Decorative: it is hidden from screen readers, so say the same thing in words beside it. */
export function Sticker({ icon, tone = 'blue', weight = 'fill', style, ...rest }) {
  const vars = { '--tone-hi': 'var(--' + tone + '-300)', '--tone-face': 'var(--' + tone + '-500)', '--tone-side': 'var(--' + tone + '-700)', ...style };
  return (
    <span className="mp-sticker" style={vars} aria-hidden="true" {...rest}>
      <i className={'ph-' + weight + ' ph-' + icon} />
    </span>
  );
}

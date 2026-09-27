import React from 'react';

const SIZES = { xl: 44, lg: 32, md: 24, sm: 18, xs: 14 };
const STROKES = { ink: 'var(--ink-900)', stone: 'var(--stone-700)', blue: 'var(--blue-700)', gold: 'var(--gold-700)', green: 'var(--green-900)', coral: 'var(--coral-900)', berry: 'var(--berry-900)', wood: 'var(--wood-900)' };
const FILLS = { white: '#fff', gold: 'var(--gold-300)', cream: 'var(--cream-100)', blue: 'var(--blue-300)', green: 'var(--green-300)' };

export function OutlineText({ as = 'span', size = 'md', color = 'white', stroke = 'ink', weight, uppercase = true, shadow = true, children, style, ...rest }) {
  const px = typeof size === 'number' ? size : (SIZES[size] || SIZES.md);
  const sw = px < 20 ? 0.2 : 0.16;
  return React.createElement(as, {
    style: {
      fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: px, lineHeight: 1.05, letterSpacing: '0.02em',
      textTransform: uppercase ? 'uppercase' : 'none', color: FILLS[color] || color,
      WebkitTextStroke: (sw * px).toFixed(1) + 'px ' + (STROKES[stroke] || stroke), paintOrder: 'stroke fill',
      textShadow: shadow ? '0 ' + Math.max(2, Math.round(px * 0.1)) + 'px 0 oklch(0 0 0 / 0.22)' : 'none',
      display: 'inline-block', ...style,
    }, ...rest,
  }, children);
}

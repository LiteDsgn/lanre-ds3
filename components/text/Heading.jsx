'use client';
import React from 'react';
import { Tag } from '../feedback/Tag';

/* A screen heading: an optional small tag above, an outlined title, and an optional lede on a cream plate. The outline takes
   the colour of the world it's in (--world-stroke). */
export function Heading({ eyebrow, title, lede, size, as: Title = 'h1', className, ...rest }) {
  return (
    <header className={['mp-heading', className].filter(Boolean).join(' ')} {...rest}>
      {eyebrow && <Tag tone="wood">{eyebrow}</Tag>}
      <Title className="mp-heading-title" style={size ? { fontSize: size } : undefined}>{title}</Title>
      {lede && <p className="mp-plate">{lede}</p>}
    </header>
  );
}

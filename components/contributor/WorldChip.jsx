'use client';
import React from 'react';
import { WORLDS } from '../map/worlds.js';

/* A pill that shows the world a memory is in, and changes it when pressed. Give it an aria-label that says so,
   such as "Where on the road: Mango Grove. Tap to change." */
export function WorldChip({ world = 'mango_grove', name, glyph, caret = true, onClick, ...rest }) {
  const W = WORLDS[world] || WORLDS.mango_grove;
  return (
    <button type="button" className="mp-world-pill" data-world={world} onClick={onClick} {...rest}>
      <span className="mp-world-medal" aria-hidden="true"><i className={'ph-fill ph-' + (glyph || W.glyph)} /></span>
      <span className="mp-world-pill-name">{name || W.name}</span>
      {caret && <span className="mp-pill-mark" aria-hidden="true"><i className="ph-bold ph-caret-down" /></span>}
    </button>
  );
}

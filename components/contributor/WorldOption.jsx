'use client';
import React from 'react';
import { WORLDS } from '../map/worlds.js';

/* One world in a list to pick from: its medal, name and a line about it, with a radio on the right.
   Put a group of them in role="radiogroup". */
export function WorldOption({ world = 'mango_grove', name, glyph, blurb, checked = false, onChange, ...rest }) {
  const W = WORLDS[world] || WORLDS.mango_grove;
  return (
    <button type="button" role="radio" aria-checked={checked} className="mp-world-option" data-world={world} onClick={() => onChange && onChange(true)} {...rest}>
      <span className="mp-world-medal" aria-hidden="true"><i className={'ph-fill ph-' + (glyph || W.glyph)} /></span>
      <span className="mp-world-option-text">
        <strong>{name || W.name}</strong>
        <span>{blurb === undefined ? W.blurb : blurb}</span>
      </span>
      <span className="mp-world-radio" aria-hidden="true">{checked && <i className="ph-bold ph-check" />}</span>
    </button>
  );
}

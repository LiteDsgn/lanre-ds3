'use client';
import React from 'react';
import { WORLDS } from './worlds.js';

/* The sign that marks where a world starts on the map: a plank on two posts, the world's name and a count. Place it
   absolutely on the map (it centres itself on `left` and stands on `top`), and set its `width` from the caller. */
export function WorldGate({ world = 'mango_grove', name, glyph, detail, onNote, noteLabel = 'A note from the author', ...rest }) {
  const W = WORLDS[world] || WORLDS.mango_grove;
  return (
    <div className="mp-gate" {...rest}>
      <div className="mp-gate-sign" data-world={world}>
        <span className="mp-gate-post" aria-hidden="true" />
        <span className="mp-gate-post" aria-hidden="true" />
        <h2 className="mp-gate-title">
          <i className={'ph-fill ph-' + (glyph || W.glyph)} aria-hidden="true" />
          {name || W.name}
        </h2>
        {detail && <span className="mp-gate-count">{detail}</span>}
      </div>
      {onNote && (
        <button type="button" className="mp-gate-note" onClick={onNote}>
          <i className="ph-fill ph-envelope-simple" aria-hidden="true" /> {noteLabel}
        </button>
      )}
    </div>
  );
}

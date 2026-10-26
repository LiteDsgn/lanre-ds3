'use client';
import React from 'react';
import { WORLDS } from '../map/worlds.js';

/* A sign for choosing a world: a plank on two posts with the world's name and a line about it. Press it to choose.
   Set `locked` for a world that can't be chosen, such as the summit, and it becomes a stone sign that does nothing. */
export function WorldSign({ world = 'mango_grove', name, glyph, blurb, number, selected = false, locked = false, badge, onClick, ...rest }) {
  const W = WORLDS[world] || WORLDS.mango_grove;
  const title = name || W.name;
  const icon = locked ? 'lock' : (glyph || W.glyph);
  const text = blurb === undefined ? W.blurb : blurb;
  const posts = [<span key="a" className="mp-sign-post" aria-hidden="true" />, <span key="b" className="mp-sign-post" aria-hidden="true" />];
  const plank = (
    <span className={'mp-sign-plank' + (locked ? ' mp-sign-plank-locked' : '')}>
      <span className="mp-sign-title" style={title.length > 16 ? { fontSize: 19 } : undefined}>
        <i className={'ph-fill ph-' + icon} aria-hidden="true" />
        {title}
      </span>
      {text && <span className="mp-sign-blurb">{text}</span>}
      {badge && <span className="mp-sign-badge">{badge}</span>}
      {selected && <span className="mp-sign-check" aria-hidden="true"><i className="ph-bold ph-check" /></span>}
    </span>
  );
  if (locked) return <div className="mp-sign" style={{ cursor: 'default' }} {...rest}>{posts}{plank}</div>;
  return (
    <button type="button" className="mp-sign" data-world={world} aria-pressed={selected} onClick={onClick} {...rest}>
      {posts}
      {number !== undefined && <span className="mp-sign-number" aria-hidden="true"><span className="mp-step">{number}</span></span>}
      {plank}
    </button>
  );
}

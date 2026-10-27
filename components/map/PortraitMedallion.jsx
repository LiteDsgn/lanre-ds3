'use client';
import React from 'react';
import { Avatar } from '../identity/Avatar';

/* A completed level on the map: the friend on a gold pedestal, with the level number on a plate underneath. Give it
   onClick and it becomes a button that replays the level, with a press, a hover and a keyboard focus ring. The pedestal's
   shadow and the number plate are the same at every size. */
export function PortraitMedallion({ name = '', seed, src, number, size = 84, pop = false, onClick, label, style, ...rest }) {
  const interactive = typeof onClick === 'function';
  const who = name || 'a friend';
  const accessibleName = label || (interactive
    ? (number != null ? 'Replay level ' + number + ', ' + who : 'Replay surprise from ' + who)
    : (number != null ? 'Level ' + number + ', ' + who : name || 'A friend'));
  const medallion = (
    <span className={'mp-medallion' + (pop ? ' mp-medallion-pop' : '')} style={{ '--m': size + 'px', ...(interactive ? null : style) }}
      {...(interactive ? null : { role: 'img', 'aria-label': accessibleName, ...rest })}>
      <span className="mp-medallion-ring">
        <Avatar name={name} seed={seed} src={src} size={Math.round(size * 0.8)} alt="" />
      </span>
      {number != null && <span className="mp-medallion-number">{number}</span>}
    </span>
  );
  if (!interactive) return medallion;
  return (
    <button type="button" className="mp-medallion-button" aria-label={accessibleName} onClick={onClick} style={style} {...rest}>
      {medallion}
    </button>
  );
}

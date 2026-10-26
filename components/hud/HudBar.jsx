'use client';
import React from 'react';

/* The bar along the top of the map: chips on the left, and a slot on the right (such as a sound toggle) that drops away on
   phones. It sits over the window and lets taps through to the map, except on what's inside it. Set `contained` to place
   it in a positioned box instead. Put `mp-chrome-arriving` or `mp-chrome-away` on a parent for the arrival and the climb. */
export function HudBar({ left, right, hidden = false, contained = false, ...rest }) {
  return (
    <header className={'mp-hud' + (contained ? ' mp-hud-contained' : '')} hidden={hidden} {...rest}>
      <div className="mp-hud-left">{left}</div>
      <div className="mp-hud-right">{right}</div>
    </header>
  );
}

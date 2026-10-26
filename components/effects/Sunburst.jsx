'use client';
import React, { useId } from 'react';

/* Slow rays of light behind a focal point. It is SVG, so place it inside an <svg>, before the content it sits behind.
   motion: 'continuous' turns for ever, 'once' fades in and out, 'still' stays put. Reduced motion stops it. */
export function Sunburst({ x = 0, y = 0, radius = 500, rays = 12, color = '#ffe8ac', opacity = 0.13, duration = 120, motion = 'continuous' }) {
  const id = 'sunburst-' + useId().replace(/:/g, '');
  const count = Math.max(3, Math.min(24, Math.round(rays)));
  const half = Math.PI / count * 0.42;
  const a = Math.sin(half) * radius, b = Math.cos(half) * radius;
  return (
    <g transform={'translate(' + x + ',' + y + ')'} opacity={opacity} aria-hidden="true" pointerEvents="none">
      <defs>
        <radialGradient id={id} gradientUnits="userSpaceOnUse" cx={0} cy={0} r={radius}>
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset="0.16" stopColor={color} stopOpacity="0.65" />
          <stop offset="0.42" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="mp-sunburst-motion" data-sunburst-motion={motion} style={{ '--sunburst-duration': Math.max(0.1, duration) + 's' }}>
        {Array.from({ length: count }, (_, i) => <path key={i} transform={'rotate(' + (i * 360 / count) + ')'} d={'M0,0 L' + (-a) + ',' + (-b) + ' Q0,' + (-radius) + ' ' + a + ',' + (-b) + ' Z'} fill={'url(#' + id + ')'} />)}
      </g>
    </g>
  );
}

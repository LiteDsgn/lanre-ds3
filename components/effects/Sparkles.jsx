'use client';
import React from 'react';

const SPOTS = [['6%', '18px'], ['88%', '4px'], ['16%', '92px'], ['80%', '110px'], ['50%', '-6px']];

/* A handful of twinkles around a celebrated panel. Decorative only: put it inside a positioned box. */
export function Sparkles() {
  return (
    <>
      {SPOTS.map(([left, top], i) => <i key={i} className="ph-fill ph-sparkle mp-sparkle-spot" aria-hidden="true" style={{ left, top, '--i': i }} />)}
    </>
  );
}

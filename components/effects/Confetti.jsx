'use client';
import React, { useMemo } from 'react';

const COLOURS = ['#ffd84d', '#ff7aa8', '#4fb0e8', '#58c26a', '#ff9a3d', '#b884e8', '#ffffff'];

// A small deterministic random sequence, so the same burst is drawn on the server and in the browser.
function seeded(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* A one-shot burst of paper from the middle of its parent. Put it inside a positioned box, behind what is being celebrated.
   It is hidden entirely for reduced motion. */
export function Confetti({ pieces = 46, seed = 'confetti', ...rest }) {
  const bits = useMemo(() => {
    const r = seeded(seed);
    return Array.from({ length: pieces }, (_, i) => {
      const angle = r() * Math.PI * 2;
      const dist = 140 + r() * 220;
      return { i, colour: COLOURS[i % COLOURS.length], dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist - 80, rot: (r() - 0.5) * 900, delay: r() * 120, w: 8 + r() * 8, round: r() < 0.3 };
    });
  }, [pieces, seed]);
  return (
    <span className="mp-confetti" aria-hidden="true" {...rest}>
      {bits.map(b => (
        <span key={b.i} style={{ '--dx': b.dx.toFixed(0) + 'px', '--dy': b.dy.toFixed(0) + 'px', '--rot': b.rot.toFixed(0) + 'deg', background: b.colour, width: b.w, height: b.round ? b.w : b.w * 0.5,
          borderRadius: b.round ? '50%' : 2, animationDelay: b.delay.toFixed(0) + 'ms' }} />
      ))}
    </span>
  );
}

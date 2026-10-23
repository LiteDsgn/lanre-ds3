'use client';
import React, { useState } from 'react';
import { Avatar } from '../identity/Avatar';

export function PortraitMedallion({ name = '', seed, src, number, size = 84, pop = false, onClick, label, style, ...rest }) {
  const [down, setDown] = useState(false);
  const [hover, setHover] = useState(false);
  const interactive = typeof onClick === 'function';
  const pressed = interactive && down;
  const depth = Math.max(4, Math.round(size / 12)), travel = depth - 2;
  const plate = { h: Math.round(size * 0.36), min: Math.round(size * 0.43), fs: Math.round(size * 0.2) };
  const accessibleName = label || (interactive ? (number != null ? 'Replay level ' + number + ', ' + name : 'Replay surprise from ' + name) : name);
  const body = (
    <>
      <span aria-hidden="true" style={{
        display: 'grid', placeItems: 'center', width: size, height: size, borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 30%, var(--gold-300), var(--gold-500) 60%, var(--gold-700))',
        boxShadow: '0 ' + (pressed ? 2 : depth) + 'px 0 var(--gold-900), 0 ' + (pressed ? 6 : depth * 2) + 'px ' + (pressed ? 10 : 18) + 'px oklch(0.2 0.05 60 / 0.35), inset 0 3px 0 oklch(1 0 0 / 0.6)',
        transform: pressed ? 'translateY(' + travel + 'px)' : 'none',
        filter: hover && !pressed ? 'brightness(1.06)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), filter var(--dur-fast)',
      }}>
        <Avatar name={name} seed={seed} src={src} size={Math.round(size * 0.8)} alt="" />
      </span>
      {number != null && (
        <span aria-hidden="true" style={{
          position: 'relative', zIndex: 1, marginTop: -Math.round(size * 0.17), minWidth: plate.min, height: plate.h, padding: '0 ' + Math.round(plate.h / 3) + 'px', boxSizing: 'border-box',
          borderRadius: 'var(--radius-pill)', background: 'linear-gradient(180deg, #fff, var(--cream-100))', boxShadow: '0 3px 0 var(--cream-300), 0 6px 10px oklch(0 0 0 / 0.2)',
          fontFamily: 'var(--font-display)', fontSize: plate.fs, lineHeight: plate.h + 'px', color: 'var(--ink-900)', textAlign: 'center',
          transform: pressed ? 'translateY(' + (travel - 1) + 'px)' : 'none', transition: 'transform var(--dur-fast) var(--ease-out)',
        }}>{number}</span>
      )}
    </>
  );
  const frame = {
    position: 'relative', display: 'inline-grid', justifyItems: 'center', width: size,
    animation: pop ? 'mp-medallion-pop 900ms var(--ease-out) both' : undefined,
  };
  if (!interactive) return <span role="img" aria-label={accessibleName} style={{ ...frame, ...style }} {...rest}>{body}</span>;
  return (
    <button type="button" aria-label={accessibleName} onClick={onClick}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerCancel={() => setDown(false)}
      onPointerEnter={() => setHover(true)} onPointerLeave={() => { setDown(false); setHover(false); }}
      style={{ appearance: 'none', background: 'none', border: 0, margin: 0, padding: 0, cursor: 'pointer', borderRadius: 'var(--radius-pill)', WebkitTapHighlightColor: 'transparent', ...frame, ...style }} {...rest}>
      {body}
    </button>
  );
}

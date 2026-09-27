import React from 'react';
import { Avatar } from './Avatar';
import { Gemstone } from './Gemstone';

const reduce = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function RevealCard({ revealed = false, name, relationship, portrait, seed, gem = 'amber', tier = 1, clue, width = 250, onGemTap, style, ...rest }) {
  const h = Math.round(width * 1.24);
  const face = { position: 'absolute', inset: 0, borderRadius: 'var(--radius-xl)', border: '4px solid var(--cream-300)', background: 'linear-gradient(180deg, var(--cream-50), var(--cream-100))',
    boxShadow: 'inset 0 3px 0 oklch(1 0 0 / 0.7), 0 14px 24px oklch(0.22 0.05 60 / 0.3)', display: 'grid', justifyItems: 'center', alignContent: 'center', gap: 10, padding: 18, boxSizing: 'border-box', textAlign: 'center',
    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', fontFamily: 'var(--font-ui)' };
  const label = { fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-500)' };
  const stone = <Gemstone gem={gem} tier={tier} size={64} decorative />;
  const swap = reduce() ? 'none' : 'opacity 0s linear 325ms'; // faces swap at the flip midpoint, so flattened renderers never show a mirrored back
  return (
    <div style={{ width, height: h, perspective: 1000, flex: 'none', ...style }} {...rest}>
      <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: revealed ? 'rotateY(180deg)' : 'none', transition: reduce() ? 'none' : 'transform 650ms var(--ease-in-out)' }}>
        <div style={{ ...face, opacity: revealed ? 0 : 1, transition: swap }} aria-hidden={revealed}>
          <Avatar mystery size={96} />
          <span style={label}>Mystery memory</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink-900)', lineHeight: 1.1 }}>Who could it be?</span>
          {clue && <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink-700)', padding: '8px 14px', borderRadius: 'var(--radius-md)', background: 'var(--cream-200)', boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.08)', lineHeight: 1.4 }}>{clue}</span>}
        </div>
        {revealed && <div style={{ ...face, transform: 'rotateY(180deg)', borderColor: 'var(--gold-300)', opacity: revealed ? 1 : 0, transition: swap }} aria-hidden={!revealed}>
          <Avatar name={name} seed={seed} src={portrait} size={96} />
          <span style={label}>From</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--ink-900)', lineHeight: 1.1 }}>{name}</span>
          {relationship && <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink-700)', marginTop: -6 }}>{relationship}</span>}
          {stone}
        </div>}
      </div>
    </div>
  );
}

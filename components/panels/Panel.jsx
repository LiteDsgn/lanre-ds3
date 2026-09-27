import React, { useState } from 'react';

const BODY = {
  cream: { bg: 'linear-gradient(180deg, var(--cream-50), var(--cream-100))', border: 'var(--cream-300)', bw: 4 },
  wood:  { bg: 'var(--wood-100)', border: 'var(--wood-500)', bw: 6 },
  sky:   { bg: 'linear-gradient(180deg, #fff, var(--blue-100))', border: 'var(--blue-300)', bw: 4 },
};
// banner accents: [highlight, face, edge, outline]
const ACCENTS = {
  blue:  ['var(--blue-300)',  'var(--blue-500)',  'var(--blue-700)',  'var(--blue-900)'],
  gold:  ['var(--gold-300)',  'var(--gold-500)',  'var(--gold-700)',  'var(--gold-900)'],
  teal:  ['var(--teal-300)',  'var(--teal-500)',  'var(--teal-700)',  'var(--teal-900)'],
  green: ['var(--green-300)', 'var(--green-500)', 'var(--green-700)', 'var(--green-900)'],
  berry: ['var(--berry-300)', 'var(--berry-500)', 'var(--berry-700)', 'var(--berry-900)'],
  coral: ['var(--coral-300)', 'var(--coral-500)', 'var(--coral-700)', 'var(--coral-900)'],
};
const ALIAS = { tab: 'banner', bush: 'sign' }; // older names still work
const H = 62; // header plate height

function titleStyle(title, stroke, fill, scale = 1) {
  const len = typeof title === 'string' ? title.length : 10;
  const fs = len > 18 ? 18 : len > 12 ? 22 : 26;
  const cq = (len > 18 ? 6 : len > 12 ? 7.5 : 9.5) * scale;
  return { position: 'relative', fontFamily: 'var(--font-display)', fontSize: 'min(' + fs + 'px, ' + cq + 'cqw)', lineHeight: 1.05, letterSpacing: '0.04em', textTransform: 'uppercase', color: fill, WebkitTextStroke: '0.16em ' + stroke, paintOrder: 'stroke fill', textShadow: '0 3px 0 oklch(0 0 0 / 0.28)', textAlign: 'center', whiteSpace: 'nowrap' };
}
const Eyebrow = ({ children, outline }) => (
  <span style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', zIndex: 3, height: 26, padding: '0 12px', borderRadius: 999, boxSizing: 'border-box', background: 'var(--cream-50)', border: '3px solid ' + outline, boxShadow: '0 2px 0 ' + outline, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-900)', whiteSpace: 'nowrap' }}>{children}</span>
);
// The wrap shrinks to the plate's width, so tails and leaves hang off the plate's real edges. Title size follows panel width (cqw) so plates never outgrow narrow panels.
const wrap = { position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2, minWidth: '56%', height: H, display: 'inline-grid', alignItems: 'center', justifyItems: 'stretch' };

// Banner: chunky plate straddling the panel's top edge. ribbon adds folded tails + stars.
function Banner({ title, eyebrow, accent, ribbon, room }) {
  const [hi, face, edge, deep] = ACCENTS[accent] || ACCENTS.blue;
  const clip = side => side === 'left' ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 26% 50%)' : 'polygon(0 0, 100% 0, 74% 50%, 100% 100%, 0 100%)';
  const Tail = ({ side }) => (
    <span aria-hidden="true" style={{ position: 'absolute', top: 22, left: side === 'left' ? -30 : 'auto', right: side === 'right' ? -30 : 'auto', width: 66, height: H - 28, transform: 'rotate(' + (side === 'left' ? -6 : 6) + 'deg)', filter: 'drop-shadow(0 5px 0 ' + deep + ')', zIndex: 0 }}>
      <span style={{ position: 'absolute', inset: 0, clipPath: clip(side), background: deep }} />
      <span style={{ position: 'absolute', inset: 4, clipPath: clip(side), background: 'linear-gradient(' + (side === 'left' ? '90deg' : '270deg') + ', ' + edge + ' 0%, ' + face + ' 80%)' }} />
    </span>
  );
  return (
    <div style={wrap}>
      {ribbon && <Tail side="left" />}
      {ribbon && <Tail side="right" />}
      <div style={{ position: 'relative', height: H, padding: '0 26px', boxSizing: 'border-box', borderRadius: 20, border: '4px solid ' + deep,
        background: 'linear-gradient(180deg, ' + hi + ' 0%, ' + face + ' 48%)', boxShadow: '0 6px 0 ' + edge + ', 0 12px 20px oklch(0.2 0.05 60 / 0.35), inset 0 3px 0 oklch(1 0 0 / 0.5)', display: 'grid', placeItems: 'center' }}>
        <span aria-hidden="true" style={{ position: 'absolute', top: 6, left: 14, right: 14, height: 9, borderRadius: 999, background: 'oklch(1 0 0 / 0.35)' }} />
        <span style={titleStyle(title, deep, '#fff', room)}>{title}</span>
        {ribbon && ['left', 'right'].map(s => (
          <i key={s} aria-hidden="true" className="ph-fill ph-star" style={{ position: 'absolute', top: -18, left: s === 'left' ? -8 : 'auto', right: s === 'right' ? -8 : 'auto', fontSize: 32, lineHeight: 1, color: 'var(--gold-300)', WebkitTextStroke: '3px var(--gold-900)', paintOrder: 'stroke fill', filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.25))', transform: 'rotate(' + (s === 'left' ? -18 : 18) + 'deg)' }} />
        ))}
      </div>
      {eyebrow && <Eyebrow outline={deep}>{eyebrow}</Eyebrow>}
    </div>
  );
}

// Sign: wooden plank with nails and leaves, world events, daily reward.
function Sign({ title, eyebrow, room }) {
  const leaf = (side, rot, top, size, key) => (
    <i key={key} aria-hidden="true" className="ph-fill ph-leaf" style={{ position: 'absolute', top, left: side === 'left' ? -12 : 'auto', right: side === 'right' ? -12 : 'auto', fontSize: size, lineHeight: 1, color: 'var(--green-500)', WebkitTextStroke: '3px var(--green-900)', paintOrder: 'stroke fill', transform: 'rotate(' + rot + 'deg)', filter: 'drop-shadow(0 2px 0 oklch(0 0 0 / 0.25))', zIndex: 0 }} />
  );
  return (
    <div style={{ ...wrap, minWidth: '62%' }}>
      {leaf('left', -35, -14, 36, 'a')}{leaf('right', 35, -14, 36, 'b')}{leaf('left', -115, 28, 28, 'c')}{leaf('right', 115, 28, 28, 'd')}
      <div style={{ position: 'relative', height: H, padding: '0 30px', boxSizing: 'border-box', borderRadius: 14, border: '4px solid var(--wood-700)',
        background: 'repeating-linear-gradient(180deg, transparent 0 9px, oklch(0 0 0 / 0.06) 9px 11px), linear-gradient(180deg, var(--wood-300), var(--wood-500))',
        boxShadow: '0 6px 0 var(--wood-900), 0 12px 20px oklch(0.2 0.05 60 / 0.35), inset 0 3px 0 oklch(1 0 0 / 0.3)', display: 'grid', placeItems: 'center' }}>
        {['left', 'right'].map(s => <span key={s} aria-hidden="true" style={{ position: 'absolute', top: 7, left: s === 'left' ? 8 : 'auto', right: s === 'right' ? 8 : 'auto', width: 9, height: 9, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, var(--stone-100), var(--stone-500))', boxShadow: '0 1px 0 var(--wood-900)' }} />)}
        <span style={titleStyle(title, 'var(--wood-900)', 'var(--cream-100)', room)}>{title}</span>
      </div>
      {eyebrow && <Eyebrow outline="var(--wood-900)">{eyebrow}</Eyebrow>}
    </div>
  );
}

function CloseButton({ onClick }) {
  const [down, setDown] = useState(false);
  return (
    <button type="button" aria-label="Close" onClick={onClick} onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ position: 'absolute', top: -10, right: -10, width: 40, height: 40, borderRadius: '50%', border: '3px solid #fff', padding: 0, cursor: 'pointer', zIndex: 3,
        background: 'linear-gradient(180deg, var(--coral-300), var(--coral-500) 50%)', boxShadow: '0 ' + (down ? 1 : 4) + 'px 0 var(--coral-700), 0 6px 10px oklch(0 0 0 / 0.25)',
        transform: 'translateY(' + (down ? 3 : 0) + 'px)', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)', color: '#fff', fontSize: 20, display: 'grid', placeItems: 'center', lineHeight: 1 }}>
      <i className="ph-bold ph-x" />
    </button>
  );
}

export function Panel({ title, eyebrow, header = 'banner', accent, tone = 'cream', onClose, width = 340, padding = 20, children, footer, style, ...rest }) {
  const kind = ALIAS[header] || header;
  const room = onClose ? 0.84 : 1; // shrink the title a little so the plate never runs under the × button
  const t = BODY[tone] || BODY.cream;
  const has = kind !== 'none' && title != null;
  const overlap = has ? Math.round(H * 0.55) : 0; // part of the plate rises above the panel edge
  const acc = accent || (kind === 'ribbon' ? 'gold' : 'blue');
  return (
    <div style={{ position: 'relative', width, maxWidth: '100%', boxSizing: 'border-box', paddingTop: overlap, containerType: 'inline-size', filter: 'drop-shadow(0 18px 28px oklch(0.22 0.05 60 / 0.35))', ...style }} {...rest}>
      {has && (kind === 'sign' ? <Sign title={title} eyebrow={eyebrow} room={room} /> : <Banner title={title} eyebrow={eyebrow} accent={acc} ribbon={kind === 'ribbon'} room={room} />)}
      <div style={{ position: 'relative', background: t.bg, border: t.bw + 'px solid ' + t.border, borderRadius: 'var(--radius-xl)', boxSizing: 'border-box',
        boxShadow: 'inset 0 3px 0 oklch(1 0 0 / 0.7), inset 0 -4px 0 oklch(0 0 0 / 0.06)', paddingTop: has ? H - overlap : 0 }}>
        {onClose && <CloseButton onClick={onClose} />}
        <div style={{ padding, paddingTop: has ? padding - 4 : padding }}>{children}</div>
        {footer && <div style={{ padding: '0 ' + padding + 'px ' + padding + 'px', display: 'flex', justifyContent: 'center', gap: 12 }}>{footer}</div>}
      </div>
    </div>
  );
}

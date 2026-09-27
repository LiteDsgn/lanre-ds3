import React from 'react';

const GEMS = {
  amber:    { name: 'Amber',    light: 'var(--gem-amber-light)',    fill: 'var(--gem-amber)',    deep: 'var(--gem-amber-deep)',    clip: 'polygon(50% 0%, 96% 24%, 96% 76%, 50% 100%, 4% 76%, 4% 24%)', shape: 'hexagon' },
  emerald:  { name: 'Emerald',  light: 'var(--gem-emerald-light)',  fill: 'var(--gem-emerald)',  deep: 'var(--gem-emerald-deep)',  clip: 'polygon(26% 4%, 74% 4%, 96% 26%, 96% 74%, 74% 96%, 26% 96%, 4% 74%, 4% 26%)', shape: 'octagon' },
  amethyst: { name: 'Amethyst', light: 'var(--gem-amethyst-light)', fill: 'var(--gem-amethyst)', deep: 'var(--gem-amethyst-deep)', clip: 'polygon(50% 0%, 96% 38%, 50% 100%, 4% 38%)', shape: 'kite' },
  pearl:    { name: 'Pearl',    light: 'var(--gem-pearl-light)',    fill: 'var(--gem-pearl)',    deep: 'var(--gem-pearl-deep)',    clip: 'circle(48% at 50% 50%)', shape: 'round' },
};
const ROMAN = ['', 'I', 'II', 'III'];
export const GEM_NAMES = { amber: 'Amber', emerald: 'Emerald', amethyst: 'Amethyst', pearl: 'Pearl' };

// Score → gem + tier. null/undefined (quiz skipped) → pearl keepsake, tier 0 (unranked, not a zero).
export function gemForScore(score) {
  if (score == null) return { gem: 'pearl', tier: 0 };
  const s = Math.max(0, Math.min(8, Math.round(score)));
  return { gem: s < 3 ? 'amber' : s < 6 ? 'emerald' : 'amethyst', tier: (s % 3) + 1 };
}

export function Gemstone({ gem = 'amber', tier = 1, size = 64, label, showTier = false, decorative = !showTier, animate = true, style, ...rest }) {
  const g = GEMS[gem] || GEMS.amber;
  const pearl = gem === 'pearl';
  const t = pearl ? 0 : Math.max(1, Math.min(3, tier));
  const sparkle = t >= 2, halo = t === 3;
  const inset = Math.max(2, Math.round(size * 0.07));
  const aria = label || (pearl ? 'Pearl keepsake' : g.name + ', tier ' + ROMAN[t]);
  const layer = (bg, extra) => <span aria-hidden="true" style={{ position: 'absolute', inset, clipPath: g.clip, background: bg, ...extra }} />;
  return (
    <span role={decorative ? undefined : "img"} aria-hidden={decorative || undefined} aria-label={decorative ? undefined : aria} style={{ position: 'relative', display: 'inline-grid', justifyItems: 'center', width: size, flex: 'none', ...style }} {...rest}>
      <span style={{ position: 'relative', width: size, height: size, filter: 'drop-shadow(0 ' + Math.max(2, Math.round(size * 0.05)) + 'px 0 oklch(0 0 0 / 0.22))' }}>
        {halo && <span aria-hidden="true" style={{ position: 'absolute', inset: '-22%', borderRadius: '50%', background: 'radial-gradient(circle, ' + g.light + ' 0%, ' + g.fill + ' 30%, transparent 70%)', opacity: 0.8, animation: animate ? 'mp-float var(--dur-idle) ease-in-out infinite' : 'none' }} />}
        {halo && <span aria-hidden="true" style={{ position: 'absolute', inset: '-10%', borderRadius: '50%', border: Math.max(2, Math.round(size * 0.045)) + 'px solid #fff', opacity: 0.9 }} />}
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, clipPath: g.clip, background: g.deep }} />
        {layer('linear-gradient(155deg, ' + g.light + ' 0%, ' + g.fill + ' 48%, ' + g.deep + ' 100%)')}
        {layer('linear-gradient(180deg, oklch(1 0 0 / 0.6), oklch(1 0 0 / 0) 60%)', { clipPath: pearl ? g.clip : 'polygon(50% 12%, 78% 34%, 50% 54%, 22% 34%)' })}
        {!pearl && layer('linear-gradient(0deg, oklch(0 0 0 / 0.28), transparent 42%)')}
        {pearl && <span aria-hidden="true" style={{ position: 'absolute', left: '24%', top: '18%', width: '26%', height: '15%', borderRadius: '50%', background: 'oklch(1 0 0 / 0.9)' }} />}
        {sparkle && [[-0.1, -0.06, 0], [0.64, 0.66, 600]].map(([x, y, d], i) => (
          <i key={i} aria-hidden="true" className="ph-fill ph-sparkle" style={{ position: 'absolute', left: x * size, top: y * size, fontSize: size * 0.36, lineHeight: 1, color: '#fff', WebkitTextStroke: (size * 0.03) + 'px ' + g.deep, paintOrder: 'stroke fill', animation: animate ? 'mp-sparkle 1.8s ease-in-out infinite ' + d + 'ms' : 'none' }} />
        ))}
      </span>
      {showTier && !decorative && !pearl && <span style={{ marginTop: 6, fontFamily: 'var(--font-display)', fontSize: Math.max(11, Math.round(size * 0.2)), color: 'var(--ink-700)', letterSpacing: '0.08em' }}>{g.name + ' ' + ROMAN[t]}</span>}
      {showTier && !decorative && pearl && <span style={{ marginTop: 6, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: Math.max(11, Math.round(size * 0.17)), color: 'var(--ink-500)' }}>Keepsake</span>}
    </span>
  );
}

import React from 'react';

const FILLS = {
  gold:  ['var(--gold-300)',  'var(--gold-500)',  'var(--gold-700)'],
  blue:  ['var(--blue-300)',  'var(--blue-500)',  'var(--blue-700)'],
  teal:  ['var(--teal-300)',  'var(--teal-500)',  'var(--teal-700)'],
  green: ['var(--green-300)', 'var(--green-500)', 'var(--green-700)'],
  coral: ['var(--coral-300)', 'var(--coral-500)', 'var(--coral-700)'],
  berry: ['var(--berry-300)', 'var(--berry-500)', 'var(--berry-700)'],
};
const SIZES = { sm: [14, 11], md: [22, 14], lg: [30, 18] }; // [height, label size]

export function ProgressBar({ value = 0, max = 1, tone = 'gold', size = 'md', label, striped = true, cap, width, track = 'dark', style, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / (max || 1)) * 100));
  const [top, mid, shade] = FILLS[tone] || FILLS.gold;
  const [h, fs] = SIZES[size] || SIZES.md;
  const dark = track === 'dark';
  return (
    <div role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', width: width || '100%', minWidth: 80, ...style }} {...rest}>
      {cap && <span style={{ position: 'relative', zIndex: 2, marginRight: -h * 0.5, flex: 'none', display: 'grid', placeItems: 'center' }}>{cap}</span>}
      <div style={{ position: 'relative', flex: 1, height: h, borderRadius: 'var(--radius-pill)', overflow: 'hidden', boxSizing: 'border-box',
        background: dark ? 'oklch(0.30 0.06 55 / 0.85)' : 'var(--cream-200)', border: '2px solid ' + (dark ? 'oklch(0.20 0.05 55 / 0.9)' : 'var(--cream-300)'),
        boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.35), 0 2px 0 oklch(1 0 0 / 0.15)' }}>
        <div style={{ position: 'absolute', inset: 0, right: 'auto', width: pct + '%', minWidth: pct > 0 ? h : 0, borderRadius: 'var(--radius-pill)',
          background: 'linear-gradient(180deg, ' + top + ' 0%, ' + mid + ' 55%, ' + shade + ' 100%)', boxShadow: 'inset 0 -3px 0 ' + shade + ', inset 0 2px 0 oklch(1 0 0 / 0.5)',
          transition: 'width var(--dur-slow) var(--ease-out)' }}>
          {striped && <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', opacity: 0.35,
            background: 'repeating-linear-gradient(-55deg, transparent 0 8px, oklch(1 0 0 / 0.55) 8px 14px)' }} />}
        </div>
        {label != null && (
          <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-display)', fontSize: fs, color: '#fff', lineHeight: 1,
            WebkitTextStroke: (fs * 0.18) + 'px var(--ink-900)', paintOrder: 'stroke fill', letterSpacing: '0.03em' }}>{label}</span>
        )}
      </div>
    </div>
  );
}

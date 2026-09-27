import React from 'react';
import { Avatar } from '../identity/Avatar';
import { Gemstone, GEM_NAMES } from '../identity/Gemstone';

const ROMAN = ['', 'I', 'II', 'III'];

export function LeaderboardRow({ rank, tied = false, name, seed, portrait, gem = 'amber', tier = 1, score, total = 8, me = false, skipped = false, style, ...rest }) {
  const g = skipped ? 'pearl' : gem;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 64, padding: '8px 14px 8px 10px', borderRadius: 'var(--radius-lg)', boxSizing: 'border-box',
      background: me ? 'linear-gradient(180deg, var(--teal-100), #fff)' : 'linear-gradient(180deg, #fff, var(--cream-100))',
      border: '3px solid ' + (me ? 'var(--teal-300)' : 'var(--cream-300)'), boxShadow: '0 3px 0 ' + (me ? 'var(--teal-500)' : 'var(--cream-300)'), fontFamily: 'var(--font-ui)', ...style }} {...rest}>
      <span aria-label={skipped ? 'Unranked' : 'Rank ' + rank + (tied ? ', tied' : '')} style={{ width: 40, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: skipped ? 16 : 20, color: skipped ? 'var(--ink-500)' : 'var(--ink-900)', flex: 'none' }}>{skipped ? '-' : (tied ? '=' : '') + rank}</span>
      <Avatar name={name} seed={seed} src={portrait} size={40} />
      <span style={{ flex: 1, minWidth: 0, display: 'grid', gap: 1 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink-900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}{me && <span style={{ marginLeft: 8, fontFamily: 'var(--font-display)', fontSize: 11, color: 'var(--teal-700)', letterSpacing: '0.08em' }}>YOU</span>}</span>
        <span style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink-500)' }}>{skipped ? 'Pearl keepsake · unranked' : GEM_NAMES[gem] + ' ' + ROMAN[tier]}</span>
      </span>
      <Gemstone gem={g} tier={tier} size={34} animate={false} />
      <span style={{ width: 44, textAlign: 'right', fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--ink-900)', fontVariantNumeric: 'tabular-nums', flex: 'none' }}>{skipped ? '' : score + '/' + total}</span>
    </div>
  );
}

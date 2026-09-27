import React, { useState } from 'react';
import { Avatar } from './Avatar';
import { Gemstone } from './Gemstone';

export function PersonTile({ state = 'mystery', name, relationship, portrait, seed, gem = 'amber', tier = 1, width = 116, onClick, style, ...rest }) {
  const [down, setDown] = useState(false);
  const mystery = state === 'mystery', isNew = state === 'new';
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag type={onClick ? 'button' : undefined} onClick={onClick} aria-label={mystery ? 'Not yet found' : name + (isNew ? ', new surprise' : '')}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', margin: 0, position: 'relative', width, padding: '16px 8px 12px', boxSizing: 'border-box', display: 'grid', justifyItems: 'center', gap: 8, borderRadius: 'var(--radius-lg)',
        border: '3px solid ' + (mystery ? 'oklch(1 0 0 / 0.3)' : isNew ? 'var(--gold-300)' : 'var(--cream-300)'),
        background: mystery ? 'oklch(0.34 0.09 145 / 0.30)' : 'linear-gradient(180deg, #fff, var(--cream-100))',
        boxShadow: mystery ? 'inset 0 2px 6px oklch(0 0 0 / 0.25)' : '0 ' + (down && onClick ? 1 : 4) + 'px 0 ' + (isNew ? 'var(--gold-500)' : 'var(--cream-300)') + ', 0 6px 10px oklch(0.2 0.05 60 / 0.2)',
        transform: down && onClick && !mystery ? 'translateY(3px)' : 'none', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)', cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-ui)', textAlign: 'center', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      {isNew && <span style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', height: 20, padding: '0 8px', borderRadius: 6, background: 'var(--gold-500)', boxShadow: '0 2px 0 var(--gold-700)', fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--gold-900)', display: 'grid', placeItems: 'center', whiteSpace: 'nowrap' }}>NEW</span>}
      <span style={{ position: 'relative' }}>
        <Avatar mystery={mystery} name={mystery ? '' : name} seed={mystery ? undefined : seed} src={mystery ? undefined : portrait} size={60} />
        {!mystery && <Gemstone gem={gem} tier={tier} size={30} decorative animate={false} style={{ position: 'absolute', right: -12, bottom: -6 }} />}
      </span>
      <span style={{ fontWeight: 700, fontSize: 13, lineHeight: 1.2, color: mystery ? '#fff' : 'var(--ink-900)', textShadow: mystery ? '0 1px 0 oklch(0 0 0 / 0.4)' : 'none' }}>{mystery ? 'Not yet found' : name}</span>
      {!mystery && relationship && <span style={{ fontWeight: 600, fontSize: 11, color: 'var(--ink-500)', marginTop: -6 }}>{relationship}</span>}
    </Tag>
  );
}

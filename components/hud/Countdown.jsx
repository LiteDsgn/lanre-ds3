'use client';
import React, { useSyncExternalStore } from 'react';
import { TimerChip } from './TimerChip';

const SECOND = 1000;
// One clock for every Countdown on the page, firing just after each whole second so they all change together.
const listeners = new Set();
let timer = 0;
const schedule = () => { timer = setTimeout(() => { listeners.forEach(tick => tick()); schedule(); }, SECOND - (Date.now() % SECOND) + 5); };
const tickEverySecond = tick => { listeners.add(tick); if (listeners.size === 1) schedule(); return () => { listeners.delete(tick); if (!listeners.size) clearTimeout(timer); }; };
const noTicks = () => () => {};
const clockNow = () => Math.floor(Date.now() / SECOND) * SECOND;
const noClockOnServer = () => null; // server and browser clocks differ, so it renders after hydration
const pad = n => String(n).padStart(2, '0');
const plural = (n, word) => n + ' ' + word + (n === 1 ? '' : 's');

export function Countdown({ to, variant = 'board', label, title, caption, icon, ended = null, urgentWithin = 86400000, tone, size, now, style, ...rest }) {
  const frozen = now != null;
  const ticking = useSyncExternalStore(frozen ? noTicks : tickEverySecond, clockNow, noClockOnServer);
  const current = frozen ? now : ticking;
  if (current == null) return null;
  const left = new Date(to).getTime() - current;
  if (!(left > 0)) return ended;
  const total = Math.floor(left / SECOND);
  const days = Math.floor(total / 86400), hours = Math.floor((total % 86400) / 3600), minutes = Math.floor((total % 3600) / 60), seconds = total % 60;
  const said = [[days, 'day'], [hours, 'hour'], [minutes, 'minute']];
  while (said.length && said[0][0] === 0) said.shift(); // "4 hours and 2 minutes", not "0 days, 4 hours…"
  const words = said.map(([n, w]) => plural(n, w));
  const spoken = (words.length > 1 ? words.slice(0, -1).join(', ') + ' and ' + words[words.length - 1] : words[0] || 'Less than a minute') + (label ? ' until ' + label : ' left');

  if (variant === 'chip') {
    return <TimerChip role="timer" aria-label={spoken} icon={icon || 'hourglass-medium'} time={pad(days) + ':' + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)}
      urgent={left <= urgentWithin} tone={tone} size={size} style={style} {...rest} />;
  }

  const units = [[days, 'Days'], [hours, 'Hours'], [minutes, 'Mins'], [seconds, 'Secs']];
  return (
    <div role="timer" aria-label={spoken} style={{ width: '100%', containerType: 'inline-size', paddingTop: 22, boxSizing: 'border-box', ...style }} {...rest}>
      <div style={{
        position: 'relative', boxSizing: 'border-box', padding: 'clamp(34px, 7cqi, 44px) clamp(14px, 4cqi, 26px) clamp(16px, 3.5cqi, 22px)',
        borderRadius: 'var(--radius-xl)', border: '5px solid var(--wood-900)',
        background: 'repeating-linear-gradient(180deg, transparent 0 18px, oklch(0 0 0 / 0.06) 18px 21px), linear-gradient(180deg, var(--wood-300), var(--wood-500))',
        boxShadow: '0 8px 0 var(--wood-900), 0 22px 36px oklch(0.25 0.05 60 / 0.35), inset 0 4px 0 oklch(1 0 0 / 0.3)',
        display: 'grid', justifyItems: 'center', gap: 14,
      }}>
        <span aria-hidden="true" style={{
          position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)', height: 44, padding: '0 20px', boxSizing: 'border-box',
          borderRadius: 'var(--radius-pill)', border: '4px solid #fff', background: 'linear-gradient(180deg, var(--gold-300), var(--gold-500) 60%)', boxShadow: '0 4px 0 var(--gold-700)',
          display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 3cqi, 17px)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold-900)',
        }}>
          <i className={'ph-fill ph-' + (icon || 'gift')} style={{ fontSize: '1.2em' }} />
          {title || (label ? 'Until ' + label : 'Time left')}
        </span>
        <div aria-hidden="true" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'clamp(8px, 2.4cqi, 14px)' }}>
          {units.map(([value, unit]) => (
            <div key={unit} style={{ display: 'grid', justifyItems: 'center', gap: 8, minWidth: 0 }}>
              <span style={{
                position: 'relative', width: '100%', aspectRatio: '1 / 1.04', boxSizing: 'border-box', borderRadius: 'clamp(14px, 3.5cqi, 20px)', overflow: 'hidden',
                background: 'linear-gradient(180deg, #fff 0%, var(--cream-100) 48%, var(--cream-200) 100%)', boxShadow: '0 6px 0 var(--wood-700), inset 0 3px 0 oklch(1 0 0 / 0.8)',
                display: 'grid', placeItems: 'center',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 10cqi, 64px)', lineHeight: 1, color: 'var(--blue-900)', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em' }}>{pad(value)}</span>
                <span style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 2, background: 'oklch(0.4 0.08 60 / 0.12)' }} />
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(11px, 2.6cqi, 14px)', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', WebkitTextStroke: '0.22em var(--wood-900)', paintOrder: 'stroke fill' }}>{unit}</span>
            </div>
          ))}
        </div>
        {caption && <span aria-hidden="true" style={{ fontWeight: 700, fontSize: 15, color: 'var(--cream-50)', textShadow: '0 2px 0 oklch(0.3 0.06 55 / 0.6)' }}>{caption}</span>}
      </div>
    </div>
  );
}

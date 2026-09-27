import React from 'react';

export function SoundToggle({ on = true, onChange, tone = 'dark', size = 'md', style, ...rest }) {
  const h = size === 'sm' ? 36 : 44, dark = tone === 'dark';
  return (
    <button type="button" role="switch" aria-checked={on} onClick={() => onChange && onChange(!on)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: h, padding: '0 16px 0 12px', borderRadius: 999, cursor: 'pointer', border: '2px solid ' + (dark ? 'oklch(0.2 0.05 55 / 0.9)' : 'var(--cream-300)'),
        background: dark ? 'var(--surface-hud)' : 'var(--cream-50)', color: dark ? '#fff' : 'var(--ink-900)', boxShadow: dark ? 'inset 0 2px 4px oklch(0 0 0 / 0.35), 0 2px 0 oklch(1 0 0 / 0.15)' : '0 3px 0 var(--cream-300)',
        fontFamily: 'var(--font-display)', fontSize: size === 'sm' ? 13 : 15, letterSpacing: '0.04em', textTransform: 'uppercase', textShadow: dark ? '0 2px 0 oklch(0 0 0 / 0.35)' : 'none', WebkitTapHighlightColor: 'transparent', ...style }} {...rest}>
      <i className={'ph-fill ph-' + (on ? 'speaker-high' : 'speaker-slash')} aria-hidden="true" style={{ fontSize: h * 0.5, lineHeight: 1, color: on ? (dark ? 'var(--teal-300)' : 'var(--teal-700)') : (dark ? 'var(--coral-300)' : 'var(--coral-700)') }} />
      <span>{on ? 'Sound on' : 'Sound off'}</span>
    </button>
  );
}

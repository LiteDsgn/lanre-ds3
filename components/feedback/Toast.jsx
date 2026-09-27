import React from 'react';

const TONES = { gold: 'var(--gold-300)', blue: 'var(--blue-300)', teal: 'var(--teal-300)', coral: 'var(--coral-300)', berry: 'var(--berry-300)', white: '#fff' };

export function Toast({ icon, message, detail, tone = 'gold', visible = true, style, ...rest }) {
  if (!visible) return null;
  return (
    <div role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 20px 0 12px', borderRadius: 'var(--radius-pill)', boxSizing: 'border-box',
      background: 'var(--surface-hud)', border: '2px solid oklch(0.20 0.05 55 / 0.9)', boxShadow: 'var(--shadow-drop), inset 0 2px 0 oklch(1 0 0 / 0.12)',
      animation: 'mp-pop var(--dur-slow) var(--ease-bounce) both', ...style }} {...rest}>
      {icon}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: TONES[tone] || tone, textShadow: '0 2px 0 oklch(0 0 0 / 0.35)', letterSpacing: '0.02em' }}>{message}</span>
        {detail && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, color: 'oklch(1 0 0 / 0.8)' }}>{detail}</span>}
      </div>
    </div>
  );
}

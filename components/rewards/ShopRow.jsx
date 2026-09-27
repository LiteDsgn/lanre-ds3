import React, { useState } from 'react';

export function ShopRow({ icon, title, subtitle, price, tag, tone = 'default', onBuy, action, style, ...rest }) {
  const [down, setDown] = useState(false);
  const featured = tone === 'featured';
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, minHeight: 76, padding: '10px 10px 10px 12px', boxSizing: 'border-box', borderRadius: 'var(--radius-lg)',
      background: featured ? 'linear-gradient(135deg, var(--teal-500), var(--teal-700))' : 'linear-gradient(180deg, #fff, var(--cream-100))',
      border: '3px solid ' + (featured ? 'var(--teal-300)' : 'var(--cream-300)'), boxShadow: '0 3px 0 ' + (featured ? 'var(--teal-900)' : 'var(--cream-300)') + ', 0 4px 8px oklch(0.2 0.05 60 / 0.12)', ...style }} {...rest}>
      {tag && <span style={{ position: 'absolute', top: -12, right: 12 }}>{tag}</span>}
      <span style={{ display: 'grid', placeItems: 'center', width: 50, height: 50, flex: 'none' }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: 1.1, color: featured ? '#fff' : 'var(--ink-900)', textShadow: featured ? '0 2px 0 var(--teal-900)' : 'none', letterSpacing: '0.01em' }}>{title}</span>
        {subtitle && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, color: featured ? 'var(--teal-100)' : 'var(--ink-500)', lineHeight: 1.25 }}>{subtitle}</span>}
      </div>
      {action || (price != null && (
        <button type="button" onClick={onBuy} onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
          style={{ appearance: 'none', border: 0, flex: 'none', height: 40, padding: '0 14px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
            background: featured ? 'linear-gradient(180deg, var(--gold-300), var(--gold-500) 45%)' : 'linear-gradient(180deg, var(--teal-300), var(--teal-500) 45%)',
            boxShadow: '0 ' + (down ? 1 : 4) + 'px 0 ' + (featured ? 'var(--gold-700)' : 'var(--teal-700)') + ', inset 0 2px 0 oklch(1 0 0 / 0.45)', transform: 'translateY(' + (down ? 3 : 0) + 'px)', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)',
            fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.02em', color: featured ? 'var(--gold-900)' : '#fff', textShadow: featured ? 'none' : '0 2px 0 var(--teal-700)', whiteSpace: 'nowrap' }}>{price}</button>
      ))}
    </div>
  );
}

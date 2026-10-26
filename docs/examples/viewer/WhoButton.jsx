'use client';
import { useState } from 'react';
import { WhoButton } from '@ds/viewer/WhoButton';

export default function WhoButtonExample() {
  const [found, setFound] = useState(false);
  return (
    <div data-world="small_chops" style={{ padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))', boxShadow: '0 6px 0 var(--wood-900)' }}>
      <WhoButton found={found} name="Ada Okafor" seed="c-7" onClick={() => setFound(f => !f)} aria-label={found ? 'From Ada Okafor. See who it was from again' : 'Who’s behind this?'} />
    </div>
  );
}

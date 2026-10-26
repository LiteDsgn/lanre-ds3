'use client';
import { useState } from 'react';
import { WorldOption } from '@ds/contributor/WorldOption';

export default function WorldOptionExample() {
  const [chosen, setChosen] = useState('japan');
  return (
    <div role="radiogroup" aria-label="Where on the road?" style={{ width: 340, display: 'grid', gap: 10 }}>
      {['mango_grove', 'small_chops', 'good_energy', 'japan'].map(w => <WorldOption key={w} world={w} checked={chosen === w} onChange={() => setChosen(w)} />)}
    </div>
  );
}

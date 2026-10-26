'use client';
import { useState } from 'react';
import { Confetti } from '@ds/effects/Confetti';
import { Button } from '@ds/buttons/Button';
import { Sticker } from '@ds/feedback/Sticker';

export default function ConfettiExample() {
  const [round, setRound] = useState(1);
  return (
    <div style={{ position: 'relative', minHeight: 300, display: 'grid', placeItems: 'center', alignContent: 'center', gap: 22 }}>
      <Confetti key={round} />
      <Sticker icon="gift" tone="berry" />
      <Button size="sm" onClick={() => setRound(r => r + 1)}>Pop it</Button>
    </div>
  );
}

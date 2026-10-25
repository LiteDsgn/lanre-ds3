'use client';
import { useState } from 'react';
import { RadioCard } from '@ds/contributor/RadioCard';
import { Avatar } from '@ds/identity/Avatar';
import { GameIcon } from '@ds/icons/GameIcon';

export default function RadioCardExample() {
  const [reveals, setReveals] = useState(false);
  return (
    <div role="radiogroup" aria-label="Does this package show who you are?" style={{ width: 300, display: 'grid', gap: 10 }}>
      <RadioCard checked={!reveals} onChange={() => setReveals(false)} icon={<Avatar mystery size={40} />} title="Keeps me a mystery" description="No face, name or voice in here." />
      <RadioCard checked={reveals} onChange={() => setReveals(true)} tone="gold" icon={<GameIcon kind="sparkle" size={36} />} title="Shows who I am" description="Skip the guessing for this one." />
    </div>
  );
}

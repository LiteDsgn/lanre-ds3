'use client';
import { useState } from 'react';
import { RadioCard } from '@ds/contributor/RadioCard';
import { Avatar } from '@ds/identity/Avatar';

export default function RadioCardExample() {
  const [reveals, setReveals] = useState(false);
  return (
    <div role="radiogroup" aria-label="Does this memory show who you are?" style={{ width: 340, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-3)' }}>
      <RadioCard checked={!reveals} onChange={() => setReveals(false)} media={<Avatar mystery size={72} aria-hidden="true" />} title="Keeps me a mystery" description="No face, name or voice in here." />
      <RadioCard checked={reveals} onChange={() => setReveals(true)} media={<Avatar name="Ada Okafor" size={72} alt="" aria-hidden="true" />} title="Shows who I am" description="Skip the guessing for this one." />
    </div>
  );
}

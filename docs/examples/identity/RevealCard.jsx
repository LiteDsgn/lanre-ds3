'use client';
import { useState } from 'react';
import { RevealCard } from '@ds/identity/RevealCard';
import { Button } from '@ds/buttons/Button';
import { Row } from '@stories/kit';

export default function RevealCardExample() {
  const [revealed, setRevealed] = useState(false);
  return (
    <Row gap={24} align="flex-start">
      <RevealCard revealed={revealed} name="Ada Okafor" relationship="Sister" seed="c_01" gem="emerald" tier={2} clue="We met over jollof." width={220} onGemTap={() => {}} />
      <Button variant="confirm" typeface="ui" onClick={() => setRevealed(r => !r)}>{revealed ? 'Back to mystery' : 'Reveal sender'}</Button>
    </Row>
  );
}

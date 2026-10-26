'use client';
import { useState } from 'react';
import { WorldChip } from '@ds/contributor/WorldChip';
import { WorldOption } from '@ds/contributor/WorldOption';
import { Button } from '@ds/buttons/Button';
import { Row } from '@stories/kit';

const worlds = ['mango_grove', 'small_chops', 'good_energy', 'japan'];

export default function WorldChipExample() {
  const [world, setWorld] = useState('small_chops');
  const next = () => setWorld(w => worlds[(worlds.indexOf(w) + 1) % worlds.length]);
  return (
    <Row gap={12}>
      <WorldChip world={world} onClick={next} aria-label="Where on the road. Tap to change." />
      <Button size="sm" variant="ghost" onClick={next}>Change it</Button>
    </Row>
  );
}

'use client';
import { useState } from 'react';
import { HudChip, useBump } from '@ds/hud/HudChip';
import { Button } from '@ds/buttons/Button';
import { Row } from '@stories/kit';

export default function HudChipExample() {
  const [found, setFound] = useState(1);
  const bump = useBump(found);
  return (
    <Row gap={22}>
      <HudChip icon="users-three" tone="teal" value="3/5" onClick={() => {}} aria-label="3 of 5 friends found. Open Your people" />
      <HudChip icon="sparkle" tone="berry" value={found + '/6'} bump={bump} fresh onClick={() => {}} aria-label={found + ' of 6 surprises found, a new one just arrived'} />
      <Button size="sm" variant="ghost" onClick={() => setFound(f => (f >= 6 ? 1 : f + 1))}>{found >= 6 ? 'Start again' : 'Find one'}</Button>
    </Row>
  );
}

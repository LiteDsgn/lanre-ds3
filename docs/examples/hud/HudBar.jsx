'use client';
import { useState } from 'react';
import { HudBar } from '@ds/hud/HudBar';
import { HudChip, useBump } from '@ds/hud/HudChip';
import { SoundToggle } from '@ds/feedback/SoundToggle';
import { Screen } from '@stories/kit';

export default function HudBarExample() {
  const [found, setFound] = useState(1);
  const [sound, setSound] = useState(true);
  const bump = useBump(found);
  return (
    <Screen width="100%" height={150} style={{ background: 'var(--bg-meadow)' }}>
      <HudBar contained
        left={<>
          <HudChip icon="users-three" tone="teal" value="3/5" onClick={() => {}} aria-label="3 of 5 friends found. Open Your people" />
          <HudChip icon="sparkle" tone="berry" value={found + '/6'} bump={bump} fresh={found < 6} onClick={() => setFound(f => (f >= 6 ? 1 : f + 1))} aria-label={found + ' of 6 surprises found. Show me the next one'} />
        </>}
        right={<SoundToggle on={sound} size="sm" onChange={setSound} />} />
    </Screen>
  );
}

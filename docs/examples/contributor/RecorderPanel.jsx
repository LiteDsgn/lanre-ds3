'use client';
import { useState } from 'react';
import { RecorderPanel } from '@ds/contributor/RecorderPanel';
import { SegmentedTabs } from '@ds/buttons/SegmentedTabs';
import { sampleTone } from '@stories/sample-media';

const STEPS = [{ id: 'idle', label: 'Idle' }, { id: 'recording', label: 'Recording' }, { id: 'review', label: 'Review' }];

export default function RecorderPanelExample() {
  const [phase, setPhase] = useState('idle');
  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 380, margin: '0 auto' }}>
      <SegmentedTabs label="Step to show" items={STEPS} value={phase} onChange={setPhase} />
      <RecorderPanel phase={phase} seconds={42} url={sampleTone(3)} prompt="Record a voice note. Say what you like." onRecord={() => setPhase('recording')} onStop={() => setPhase('review')}
        onRedo={() => setPhase('idle')} onUse={() => setPhase('idle')} onCancel={() => setPhase('idle')} />
    </div>
  );
}

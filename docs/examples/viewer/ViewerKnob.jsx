'use client';
import { useState } from 'react';
import { ViewerKnob } from '@ds/viewer/ViewerKnob';

const steps = [
  { label: 'Next: photos', icon: 'caret-right' },
  { label: 'Who’s behind this?', icon: 'question', tone: 'guess', attract: true },
  { label: 'Saved', icon: 'check', tone: 'saved' },
];

export default function ViewerKnobExample() {
  const [i, setI] = useState(0);
  return (
    <div style={{ width: 340, padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))', boxShadow: '0 6px 0 var(--wood-900)' }}>
      <ViewerKnob {...steps[i]} onClick={() => setI(n => (n + 1) % steps.length)} />
    </div>
  );
}

'use client';
import { useState } from 'react';
import { Toolbar } from '@ds/toolbar/Toolbar';
import { ToolbarNext } from '@ds/toolbar/ToolbarNext';
import { Button } from '@ds/buttons/Button';
import { Screen, Row } from '@stories/kit';

const moods = {
  level: { label: 'A level', props: { 'aria-label': 'Next, level 7' }, icon: '7' },
  letter: { label: 'The letter', props: { caption: 'Your', gold: true, 'aria-label': 'Your letter' }, icon: <i className="ph-fill ph-envelope-simple" aria-hidden="true" /> },
  busy: { label: 'Busy', props: { busy: true }, icon: <i className="ph-fill ph-hourglass" /> },
  nothing: { label: 'Nothing yet', props: { disabled: true, 'aria-label': 'Nothing to open yet' }, icon: <i className="ph-fill ph-lock-simple" aria-hidden="true" /> },
};

export default function ToolbarNextExample() {
  const [mood, setMood] = useState('level');
  const m = moods[mood];
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <Row gap={8}>{Object.entries(moods).map(([k, v]) => <Button key={k} size="sm" variant={k === mood ? 'play' : 'ghost'} onClick={() => setMood(k)}>{v.label}</Button>)}</Row>
      <Screen width="100%" height={220} style={{ background: 'var(--bg-meadow)' }}>
        <Toolbar contained><ToolbarNext {...m.props} onClick={() => {}}>{m.icon}</ToolbarNext></Toolbar>
      </Screen>
    </div>
  );
}

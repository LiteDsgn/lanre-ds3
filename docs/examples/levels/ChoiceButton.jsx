'use client';
import { useState } from 'react';
import { ChoiceButton } from '@ds/levels/ChoiceButton';
import { Button } from '@ds/buttons/Button';
import { Row, Note } from '@stories/kit';

const names = ['Ada Okafor', 'Tunde Bello', 'Kemi A.'];
const correct = 0;

export default function ChoiceButtonExample() {
  const [pick, setPick] = useState(null);
  const state = i => pick == null ? 'idle' : i === pick ? (i === correct ? 'correct' : 'wrong') : pick === correct ? (i === correct ? 'correct' : 'dim') : 'idle';
  return (
    <div style={{ width: 400, display: 'grid', gap: 10 }}>
      {names.map((n, i) => <ChoiceButton key={n} index={i} state={state(i)} onClick={() => setPick(i)}>{n}</ChoiceButton>)}
      <Row gap={10} style={{ justifyContent: 'space-between' }}>
        <Button variant="ghost" typeface="ui" size="sm" onClick={() => setPick(null)}>{pick != null && pick !== correct ? 'Try again' : 'Reset'}</Button>
        <Button variant="ghost" typeface="ui" size="sm" onClick={() => setPick(correct)}>Just tell me</Button>
      </Row>
      <Note>Pick a name. Wrong shows coral and × with a retry; right shows green and ✓, and the rest dim.</Note>
    </div>
  );
}

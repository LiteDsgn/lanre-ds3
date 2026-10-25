import React, { useState } from 'react';
import { ChoiceButton } from '../../components/levels/ChoiceButton';
import { PackageStepper } from '../../components/levels/PackageStepper';
import { Button } from '../../components/buttons/Button';
import { Row, Col, Note } from '../kit';

export default {
  title: 'Patterns/Guess step',
  tags: ['!autodocs'],
};

const names = ['Ada Okafor', 'Tunde Bello', 'Kemi A.'];
const correct = 0;

export const Default = {
  name: 'Guess step',
  render: function Render() {
    const [pick, setPick] = useState(null);
    const [cur, setCur] = useState(2);
    const st = i => pick == null ? 'idle' : i === pick ? (i === correct ? 'correct' : 'wrong') : pick === correct ? (i === correct ? 'correct' : 'dim') : 'idle';
    return (
      <Col gap={20}>
        <PackageStepper items={[{ type: 'text' }, { type: 'photo' }, { type: 'audio' }, { type: 'video' }]} current={cur} seen={[0, 1]} onSelect={setCur} onDark />
        <div style={{ width: 400, display: 'grid', gap: 10 }}>
          {names.map((n, i) => <ChoiceButton key={n} index={i} state={st(i)} onClick={() => setPick(i)}>{n}</ChoiceButton>)}
          <Row gap={10} style={{ justifyContent: 'space-between' }}>
            <Button variant="ghost" typeface="ui" size="sm" onClick={() => setPick(null)}>{pick != null && pick !== correct ? 'Try again' : 'Reset demo'}</Button>
            <Button variant="ghost" typeface="ui" size="sm">Just tell me</Button>
          </Row>
        </div>
        <Note>Wrong = coral + × and a retry; correct = green + ✓; the rest dim. "Just tell me" is always available.</Note>
      </Col>
    );
  },
};

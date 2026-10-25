'use client';
import { useState } from 'react';
import { StepBar } from '@ds/contributor/StepBar';
import { Button } from '@ds/buttons/Button';
import { Col, Row } from '@stories/kit';

const road = ['You', 'Memories', 'Preview', 'Submit'];
const memory = ['Where', 'Who', 'Write', 'Details'];

export default function StepBarExample() {
  const [current, setCurrent] = useState(1);
  // A new key on each step remounts the bars, so a step forward celebrates.
  return (
    <Col gap={22} style={{ width: 358, justifyItems: 'center' }}>
      <StepBar key={'road' + current} steps={road} current={current} />
      <StepBar key={'memory' + current} steps={memory} current={current} labels />
      <Row gap={10}>
        <Button size="sm" variant="ghost" disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>Back</Button>
        <Button size="sm" variant="play" disabled={current === 3} onClick={() => setCurrent(c => c + 1)}>Next</Button>
      </Row>
    </Col>
  );
}

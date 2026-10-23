'use client';
import { useState } from 'react';
import { StepBar } from '@ds/contributor/StepBar';
import { Col } from '@stories/kit';

const steps = ['You', 'Memory', 'Theme', 'Preview', 'Submit'];

export default function StepBarExample() {
  const [current, setCurrent] = useState(1);
  return (
    <Col gap={18} style={{ width: 358 }}>
      <StepBar steps={steps} current={current} onSelect={setCurrent} />
      <StepBar steps={steps} current={current} onSelect={setCurrent} compact />
    </Col>
  );
}

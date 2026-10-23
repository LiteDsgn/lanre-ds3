'use client';
import { useState } from 'react';
import { Countdown } from '@ds/hud/Countdown';
import { Row, Col } from '@stories/kit';

export default function CountdownExample() {
  // Fixtures relative to when the page opens, so the clock is always counting.
  const [soon] = useState(() => Date.now() + ((3 * 24 + 4) * 60 + 12) * 60e3);
  const [today] = useState(() => Date.now() + 5 * 3600e3);
  return (
    <Col gap={20}>
      <div style={{ maxWidth: 480 }}>
        <Countdown to={soon} label="the party" caption="Fixture date" />
      </div>
      <Row gap={16}>
        <Countdown variant="chip" to={soon} label="the deadline" />
        <Countdown variant="chip" to={today} label="the deadline" />
        <Countdown variant="chip" to={today} label="the deadline" tone="light" size="sm" />
      </Row>
    </Col>
  );
}

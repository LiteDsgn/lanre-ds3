import React from 'react';
import { Countdown } from '../../../components/hud/Countdown';
import { TimerChip } from '../../../components/hud/TimerChip';
import argTypes from '../../../components/hud/Countdown.d.ts?argtypes';
import notes from '../../../components/hud/Countdown.prompt.md?raw';
import { Row, Col } from '../../kit';

// Fixtures relative to when the story loads, so the clock is always counting.
const inDays = (d, h = 0, m = 0) => new Date(Date.now() + ((d * 24 + h) * 60 + m) * 60e3).toISOString();

export default {
  title: 'Components/HUD/Countdown',
  component: Countdown,
  argTypes,
  args: { to: inDays(3, 4, 12), label: 'the party', caption: 'Fixture date' },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ maxWidth: 520 }}><Story /></div>],
};

export const Playground = {};

export const ViewportSizing = {
  name: 'Sized by the window',
  args: { sizing: 'viewport' },
};

export const Chip = {
  render: () => (
    <Row gap={16}>
      <Countdown variant="chip" to={inDays(3, 4, 12)} label="the deadline" />
      <Countdown variant="chip" to={inDays(0, 5)} label="the deadline" />
      <Countdown variant="chip" to={inDays(0, 5)} label="the deadline" tone="light" size="sm" />
    </Row>
  ),
};

export const Ended = {
  render: () => (
    <Col gap={12}>
      <Countdown variant="chip" to={inDays(-1)} label="the deadline" ended={<TimerChip icon="heart" time="Late entries welcome" />} />
      <Countdown to={inDays(-1)} label="the party" ended={<span style={{ fontWeight: 700, color: '#fff' }}>The board is gone once the time has passed.</span>} />
    </Col>
  ),
};

export const Frozen = {
  name: 'Frozen clock',
  args: { to: '2026-12-24T00:00:00', now: Date.parse('2026-12-20T09:30:00'), caption: '24 December' },
};

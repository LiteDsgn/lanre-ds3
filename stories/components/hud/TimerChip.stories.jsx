import React from 'react';
import { TimerChip } from '../../../components/hud/TimerChip';
import argTypes from '../../../components/hud/TimerChip.d.ts?argtypes';
import notes from '../../../components/hud/TimerChip.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/HUD/TimerChip',
  component: TimerChip,
  argTypes,
  args: { time: '00:02' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Variants = {
  render: () => (
    <Row gap={16}>
      <TimerChip time="00:02" />
      <TimerChip time="4h 12m" tone="light" />
      <TimerChip time="00:09" urgent />
      <TimerChip time="12:00" size="sm" icon="hourglass" />
    </Row>
  ),
};

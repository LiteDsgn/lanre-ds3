import React from 'react';
import { ProgressBar } from '../../../components/hud/ProgressBar';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/hud/ProgressBar.d.ts?argtypes';
import notes from '../../../components/hud/ProgressBar.prompt.md?raw';
import { Row, Col } from '../../kit';

export default {
  title: 'Components/HUD/ProgressBar',
  component: ProgressBar,
  argTypes,
  args: { value: 0.42, label: '42%', width: 220 },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Variants = {
  render: () => (
    <Col gap={20}>
      <Row gap={26}>
        <ProgressBar value={0.42} label="42%" width={220} />
        <ProgressBar value={6} max={20} tone="green" size="lg" label="6/20" width={240} cap={<GameIcon kind="star" size={40} />} />
        <ProgressBar value={0.7} tone="blue" size="sm" striped={false} width={150} />
      </Row>
      <Row gap={26}>
        <ProgressBar value={0.65} tone="teal" track="light" width={200} label="Loading…" />
        <ProgressBar value={0.3} tone="coral" size="md" width={140} label="3/10" cap={<GameIcon kind="heart" size={34} />} />
        <ProgressBar value={0.85} tone="berry" size="md" width={140} label="x2 Boost" />
      </Row>
    </Col>
  ),
};

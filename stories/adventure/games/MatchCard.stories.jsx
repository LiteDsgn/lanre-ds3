import React from 'react';
import { MatchCard } from '../../../components/games/MatchCard';
import argTypes from '../../../components/games/MatchCard.d.ts?argtypes';
import notes from '../../../components/games/MatchCard.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Adventure/Games/MatchCard',
  component: MatchCard,
  argTypes,
  args: { symbol: 'lantern', face: 'up' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Faces = {
  render: () => (
    <Row gap={12}>
      <MatchCard symbol="mango" face="down" />
      <MatchCard symbol="lantern" face="up" />
      <MatchCard symbol="flower" face="matched" />
      <MatchCard symbol="rice" face="up" size={64} />
      <MatchCard symbol="dumbbell" face="down" disabled />
    </Row>
  ),
};

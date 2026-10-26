import React from 'react';
import { Gemstone } from '../../../components/identity/Gemstone';
import argTypes from '../../../components/identity/Gemstone.d.ts?argtypes';
import notes from '../../../components/identity/Gemstone.prompt.md?raw';
import { Row, Col, Note } from '../../kit';

export default {
  title: 'Adventure/Identity/Gemstone',
  component: Gemstone,
  argTypes,
  args: { gem: 'emerald', tier: 2, size: 84, showTier: true },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const AllStones = {
  name: 'All stones (friend-facing)',
  render: () => (
    <Row gap={18} align="flex-end">
      {['amber', 'emerald', 'amethyst'].map(g => [1, 2, 3].map(t => <Gemstone key={g + t} gem={g} tier={t} size={52} showTier />))}
      <Gemstone gem="pearl" size={52} showTier />
    </Row>
  ),
};

export const Decorative = {
  name: "Decorative (the recipient’s surfaces)",
  render: () => (
    <Col>
      <Row gap={18} align="flex-end">
        {['amber', 'emerald', 'amethyst', 'pearl'].map(g => <Gemstone key={g} gem={g} tier={2} size={52} decorative />)}
      </Row>
      <Note>Stone only: no tier, score or rank text, and no accessible label.</Note>
    </Col>
  ),
};

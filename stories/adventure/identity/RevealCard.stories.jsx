import React from 'react';
import { RevealCard } from '../../../components/identity/RevealCard';
import argTypes from '../../../components/identity/RevealCard.d.ts?argtypes';
import notes from '../../../components/identity/RevealCard.prompt.md?raw';
import { Row } from '../../kit';

const ada = { name: 'Ada Okafor', relationship: 'Sister', seed: 'c_01', gem: 'emerald', tier: 2, clue: 'We met over jollof.', width: 220 };

export default {
  title: 'Adventure/Identity/RevealCard',
  component: RevealCard,
  argTypes,
  args: { revealed: false, ...ada, onGemTap: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const MysteryAndRevealed = {
  name: 'Mystery and revealed',
  render: () => (
    <Row gap={24} align="flex-start">
      <RevealCard {...ada} />
      <RevealCard {...ada} revealed />
    </Row>
  ),
};

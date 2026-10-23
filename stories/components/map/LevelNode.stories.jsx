import React from 'react';
import { LevelNode } from '../../../components/map/LevelNode';
import argTypes from '../../../components/map/LevelNode.d.ts?argtypes';
import notes from '../../../components/map/LevelNode.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Map/LevelNode',
  component: LevelNode,
  argTypes,
  args: { number: 4, state: 'current', onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const States = {
  render: () => (
    <Row gap={18} align="flex-end">
      <LevelNode number={1} state="complete" stars={3} onClick={() => {}} />
      <LevelNode number={2} state="complete" stars={2} onClick={() => {}} />
      <LevelNode number={3} state="complete" stars={1} onClick={() => {}} />
      <LevelNode number={4} state="current" onClick={() => {}} />
      <LevelNode number={5} state="locked" />
      <LevelNode number={12} state="locked" size={64} />
    </Row>
  ),
};

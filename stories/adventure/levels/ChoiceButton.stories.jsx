import React from 'react';
import { ChoiceButton } from '../../../components/levels/ChoiceButton';
import argTypes from '../../../components/levels/ChoiceButton.d.ts?argtypes';
import notes from '../../../components/levels/ChoiceButton.prompt.md?raw';
import { Col } from '../../kit';

export default {
  title: 'Adventure/Levels/ChoiceButton',
  component: ChoiceButton,
  argTypes,
  args: { index: 0, state: 'idle', children: 'Ada Okafor' },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 400 }}><Story /></div>],
};

export const Playground = {};

export const States = {
  render: () => (
    <Col gap={10}>
      {['idle', 'selected', 'correct', 'wrong', 'dim'].map((s, i) => <ChoiceButton key={s} index={i % 3} state={s}>{s[0].toUpperCase() + s.slice(1)}</ChoiceButton>)}
    </Col>
  ),
};

import React from 'react';
import { Sticker } from '../../../components/feedback/Sticker';
import argTypes from '../../../components/feedback/Sticker.d.ts?argtypes';
import notes from '../../../components/feedback/Sticker.prompt.md?raw';
import { Row, Col, Note } from '../../kit';

export default {
  title: 'Components/Feedback/Sticker',
  component: Sticker,
  argTypes,
  args: { icon: 'heart', tone: 'berry' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Tones = {
  render: () => (
    <Col>
      <Row gap={12}>
        {['blue', 'teal', 'gold', 'coral', 'berry', 'green', 'stone'].map(t => <Sticker key={t} icon="heart" tone={t} />)}
      </Row>
      <Note>Seven colour families. Each uses its 300, 500 and 700 shades for highlight, face and side.</Note>
    </Col>
  ),
};

export const Weights = {
  render: () => (
    <Row gap={12}>
      <Sticker icon="warning" tone="coral" />
      <Sticker icon="warning" tone="coral" weight="bold" />
    </Row>
  ),
};

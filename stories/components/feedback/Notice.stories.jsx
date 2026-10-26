import React from 'react';
import { Notice } from '../../../components/feedback/Notice';
import argTypes from '../../../components/feedback/Notice.d.ts?argtypes';
import notes from '../../../components/feedback/Notice.prompt.md?raw';
import { Col } from '../../kit';

export default {
  title: 'Components/Feedback/Notice',
  component: Notice,
  argTypes,
  args: { icon: 'envelope-simple', children: 'Your changes are saved as you go.' },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ maxWidth: 380 }}><Story /></div>],
};

export const Playground = {};

export const Tones = {
  render: () => (
    <Col gap={14}>
      <Notice icon="envelope-simple">Your changes are saved as you go.</Notice>
      <Notice tone="warn" icon="warning">That photo is too large. Try one under 10 MB.</Notice>
      <Notice tone="gold" icon="gift">Everything is in. Nicely done.</Notice>
    </Col>
  ),
};

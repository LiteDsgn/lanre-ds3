import React from 'react';
import { Tag } from '../../../components/feedback/Tag';
import argTypes from '../../../components/feedback/Tag.d.ts?argtypes';
import notes from '../../../components/feedback/Tag.prompt.md?raw';
import { Row, Col, Note, Ph } from '../../kit';

export default {
  title: 'Components/Feedback/Tag',
  component: Tag,
  argTypes,
  args: { children: 'Most popular' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Tones = {
  render: () => (
    <Col>
      <Row gap={14}>
        <Tag>Most popular</Tag><Tag tone="teal">3x the value</Tag><Tag tone="gold">New</Tag><Tag tone="blue">Limited</Tag>
        <Tag tone="berry">Premium</Tag><Tag tone="green">Free</Tag><Tag tone="stone" icon={<Ph n="lock" />}>Locked</Tag><Tag tone="wood" size="sm">Event</Tag>
      </Row>
      <Note>Coral for scarcity, teal or green for value, gold for new, berry for premium, stone for locked.</Note>
    </Col>
  ),
};

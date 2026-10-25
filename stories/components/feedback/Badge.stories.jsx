import React from 'react';
import { Badge } from '../../../components/feedback/Badge';
import argTypes from '../../../components/feedback/Badge.d.ts?argtypes';
import notes from '../../../components/feedback/Badge.prompt.md?raw';
import { Row, Col, Note } from '../../kit';

export default {
  title: 'Components/Feedback/Badge',
  component: Badge,
  argTypes,
  args: { count: 3 },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Variants = {
  render: () => (
    <Col>
      <Row gap={14}>
        <Badge /><Badge count={3} /><Badge count={12} tone="blue" /><Badge count="NEW" tone="gold" /><Badge count="!" tone="teal" size="sm" /><Badge count={99} tone="green" pulse />
      </Row>
      <Note>Badges pin to a corner; the parent does the positioning.</Note>
    </Col>
  ),
};

import React from 'react';
import { StarRating } from '../../../components/map/StarRating';
import argTypes from '../../../components/map/StarRating.d.ts?argtypes';
import notes from '../../../components/map/StarRating.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Map/StarRating',
  component: StarRating,
  argTypes,
  args: { value: 3, size: 40, arc: true },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Variants = {
  render: () => (
    <Row gap={28} align="flex-end">
      <StarRating value={3} size={40} arc animate />
      <StarRating value={2} size={22} />
      <StarRating value={0} size={18} />
    </Row>
  ),
};

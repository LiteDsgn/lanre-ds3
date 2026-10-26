import React from 'react';
import { Heading } from '../../../components/text/Heading';
import argTypes from '../../../components/text/Heading.d.ts?argtypes';
import notes from '../../../components/text/Heading.prompt.md?raw';
import { Col } from '../../kit';

/* The outline takes the world's colour, so every story sits on a world's own ground. */
const OnWorld = ({ world, children }) => <div data-world={world} style={{ background: 'var(--world-bg)', padding: 24, borderRadius: 12 }}>{children}</div>;

export default {
  title: 'Components/Text/Heading',
  component: Heading,
  argTypes,
  args: { eyebrow: 'Step 2 of 4', title: 'Pick a spot on the road', lede: 'Choose where your memory should live.' },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <OnWorld world="small_chops"><Story /></OnWorld>],
};

export const Playground = {};

export const TitleOnly = { name: 'Title only', args: { eyebrow: undefined, lede: undefined, title: 'All done' } };

export const Worlds = {
  decorators: [],
  render: () => (
    <Col gap={14}>
      {['mango_grove', 'small_chops', 'good_energy', 'japan'].map(w => (
        <OnWorld key={w} world={w}><Heading title="Pick a spot" lede="Choose where your memory should live." /></OnWorld>
      ))}
    </Col>
  ),
};

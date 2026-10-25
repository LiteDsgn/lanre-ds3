import React from 'react';
import { Button } from '../../../components/buttons/Button';
import argTypes from '../../../components/buttons/Button.d.ts?argtypes';
import notes from '../../../components/buttons/Button.prompt.md?raw';
import { Row, Ph } from '../../kit';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes,
  args: { children: 'Claim' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Tones = {
  render: () => (
    <Row>
      {['primary', 'play', 'confirm', 'danger', 'premium', 'wood', 'ghost'].map(v => <Button key={v} variant={v}>{v}</Button>)}
      <Button disabled>Locked</Button>
    </Row>
  ),
};

export const SizesAndContent = {
  name: 'Sizes and content',
  render: () => (
    <Row>
      <Button size="sm" variant="confirm">OK</Button>
      <Button size="md" variant="play" icon={<Ph n="play" />} typeface="ui">Level 22</Button>
      <Button size="lg">Claim</Button>
      <Button variant="premium" pill typeface="ui" trailing={<span style={{ opacity: .85 }}>USD 3.99</span>}>3,000 coins</Button>
    </Row>
  ),
};

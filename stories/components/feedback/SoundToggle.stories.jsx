import React from 'react';
import { useArgs } from 'storybook/preview-api';
import { SoundToggle } from '../../../components/feedback/SoundToggle';
import argTypes from '../../../components/feedback/SoundToggle.d.ts?argtypes';
import notes from '../../../components/feedback/SoundToggle.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Feedback/SoundToggle',
  component: SoundToggle,
  argTypes,
  args: { on: true },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {
  render: function Render(args) {
    const [, update] = useArgs();
    return <SoundToggle {...args} onChange={on => update({ on })} />;
  },
};

export const Variants = {
  render: () => (
    <Row gap={16}>
      <SoundToggle on />
      <SoundToggle on={false} />
      <SoundToggle on tone="light" size="sm" />
      <SoundToggle on={false} tone="light" size="sm" />
    </Row>
  ),
};

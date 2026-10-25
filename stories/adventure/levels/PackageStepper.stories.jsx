import React from 'react';
import { useArgs } from 'storybook/preview-api';
import { PackageStepper } from '../../../components/levels/PackageStepper';
import argTypes from '../../../components/levels/PackageStepper.d.ts?argtypes';
import notes from '../../../components/levels/PackageStepper.prompt.md?raw';

export default {
  title: 'Adventure/Levels/PackageStepper',
  component: PackageStepper,
  argTypes,
  args: { items: [{ type: 'text' }, { type: 'photo' }, { type: 'audio' }, { type: 'video' }], current: 2, seen: [0, 1], onDark: true },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {
  render: function Render(args) {
    const [, update] = useArgs();
    return <PackageStepper {...args} onSelect={current => update({ current })} />;
  },
};

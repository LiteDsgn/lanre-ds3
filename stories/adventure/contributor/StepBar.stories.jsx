import React from 'react';
import { useArgs } from 'storybook/preview-api';
import { StepBar } from '../../../components/contributor/StepBar';
import argTypes from '../../../components/contributor/StepBar.d.ts?argtypes';
import notes from '../../../components/contributor/StepBar.prompt.md?raw';

export default {
  title: 'Adventure/Contributor/StepBar',
  component: StepBar,
  argTypes,
  args: { steps: ['You', 'Memory', 'Theme', 'Preview', 'Submit'], current: 1 },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 358 }}><Story /></div>],
};

export const Playground = {
  render: function Render(args) {
    const [, update] = useArgs();
    return <StepBar {...args} onSelect={current => update({ current })} />;
  },
};

export const Compact = { ...Playground, args: { compact: true } };

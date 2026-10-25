import React from 'react';
import { StepBar } from '../../../components/contributor/StepBar';
import argTypes from '../../../components/contributor/StepBar.d.ts?argtypes';
import notes from '../../../components/contributor/StepBar.prompt.md?raw';

export default {
  title: 'Adventure/Contributor/StepBar',
  component: StepBar,
  argTypes,
  args: { steps: ['You', 'Memories', 'Preview', 'Submit'], current: 1 },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 358, display: 'grid', justifyItems: 'center' }}><Story /></div>],
};

// Keyed on the step, so moving current forward in the controls celebrates.
export const Playground = { render: args => <StepBar key={args.current} {...args} /> };

export const WithLabels = { ...Playground, args: { steps: ['Where', 'Who', 'Write', 'Details'], current: 2, labels: true } };

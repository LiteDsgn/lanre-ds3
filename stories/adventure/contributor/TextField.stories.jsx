import React from 'react';
import { useArgs } from 'storybook/preview-api';
import { TextField } from '../../../components/contributor/TextField';
import argTypes from '../../../components/contributor/TextField.d.ts?argtypes';
import notes from '../../../components/contributor/TextField.prompt.md?raw';

export default {
  title: 'Adventure/Contributor/TextField',
  component: TextField,
  argTypes,
  args: { label: 'The name Lanre knows you by', value: 'Ada Okafor', helper: 'Shown to her only after the reveal.' },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 358 }}><Story /></div>],
  render: function Render(args) {
    const [, update] = useArgs();
    return <TextField {...args} onChange={value => update({ value })} />;
  },
};

export const Playground = {};

export const Multiline = {
  args: { label: 'Your memory', multiline: true, rows: 3, value: '', maxLength: 2000, placeholder: "Tell it the way you'd tell her.", helper: undefined },
};

export const WithError = {
  name: 'With error',
  args: { value: '', error: 'Add the name she knows you by.', helper: undefined },
};

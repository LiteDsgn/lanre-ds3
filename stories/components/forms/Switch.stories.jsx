import React from 'react';
import { useArgs } from 'storybook/preview-api';
import { Switch } from '../../../components/forms/Switch';
import argTypes from '../../../components/forms/Switch.d.ts?argtypes';
import notes from '../../../components/forms/Switch.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
  argTypes,
  args: { checked: true, label: 'Sound' },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
};

export const Playground = {
  render: function Render(args) {
    const [, update] = useArgs();
    return <Switch {...args} onChange={checked => update({ checked })} />;
  },
};

export const Variants = {
  render: () => (
    <Row gap={20}>
      <Switch checked label="Sound" />
      <Switch checked={false} label="Vibration" tone="blue" />
      <Switch checked size="sm" tone="gold" label="Notifications" />
      <Switch checked={false} disabled label="Disabled" />
    </Row>
  ),
};

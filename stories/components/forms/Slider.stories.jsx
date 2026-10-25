import React from 'react';
import { useArgs } from 'storybook/preview-api';
import { Slider } from '../../../components/forms/Slider';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/forms/Slider.d.ts?argtypes';
import notes from '../../../components/forms/Slider.prompt.md?raw';
import { Col } from '../../kit';

export default {
  title: 'Components/Forms/Slider',
  component: Slider,
  argTypes,
  args: { value: 70, label: 'Music', icon: <GameIcon kind="music" size={28} />, width: 320 },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
};

export const Playground = {
  render: function Render(args) {
    const [, update] = useArgs();
    return <Slider {...args} onChange={value => update({ value })} />;
  },
};

export const Tones = {
  render: () => (
    <Col gap={12} style={{ width: 320 }}>
      <Slider value={70} icon={<GameIcon kind="music" size={28} />} label="Music" width="100%" />
      <Slider value={45} tone="teal" icon={<GameIcon kind="sound" tone="teal" size={28} />} label="Effects" width="100%" />
      <Slider value={30} tone="gold" icon={<GameIcon kind="sparkle" size={28} />} width="100%" disabled />
    </Col>
  ),
};

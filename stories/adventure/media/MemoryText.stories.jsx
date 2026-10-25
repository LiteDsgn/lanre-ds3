import React from 'react';
import { MemoryText } from '../../../components/media/MemoryText';
import argTypes from '../../../components/media/MemoryText.d.ts?argtypes';
import notes from '../../../components/media/MemoryText.prompt.md?raw';

export default {
  title: 'Adventure/Media/MemoryText',
  component: MemoryText,
  argTypes: { ...argTypes, children: { ...argTypes.children, control: false } },
  args: {
    size: 'md',
    style: { width: 360 },
    children: (
      <>
        <p>Fixture text: the first time we cooked together you insisted the rice needed “just five more minutes” four times in a row.</p>
        <p>It was perfect, obviously.</p>
      </>
    ),
  },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

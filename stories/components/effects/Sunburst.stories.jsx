import React from 'react';
import { Sunburst } from '../../../components/effects/Sunburst';
import argTypes from '../../../components/effects/Sunburst.d.ts?argtypes';
import notes from '../../../components/effects/Sunburst.prompt.md?raw';

/* It's SVG, so every story draws it inside an svg, over a dusk sky with a sun to sit behind. */
const Sky = ({ children }) => (
  <svg viewBox="0 0 400 240" width="100%" style={{ maxWidth: 480, display: 'block', borderRadius: 12, background: 'linear-gradient(180deg, #40306f, #9a5d8f)' }}>
    {children}
    <circle cx="200" cy="120" r="22" fill="#ffd84d" />
  </svg>
);

export default {
  title: 'Components/Effects/Sunburst',
  component: Sunburst,
  argTypes,
  args: { x: 200, y: 120, radius: 260, rays: 14, color: '#fff3c4', opacity: 0.34, duration: 90 },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <Sky><Story /></Sky>],
};

export const Playground = {};

export const Once = { args: { motion: 'once', duration: 3, rays: 10 } };

export const Still = { args: { motion: 'still', rays: 24, opacity: 0.2 } };

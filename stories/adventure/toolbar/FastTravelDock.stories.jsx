import { useState } from 'react';
import { FastTravelDock } from '../../../components/toolbar/FastTravelDock';
import argTypes from '../../../components/toolbar/FastTravelDock.d.ts?argtypes';
import notes from '../../../components/toolbar/FastTravelDock.prompt.md?raw';
import { Screen } from '../../kit';

const stops = [
  { id: 'summit', name: 'The Summit', label: 'Summit', glyph: 'flag-banner', state: 'ahead', hidden: 0, ariaLabel: 'The Summit' },
  { id: 'japan', name: 'Someday in Japan', label: 'Japan', glyph: 'lamp-pendant', state: 'ahead', hidden: 1, ariaLabel: 'Someday in Japan, 1 surprise still hidden' },
  { id: 'energy', name: 'The Good Energy Hills', label: 'Good Energy', glyph: 'barbell', state: 'here', hidden: 0, ariaLabel: 'The Good Energy Hills, you are here' },
  { id: 'chops', name: 'Small Chops, Big Gist', label: 'Small Chops', glyph: 'bowl-food', state: 'done', hidden: 2, ariaLabel: 'Small Chops, Big Gist, done, 2 surprises still hidden' },
  { id: 'mango', name: 'Mango Grove', label: 'Mango Grove', glyph: 'orange', state: 'done', hidden: 0, ariaLabel: 'Mango Grove, done' },
];

export default {
  title: 'Adventure/Toolbar/FastTravelDock',
  component: FastTravelDock,
  argTypes,
  args: { stops, contained: true, onCompass: () => {}, onTravel: () => {} },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <Screen width="100%" height={560} style={{ background: 'var(--bg-meadow)' }}><Story /></Screen>],
};

export const Playground = {};

/* Folded into the compass until it's tapped. */
export const Phone = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <FastTravelDock {...args} phone open={open} hiddenTotal={3} onCompass={() => setOpen(o => !o)} onClose={() => setOpen(false)} onNext={() => setOpen(false)} onTravel={() => setOpen(false)} />;
  },
};

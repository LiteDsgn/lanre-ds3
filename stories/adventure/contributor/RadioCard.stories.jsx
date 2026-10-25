import React, { useState } from 'react';
import { RadioCard } from '../../../components/contributor/RadioCard';
import { Avatar } from '../../../components/identity/Avatar';
import argTypes from '../../../components/contributor/RadioCard.d.ts?argtypes';
import notes from '../../../components/contributor/RadioCard.prompt.md?raw';

export default {
  title: 'Adventure/Contributor/RadioCard',
  component: RadioCard,
  argTypes,
  args: { checked: true, media: <Avatar mystery size={72} aria-hidden="true" />, title: 'Keeps me a mystery', description: 'No face, name or voice in here.' },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 172, display: 'grid' }}><Story /></div>],
};

export const Playground = {};

export const Pair = {
  decorators: [Story => <div style={{ width: 340 }}><Story /></div>],
  render: function Render() {
    const [reveals, setReveals] = useState(false);
    return (
      <div role="radiogroup" aria-label="Does this memory show who you are?" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-3)' }}>
        <RadioCard checked={!reveals} onChange={() => setReveals(false)} media={<Avatar mystery size={72} aria-hidden="true" />} title="Keeps me a mystery" description="No face, name or voice in here." />
        <RadioCard checked={reveals} onChange={() => setReveals(true)} media={<Avatar name="Ada Okafor" size={72} alt="" aria-hidden="true" />} title="Shows who I am" description="Skip the guessing for this one." />
      </div>
    );
  },
};

import React, { useState } from 'react';
import { RadioCard } from '../../../components/contributor/RadioCard';
import { Avatar } from '../../../components/identity/Avatar';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/contributor/RadioCard.d.ts?argtypes';
import notes from '../../../components/contributor/RadioCard.prompt.md?raw';

export default {
  title: 'Adventure/Contributor/RadioCard',
  component: RadioCard,
  argTypes,
  args: { checked: true, icon: <Avatar mystery size={40} />, title: 'Keeps me a mystery', description: 'No face, name or voice in here.' },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 290 }}><Story /></div>],
};

export const Playground = {};

export const Group = {
  render: function Render() {
    const [reveals, setReveals] = useState(false);
    return (
      <div role="radiogroup" aria-label="Does this package show who you are?" style={{ display: 'grid', gap: 10 }}>
        <RadioCard checked={!reveals} onChange={() => setReveals(false)} icon={<Avatar mystery size={40} />} title="Keeps me a mystery" description="No face, name or voice in here." />
        <RadioCard checked={reveals} onChange={() => setReveals(true)} tone="gold" icon={<GameIcon kind="sparkle" size={36} />} title="Shows who I am" description="Skip the guessing for this one." />
      </div>
    );
  },
};

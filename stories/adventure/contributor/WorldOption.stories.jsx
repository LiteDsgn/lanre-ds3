import { useState } from 'react';
import { WorldOption } from '../../../components/contributor/WorldOption';
import argTypes from '../../../components/contributor/WorldOption.d.ts?argtypes';
import notes from '../../../components/contributor/WorldOption.prompt.md?raw';

export default {
  title: 'Adventure/Contributor/WorldOption',
  component: WorldOption,
  argTypes,
  args: { world: 'small_chops', checked: true },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 340 }}><Story /></div>],
};

export const Playground = {};

export const Picker = {
  render: function Render() {
    const [chosen, setChosen] = useState('japan');
    return (
      <div role="radiogroup" aria-label="Where on the road?" style={{ display: 'grid', gap: 10 }}>
        {['mango_grove', 'small_chops', 'good_energy', 'japan'].map(w => <WorldOption key={w} world={w} checked={chosen === w} onChange={() => setChosen(w)} />)}
      </div>
    );
  },
};

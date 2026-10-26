import { useState } from 'react';
import { WorldSign } from '../../../components/contributor/WorldSign';
import { WorldSigns } from '../../../components/contributor/WorldSigns';
import { Tag } from '../../../components/feedback/Tag';
import argTypes from '../../../components/contributor/WorldSign.d.ts?argtypes';
import notes from '../../../components/contributor/WorldSign.prompt.md?raw';

export default {
  title: 'Adventure/Contributor/WorldSign',
  component: WorldSign,
  argTypes,
  args: { world: 'small_chops', number: 2, selected: false },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div data-world="base_camp" style={{ width: 350 }}><Story /></div>],
};

export const Playground = {};

export const Selected = { args: { selected: true } };

export const Locked = { args: { locked: true, name: 'The Summit', blurb: 'The author’s letter', number: undefined } };

/* Signs hung over one road, with a number each, one marked as the friend's stop, and the summit locked. */
export const OnARoad = {
  render: function Render() {
    const [chosen, setChosen] = useState('small_chops');
    return (
      <WorldSigns label="Where on the road">
        {['mango_grove', 'small_chops', 'good_energy', 'japan'].map((w, i) => (
          <WorldSign key={w} world={w} number={i + 1} selected={chosen === w} onClick={() => setChosen(w)}
            badge={w === 'mango_grove' ? <Tag tone="gold" size="sm" icon={<i className="ph-fill ph-star" aria-hidden="true" />}>Your stop</Tag> : undefined} />
        ))}
        <WorldSign locked name="The Summit" blurb="The author’s letter" />
      </WorldSigns>
    );
  },
};

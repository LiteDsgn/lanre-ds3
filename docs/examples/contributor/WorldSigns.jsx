'use client';
import { useState } from 'react';
import { WorldSign } from '@ds/contributor/WorldSign';
import { WorldSigns } from '@ds/contributor/WorldSigns';
import { Tag } from '@ds/feedback/Tag';

const worlds = ['mango_grove', 'small_chops', 'good_energy', 'japan'];

export default function WorldSignsExample() {
  const [chosen, setChosen] = useState('small_chops');
  return (
    <div data-world="base_camp" style={{ width: 350 }}>
      <WorldSigns label="Where on the road">
        {worlds.map((w, i) => (
          <WorldSign key={w} world={w} number={i + 1} selected={chosen === w} onClick={() => setChosen(w)}
            badge={w === 'mango_grove' ? <Tag tone="gold" size="sm" icon={<i className="ph-fill ph-star" aria-hidden="true" />}>Your stop</Tag> : undefined} />
        ))}
        <WorldSign locked name="The Summit" blurb="The author’s letter" />
      </WorldSigns>
    </div>
  );
}

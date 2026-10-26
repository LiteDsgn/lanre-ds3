'use client';
import { useState } from 'react';
import { WorldSign } from '@ds/contributor/WorldSign';

export default function WorldSignExample() {
  const [selected, setSelected] = useState(true);
  return (
    <div data-world="base_camp" style={{ width: 340, display: 'grid', gap: 26, paddingTop: 6 }}>
      <WorldSign world="small_chops" number={2} selected={selected} onClick={() => setSelected(s => !s)} />
      <WorldSign locked name="The Summit" blurb="The author’s letter" />
    </div>
  );
}

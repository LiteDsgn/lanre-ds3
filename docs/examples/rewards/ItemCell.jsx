'use client';
import { useState } from 'react';
import { ItemCell } from '@ds/rewards/ItemCell';
import { GameIcon } from '@ds/icons/GameIcon';
import { Row } from '@stories/kit';

const items = [['egg', 1], ['leaf', 4], ['fire', 6], ['gem', 2]];

export default function ItemCellExample() {
  const [selected, setSelected] = useState(0);
  return (
    <Row gap={8}>
      {items.map(([kind, count], i) => (
        <ItemCell key={kind} state="filled" content={<GameIcon kind={kind} size={44} />} count={count} selected={selected === i} dim={kind === 'fire'} onClick={() => setSelected(i)} />
      ))}
      <ItemCell state="empty" />
      <ItemCell state="locked" />
      <ItemCell state="add" onClick={() => {}} label="Buy slot" />
      <ItemCell state="filled" size={56} content={<GameIcon kind="key" size={32} />} count={9} />
    </Row>
  );
}

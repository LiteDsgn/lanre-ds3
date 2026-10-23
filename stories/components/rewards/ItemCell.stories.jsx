import React from 'react';
import { ItemCell } from '../../../components/rewards/ItemCell';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/rewards/ItemCell.d.ts?argtypes';
import notes from '../../../components/rewards/ItemCell.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Rewards/ItemCell',
  component: ItemCell,
  argTypes,
  args: { state: 'filled', content: <GameIcon kind="egg" size={44} />, count: 1, selected: true, onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const States = {
  render: () => (
    <Row gap={8}>
      <ItemCell state="filled" content={<GameIcon kind="egg" size={44} />} count={1} selected onClick={() => {}} />
      <ItemCell state="filled" content={<GameIcon kind="leaf" size={44} />} count={4} />
      <ItemCell state="filled" content={<GameIcon kind="fire" size={44} />} count={6} dim />
      <ItemCell state="filled" content={<GameIcon kind="gem" size={44} />} count={2} />
      <ItemCell state="empty" />
      <ItemCell state="locked" />
      <ItemCell state="add" onClick={() => {}} label="Buy slot" />
      <ItemCell state="filled" size={56} content={<GameIcon kind="key" size={32} />} count={9} />
    </Row>
  ),
};

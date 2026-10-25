import React from 'react';
import { Tile } from '../../../components/map/Tile';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/map/Tile.d.ts?argtypes';
import notes from '../../../components/map/Tile.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Map/Tile',
  component: Tile,
  argTypes,
  args: { variant: 'reward', content: <GameIcon kind="coin" size={30} />, active: true, label: 'Coin', onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Variants = {
  render: () => (
    <Row gap={12} align="flex-start">
      <Tile variant="grass" />
      <Tile variant="sand" content="?" />
      <Tile variant="stone" content={<GameIcon kind="lock" size={26} />} />
      <Tile variant="water" />
      <Tile variant="reward" content={<GameIcon kind="coin" size={30} />} active onClick={() => {}} label="Coin" />
      <Tile variant="hazard" content={<GameIcon name="skull" tone="white" size={28} />} />
      <Tile variant="start" content="GO" />
      <Tile variant="sand" size={48} content="5" />
      <Tile variant="grass" size={48} content={<GameIcon kind="gem" size={22} />} />
    </Row>
  ),
};

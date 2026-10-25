import React from 'react';
import { RewardCard } from '../../../components/rewards/RewardCard';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/rewards/RewardCard.d.ts?argtypes';
import notes from '../../../components/rewards/RewardCard.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Rewards/RewardCard',
  component: RewardCard,
  argTypes,
  args: { title: 'Day 3', icon: <GameIcon kind="gift" size={40} />, state: 'available', onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Calendar = {
  render: () => (
    <Row gap={10} align="stretch">
      <RewardCard title="Day 1" icon={<GameIcon kind="coin" size={40} />} amount="+1M" state="claimed" />
      <RewardCard title="Day 2" icon={<GameIcon kind="coin" size={40} />} amount="+5M" state="claimed" />
      <RewardCard title="Day 3" icon={<GameIcon kind="gift" size={40} />} state="available" onClick={() => {}} />
      <RewardCard title="Day 4" icon={<GameIcon kind="ticket" size={40} />} amount="+100" state="locked" />
      <RewardCard title="Day 5" icon={<GameIcon kind="gem" size={40} />} amount="+10" state="locked" />
      <RewardCard title="Day 7" featured width={230} icon={<GameIcon kind="heart" size={40} />} amount="+50" state="locked" />
    </Row>
  ),
};

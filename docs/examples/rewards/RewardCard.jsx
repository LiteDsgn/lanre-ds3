'use client';
import { RewardCard } from '@ds/rewards/RewardCard';
import { GameIcon } from '@ds/icons/GameIcon';
import { Row } from '@stories/kit';

export default function RewardCardExample() {
  return (
    <Row gap={10} align="stretch">
      <RewardCard title="Day 1" icon={<GameIcon kind="coin" size={40} />} amount="+1M" state="claimed" />
      <RewardCard title="Day 2" icon={<GameIcon kind="coin" size={40} />} amount="+5M" state="claimed" />
      <RewardCard title="Day 3" icon={<GameIcon kind="gift" size={40} />} state="available" onClick={() => {}} />
      <RewardCard title="Day 4" icon={<GameIcon kind="ticket" size={40} />} amount="+100" state="locked" />
      <RewardCard title="Day 5" icon={<GameIcon kind="gem" size={40} />} amount="+10" state="locked" />
      <RewardCard title="Day 7" featured width={230} icon={<GameIcon kind="heart" size={40} />} amount="+50" state="locked" />
    </Row>
  );
}

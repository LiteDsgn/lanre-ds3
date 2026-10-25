'use client';
import { Toast } from '@ds/feedback/Toast';
import { GameIcon } from '@ds/icons/GameIcon';
import { Row } from '@stories/kit';

export default function ToastExample() {
  return (
    <Row gap={16}>
      <Toast icon={<GameIcon kind="coin" size={32} />} message="+50" detail="Coins collected" />
      <Toast icon={<GameIcon kind="heart" size={32} />} message="Life restored" tone="coral" />
      <Toast icon={<GameIcon kind="check" size={28} tone="teal" />} message="Saved" tone="teal" />
    </Row>
  );
}

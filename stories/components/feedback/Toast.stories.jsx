import React from 'react';
import { Toast } from '../../../components/feedback/Toast';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/feedback/Toast.d.ts?argtypes';
import notes from '../../../components/feedback/Toast.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Feedback/Toast',
  component: Toast,
  argTypes,
  args: { icon: <GameIcon kind="coin" size={32} />, message: '+50', detail: 'Coins collected' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Tones = {
  render: () => (
    <Row gap={16}>
      <Toast icon={<GameIcon kind="coin" size={32} />} message="+50" detail="Coins collected" />
      <Toast icon={<GameIcon kind="heart" size={32} />} message="Life restored" tone="coral" />
      <Toast icon={<GameIcon kind="check" size={28} tone="teal" />} message="Saved" tone="teal" />
    </Row>
  ),
};

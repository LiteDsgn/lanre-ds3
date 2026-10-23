import React from 'react';
import { CurrencyPill } from '../../../components/hud/CurrencyPill';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/hud/CurrencyPill.d.ts?argtypes';
import notes from '../../../components/hud/CurrencyPill.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/HUD/CurrencyPill',
  component: CurrencyPill,
  argTypes,
  args: { kind: 'coin', value: '50,253k' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Kinds = {
  render: () => (
    <Row gap={26}>
      <CurrencyPill kind="coin" value="50,253k" onAdd={() => {}} />
      <CurrencyPill kind="gem" value={36} onAdd={() => {}} />
      <CurrencyPill kind="heart" value="5/5" />
      <CurrencyPill kind="energy" value={32} size="sm" />
      <CurrencyPill kind="star" value={23} size="sm" />
      <CurrencyPill kind="coin" value="1,240" tone="light" />
      <CurrencyPill icon={<GameIcon kind="chest" size={40} />} value="3/3" />
    </Row>
  ),
};

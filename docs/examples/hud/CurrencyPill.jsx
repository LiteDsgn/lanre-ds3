'use client';
import { CurrencyPill } from '@ds/hud/CurrencyPill';
import { GameIcon } from '@ds/icons/GameIcon';
import { Row } from '@stories/kit';

export default function CurrencyPillExample() {
  return (
    <Row gap={26}>
      <CurrencyPill kind="coin" value="50,253k" onAdd={() => {}} />
      <CurrencyPill kind="gem" value={36} onAdd={() => {}} />
      <CurrencyPill kind="heart" value="5/5" />
      <CurrencyPill kind="energy" value={32} size="sm" />
      <CurrencyPill kind="star" value={23} size="sm" />
      <CurrencyPill kind="coin" value="1,240" tone="light" />
      <CurrencyPill icon={<GameIcon kind="chest" size={40} />} value="3/3" />
    </Row>
  );
}

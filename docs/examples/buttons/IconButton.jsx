'use client';
import { IconButton } from '@ds/buttons/IconButton';
import { Row, Ph } from '@stories/kit';

export default function IconButtonExample() {
  return (
    <Row align="flex-start">
      <IconButton variant="danger" size="sm"><Ph n="x" weight="bold" /></IconButton>
      <IconButton variant="ghost"><Ph n="gear" /></IconButton>
      <IconButton variant="confirm"><Ph n="plus" weight="bold" /></IconButton>
      <IconButton variant="play" size="lg" badge><Ph n="gift" /></IconButton>
      <IconButton variant="primary" shape="square" label="Shop"><Ph n="storefront" /></IconButton>
      <IconButton variant="play" shape="square" label="Quests" badge={3}><Ph n="clipboard-text" /></IconButton>
      <IconButton variant="wood" shape="square" label="Map"><Ph n="map-trifold" /></IconButton>
      <IconButton disabled shape="square" label="Locked"><Ph n="lock" /></IconButton>
    </Row>
  );
}

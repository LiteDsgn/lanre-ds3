'use client';
import { Tag } from '@ds/feedback/Tag';
import { Row, Ph } from '@stories/kit';

export default function TagExample() {
  return (
    <Row gap={14}>
      <Tag>Most popular</Tag><Tag tone="teal">3x the value</Tag><Tag tone="gold">New</Tag><Tag tone="blue">Limited</Tag>
      <Tag tone="berry">Premium</Tag><Tag tone="green">Free</Tag><Tag tone="stone" icon={<Ph n="lock" />}>Locked</Tag><Tag tone="wood" size="sm">Event</Tag>
    </Row>
  );
}

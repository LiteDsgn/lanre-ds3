import React from 'react';
import { ShopRow } from '../../../components/rewards/ShopRow';
import { Tag } from '../../../components/feedback/Tag';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/rewards/ShopRow.d.ts?argtypes';
import notes from '../../../components/rewards/ShopRow.prompt.md?raw';
import { Row, Col } from '../../kit';

export default {
  title: 'Components/Rewards/ShopRow',
  component: ShopRow,
  argTypes,
  args: { tone: 'featured', icon: <GameIcon kind="coins" size={48} />, title: '3,000 coins', subtitle: 'One-time offer', price: 'USD 3.99', tag: <Tag tone="gold">3x the value</Tag> },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Rows = {
  render: () => (
    <Col gap={14}>
      <ShopRow tone="featured" icon={<GameIcon kind="coins" size={48} />} title="3,000 coins" subtitle="One-time offer" price="USD 3.99" tag={<Tag tone="gold">3x the value</Tag>} />
      <Row gap={14} align="stretch">
        <ShopRow style={{ flex: 1, minWidth: 300 }} icon={<GameIcon kind="coin" size={44} />} title="2,720 coins" price="USD 0.99" tag={<Tag>Most popular</Tag>} />
        <ShopRow style={{ flex: 1, minWidth: 300 }} icon={<GameIcon name="prohibit" tone="berry" size={44} />} title="No ads" subtitle="Rewarded videos still available" price="USD 0.99" />
      </Row>
    </Col>
  ),
};

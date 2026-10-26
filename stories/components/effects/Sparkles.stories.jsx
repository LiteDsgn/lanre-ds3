import React from 'react';
import { Sparkles } from '../../../components/effects/Sparkles';
import { Notice } from '../../../components/feedback/Notice';
import notes from '../../../components/effects/Sparkles.prompt.md?raw';

export default {
  title: 'Components/Effects/Sparkles',
  component: Sparkles,
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {
  render: () => (
    <div style={{ position: 'relative', maxWidth: 380, margin: '36px auto 24px' }}>
      <Sparkles />
      <Notice tone="gold" icon="gift">Everything is in. Nicely done.</Notice>
    </div>
  ),
};

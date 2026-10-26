'use client';
import { Sparkles } from '@ds/effects/Sparkles';
import { Notice } from '@ds/feedback/Notice';

export default function SparklesExample() {
  return (
    <div style={{ position: 'relative', maxWidth: 380, margin: '36px auto 24px' }}>
      <Sparkles />
      <Notice tone="gold" icon="gift">Everything is in. Nicely done.</Notice>
    </div>
  );
}

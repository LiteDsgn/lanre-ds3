'use client';
import { Sunburst } from '@ds/effects/Sunburst';

export default function SunburstExample() {
  return (
    <svg viewBox="0 0 400 240" width="100%" style={{ maxWidth: 480, display: 'block', margin: '0 auto', borderRadius: 12, background: 'linear-gradient(180deg, #40306f, #9a5d8f)' }}>
      <Sunburst x={200} y={120} radius={260} rays={14} color="#fff3c4" opacity={0.34} duration={90} />
      <circle cx="200" cy="120" r="22" fill="#ffd84d" />
    </svg>
  );
}

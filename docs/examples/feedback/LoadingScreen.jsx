'use client';
import { LoadingScreen } from '@ds/feedback/LoadingScreen';

export default function LoadingScreenExample() {
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden' }}>
      <LoadingScreen title="The Birthday Adventure" style={{ minHeight: 400 }} />
    </div>
  );
}

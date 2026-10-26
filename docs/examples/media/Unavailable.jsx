'use client';
import { Unavailable } from '@ds/media/Unavailable';

export default function UnavailableExample() {
  return (
    <div style={{ width: 360, display: 'grid', gap: 10 }}>
      <Unavailable what="photo" onRetry={() => {}} />
      <Unavailable what="voice note" onRetry={() => {}} />
    </div>
  );
}

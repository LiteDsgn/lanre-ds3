'use client';
import { useState } from 'react';
import { ViewerKeys } from '@ds/viewer/ViewerKeys';

const pieces = [{ icon: 'quotes', label: 'Message' }, { icon: 'images', label: '3 photos' }, { icon: 'microphone', label: 'Voice note', meta: '0:42' }, { icon: 'video-camera', label: 'Video', meta: '1:05' }];

export default function ViewerKeysExample() {
  const [at, setAt] = useState(0);
  const [seen, setSeen] = useState(new Set([0]));
  const go = i => { setAt(i); setSeen(s => new Set(s).add(i)); };
  return (
    <div style={{ width: 380, padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))', boxShadow: '0 6px 0 var(--wood-900)' }}>
      <ViewerKeys pieces={pieces.map((p, i) => ({ ...p, seen: i !== at && seen.has(i) }))} at={at} onSelect={go} />
    </div>
  );
}

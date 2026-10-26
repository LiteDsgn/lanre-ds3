'use client';
import { useState } from 'react';
import { ClueTab } from '@ds/viewer/ClueTab';

export default function ClueTabExample() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))', boxShadow: '0 6px 0 var(--wood-900)' }}>
      <ClueTab open={open} onClick={() => setOpen(o => !o)} />
    </div>
  );
}

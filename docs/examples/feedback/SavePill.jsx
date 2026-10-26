'use client';
import { useState } from 'react';
import { SavePill } from '@ds/feedback/SavePill';
import { Button } from '@ds/buttons/Button';
import { Row } from '@stories/kit';

const ORDER = ['saved', 'saving', 'error'];

export default function SavePillExample() {
  const [status, setStatus] = useState('saved');
  return (
    <Row gap={18}>
      <SavePill status={status} />
      <Button size="sm" variant="ghost" onClick={() => setStatus(s => ORDER[(ORDER.indexOf(s) + 1) % ORDER.length])}>Now: {status}</Button>
    </Row>
  );
}

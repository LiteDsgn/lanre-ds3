'use client';
import { useState } from 'react';
import { SoundToggle } from '@ds/feedback/SoundToggle';
import { Row } from '@stories/kit';

export default function SoundToggleExample() {
  const [on, setOn] = useState(true);
  const [light, setLight] = useState(false);
  return (
    <Row gap={16}>
      <SoundToggle on={on} onChange={setOn} />
      <SoundToggle on={light} onChange={setLight} tone="light" size="sm" />
    </Row>
  );
}

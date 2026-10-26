'use client';
import { useMemo } from 'react';
import { Cassette } from '@ds/media/Cassette';
import { Screen } from '@stories/kit';
import { sampleTone } from '@stories/sample-media';

export default function CassetteExample() {
  const src = useMemo(() => sampleTone(4), []);
  return (
    <Screen width={360} height={300} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Cassette src={src} duration={4} heading="A voice note" hint="Tap play when you're ready" />
    </Screen>
  );
}

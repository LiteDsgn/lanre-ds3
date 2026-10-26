'use client';
import { Film } from '@ds/media/Film';
import { Screen } from '@stories/kit';
import { sampleClip } from '@stories/sample-media';

export default function FilmExample() {
  return (
    <Screen width={360} height={300} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Film src={sampleClip} caption="The party" width={160} height={90} />
    </Screen>
  );
}

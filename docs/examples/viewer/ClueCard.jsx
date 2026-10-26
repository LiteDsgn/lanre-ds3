'use client';
import { ClueCard } from '@ds/viewer/ClueCard';
import { Screen } from '@stories/kit';

export default function ClueCardExample() {
  return (
    <Screen width={340} height={220} style={{ background: 'oklch(0.2 0.05 60)' }}>
      <ClueCard clue="It was raining that day." onClick={() => {}} />
    </Screen>
  );
}

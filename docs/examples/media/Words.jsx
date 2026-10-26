'use client';
import { useState } from 'react';
import { Words } from '@ds/media/Words';
import { Button } from '@ds/buttons/Button';
import { Screen } from '@stories/kit';

const short = 'Happy birthday, you. I hope today is gentle and loud in all the right places.';
const long = 'We met at the bus stop and talked about mangoes for an hour.\n\nYou insisted the rice needed just five more minutes, four times in a row, and every time it was perfect.\n\nI still think about that evening when the power went out and we ate by phone light, laughing at how the whole street went quiet at once.\n\nThank you for all of it.';

export default function WordsExample() {
  const [run, setRun] = useState(0);
  return (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
        <Screen width={540} height={260}><Words key={run} text={short} typed={false} label="Their message" /></Screen>
        <Button size="sm" variant="ghost" onClick={() => setRun(n => n + 1)}>Type it again</Button>
      </div>
      <Screen width={540} height={260}><Words text={long} typed label="Their message" /></Screen>
    </div>
  );
}

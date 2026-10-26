'use client';
import { useState } from 'react';
import { FastTravelDock } from '@ds/toolbar/FastTravelDock';
import { Screen } from '@stories/kit';

const stops = [
  { id: 'summit', name: 'The Summit', label: 'Summit', glyph: 'flag-banner', state: 'ahead', hidden: 0, ariaLabel: 'The Summit' },
  { id: 'japan', name: 'Someday in Japan', label: 'Japan', glyph: 'lamp-pendant', state: 'ahead', hidden: 1, ariaLabel: 'Someday in Japan, 1 surprise still hidden' },
  { id: 'energy', name: 'The Good Energy Hills', label: 'Good Energy', glyph: 'barbell', state: 'here', hidden: 0, ariaLabel: 'The Good Energy Hills, you are here' },
  { id: 'chops', name: 'Small Chops, Big Gist', label: 'Small Chops', glyph: 'bowl-food', state: 'done', hidden: 2, ariaLabel: 'Small Chops, Big Gist, done, 2 surprises still hidden' },
  { id: 'mango', name: 'Mango Grove', label: 'Mango Grove', glyph: 'orange', state: 'done', hidden: 0, ariaLabel: 'Mango Grove, done' },
];

export default function FastTravelDockExample() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
      <Screen width={300} height={540} style={{ background: 'var(--bg-meadow)' }}>
        <FastTravelDock contained stops={stops} onCompass={() => {}} onTravel={() => {}} />
      </Screen>
      <Screen width={300} height={540} style={{ background: 'var(--bg-meadow)' }}>
        <FastTravelDock contained phone open={open} stops={stops} hiddenTotal={3} onCompass={() => setOpen(o => !o)} onNext={() => setOpen(false)} onTravel={() => setOpen(false)} onClose={() => setOpen(false)} />
      </Screen>
    </div>
  );
}

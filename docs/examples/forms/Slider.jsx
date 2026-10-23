'use client';
import { useState } from 'react';
import { Slider } from '@ds/forms/Slider';
import { GameIcon } from '@ds/icons/GameIcon';

export default function SliderExample() {
  const [music, setMusic] = useState(70);
  const [sfx, setSfx] = useState(45);
  return (
    <div style={{ width: 340, padding: 16, background: 'var(--cream-100)', border: '4px solid var(--cream-300)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-drop)', display: 'grid', gap: 12 }}>
      <Slider value={music} onChange={setMusic} icon={<GameIcon kind="music" size={28} />} label="Music" width="100%" />
      <Slider value={sfx} onChange={setSfx} tone="teal" icon={<GameIcon kind="sound" tone="teal" size={28} />} label="Effects" width="100%" />
      <Slider value={30} tone="gold" icon={<GameIcon kind="sparkle" size={28} />} width="100%" disabled />
    </div>
  );
}

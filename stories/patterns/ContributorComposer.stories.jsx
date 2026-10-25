import React, { useState } from 'react';
import { StepBar } from '../../components/contributor/StepBar';
import { TextField } from '../../components/contributor/TextField';
import { WorldChip } from '../../components/contributor/WorldChip';
import { RadioCard } from '../../components/contributor/RadioCard';
import { UploadTile } from '../../components/contributor/UploadTile';
import { Avatar } from '../../components/identity/Avatar';
import { GameIcon } from '../../components/icons/GameIcon';
import { Row } from '../kit';

export default {
  title: 'Patterns/Contributor composer',
  tags: ['!autodocs'],
  parameters: { surface: 'sky' },
};

export const Default = {
  name: 'Contributor composer',
  render: function Render() {
    const [name, setName] = useState('Ada Okafor');
    const [text, setText] = useState('');
    const [theme, setTheme] = useState('small_chops');
    const [reveals, setReveals] = useState(false);
    return (
      <Row gap={24} align="flex-start">
        <div style={{ width: 358, padding: 18, borderRadius: 'var(--radius-xl)', background: 'var(--cream-100)', border: '4px solid var(--cream-300)', boxShadow: 'var(--shadow-drop)', display: 'grid', gap: 16 }}>
          <StepBar steps={['You', 'Memory', 'Theme', 'Preview', 'Submit']} current={1} onSelect={() => {}} compact />
          <TextField label="The name Lanre knows you by" value={name} onChange={setName} helper="Shown to her only after the reveal." />
          <TextField label="Your memory" multiline rows={3} value={text} onChange={setText} maxLength={2000} placeholder="Tell it the way you'd tell her." />
          <Row gap={10}>{['mango_grove', 'small_chops', 'good_energy', 'japan'].map(w => <WorldChip key={w} world={w} size="sm" selected={theme === w} onClick={() => setTheme(w)} />)}</Row>
        </div>
        <div style={{ width: 290, display: 'grid', gap: 14 }}>
          <div role="radiogroup" aria-label="Does this package show who you are?" style={{ display: 'grid', gap: 10 }}>
            <RadioCard checked={!reveals} onChange={() => setReveals(false)} icon={<Avatar mystery size={40} />} title="Keeps me a mystery" description="No face, name or voice in here." />
            <RadioCard checked={reveals} onChange={() => setReveals(true)} tone="gold" icon={<GameIcon kind="sparkle" size={36} />} title="Shows who I am" description="Skip the guessing for this one." />
          </div>
          <Row gap={14} align="flex-start" style={{ paddingBottom: 22 }}>
            <UploadTile type="photo" state="done" name="beach.jpg" size={84} onRemove={() => {}} />
            <UploadTile type="video" state="uploading" progress={0.42} size={84} onRemove={() => {}} />
            <UploadTile type="audio" state="error" size={84} onRetry={() => {}} onRemove={() => {}} />
            <UploadTile type="photo" state="idle" size={84} onAdd={() => {}} />
          </Row>
        </div>
      </Row>
    );
  },
};

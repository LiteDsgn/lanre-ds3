import React, { useState } from 'react';
import { StepBar } from '../../components/contributor/StepBar';
import { TextField } from '../../components/contributor/TextField';
import { WorldChip } from '../../components/contributor/WorldChip';
import { RadioCard } from '../../components/contributor/RadioCard';
import { UploadTile } from '../../components/contributor/UploadTile';
import { Avatar } from '../../components/identity/Avatar';
import { Row, samplePhoto } from '../kit';

export default {
  title: 'Patterns/Contributor composer',
  tags: ['!autodocs'],
  parameters: { surface: 'world' },
};

export const Default = {
  name: 'Contributor composer',
  render: function Render() {
    const [name, setName] = useState('Ada Okafor');
    const [theme, setTheme] = useState('small_chops');
    const [reveals, setReveals] = useState(false);
    const [text, setText] = useState('');
    const [caption, setCaption] = useState('');
    const noop = () => {};
    return (
      <Row gap={24} align="flex-start">
        <div style={{ width: 358, padding: 18, boxSizing: 'border-box', borderRadius: 'var(--radius-xl)', background: 'var(--cream-100)', border: '4px solid var(--cream-300)', boxShadow: 'var(--shadow-drop)', display: 'grid', gap: 16 }}>
          <StepBar steps={['You', 'Memories', 'Preview', 'Submit']} current={1} />
          <TextField label="The name the recipient knows you by" value={name} onChange={setName} helper="Shown only after the reveal." />
          <Row gap={10} style={{ justifyContent: 'center' }}><WorldChip world={theme} onClick={() => setTheme(w => ({ mango_grove: 'small_chops', small_chops: 'good_energy', good_energy: 'japan', japan: 'mango_grove' })[w])} aria-label="Where on the road. Tap to change." /></Row>
          <div role="radiogroup" aria-label="Does this memory show who you are?" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--space-3)' }}>
            <RadioCard checked={!reveals} onChange={() => setReveals(false)} media={<Avatar mystery size={72} aria-hidden="true" />} title="Keeps me a mystery" description="No face, name or voice in here." />
            <RadioCard checked={reveals} onChange={() => setReveals(true)} media={<Avatar name={name || '?'} size={72} alt="" aria-hidden="true" />} title="Shows who I am" description="Skip the guessing for this one." />
          </div>
        </div>
        <div style={{ width: 358, display: 'grid', gap: 16, justifyItems: 'stretch' }}>
          <div style={{ justifySelf: 'center' }}><StepBar steps={['Where', 'Who', 'Write', 'Details']} current={2} labels /></div>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
            <li><UploadTile type="text" index={0} count={3} onMoveUp={noop} onMoveDown={noop} onRemove={noop}>
              <TextField label={<span className="mp-sr">Text 1</span>} multiline rows={3} value={text} onChange={setText} maxLength={2000} placeholder="Tell it the way you'd tell them." />
            </UploadTile></li>
            <li><UploadTile type="photo" index={1} count={3} state="done" name="beach.jpg" details="2.4 MB" thumb={samplePhoto} onMoveUp={noop} onMoveDown={noop} onRemove={noop}>
              <TextField label="Caption" optional value={caption} onChange={setCaption} />
            </UploadTile></li>
            <li><UploadTile type="video" index={2} count={3} state="uploading" progress={0.42} name="party.mov" details="0:42 · 12.6 MB" onCancel={noop} onMoveUp={noop} onMoveDown={noop} onRemove={noop} /></li>
          </ol>
        </div>
      </Row>
    );
  },
};

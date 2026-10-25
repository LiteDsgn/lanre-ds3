'use client';
import { useState } from 'react';
import { UploadTile } from '@ds/contributor/UploadTile';
import { TextField } from '@ds/contributor/TextField';
import { samplePhoto } from '@stories/kit';

const START = [
  { id: 1, type: 'text', text: 'The first time we met, we talked for hours.' },
  { id: 2, type: 'photo', state: 'done', name: 'beach.jpg', details: '2.4 MB', thumb: samplePhoto, caption: 'The day at the beach' },
  { id: 3, type: 'video', state: 'uploading', progress: 0.42, name: 'party.mov', details: '0:42 · 12.6 MB', caption: '' },
  { id: 4, type: 'audio', state: 'error', reason: 'The file is too big', name: 'voice.m4a', details: '1:15 · 31.2 MB' },
];

export default function UploadTileExample() {
  const [blocks, setBlocks] = useState(START);
  const move = (i, d) => setBlocks(b => { const next = [...b]; [next[i], next[i + d]] = [next[i + d], next[i]]; return next; });
  const edit = (id, patch) => setBlocks(b => b.map(x => (x.id === id ? { ...x, ...patch } : x)));
  return (
    <ol style={{ width: 358, listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
      {blocks.map((b, i) => (
        <li key={b.id}>
          <UploadTile type={b.type} state={b.state} progress={b.progress} name={b.name} details={b.details} thumb={b.thumb} reason={b.reason} index={i} count={blocks.length} onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)}
            onRemove={() => setBlocks(x => x.filter(y => y.id !== b.id))} onRetry={() => edit(b.id, { state: 'uploading', progress: 0.1 })} onCancel={() => edit(b.id, { state: 'stalled' })}>
            {b.type === 'text' && <TextField label={<span className="mp-sr">{'Text ' + (i + 1)}</span>} multiline rows={4} value={b.text} onChange={text => edit(b.id, { text })} />}
            {(b.type === 'photo' || b.type === 'video') && <TextField label="Caption" optional value={b.caption} onChange={caption => edit(b.id, { caption })} />}
          </UploadTile>
        </li>
      ))}
    </ol>
  );
}

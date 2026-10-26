'use client';
import { useState } from 'react';
import { TextField } from '@ds/contributor/TextField';

export default function TextFieldExample() {
  const [name, setName] = useState('Ada Okafor');
  const [memory, setMemory] = useState('');
  const [relationship, setRelationship] = useState('');
  return (
    <div style={{ width: 358, padding: 18, borderRadius: 'var(--radius-xl)', background: 'var(--cream-100)', border: '4px solid var(--cream-300)', boxShadow: 'var(--shadow-drop)', display: 'grid', gap: 16 }}>
      <TextField label="The name the recipient knows you by" value={name} onChange={setName} helper="Shown to her only after the reveal." />
      <TextField label="Your memory" multiline rows={3} value={memory} onChange={setMemory} maxLength={2000} placeholder="Tell it the way you'd tell her." />
      <TextField label="Relationship" value={relationship} onChange={setRelationship} error={relationship ? undefined : 'Please add how you know her.'} />
    </div>
  );
}

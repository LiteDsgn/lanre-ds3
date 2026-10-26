'use client';
import { useState } from 'react';
import { AudioRecorder } from '@ds/contributor/AudioRecorder';
import { Note } from '@stories/kit';

export default function AudioRecorderExample() {
  const [file, setFile] = useState(null);
  return (
    <div style={{ display: 'grid', gap: 14, maxWidth: 380, margin: '0 auto' }}>
      <AudioRecorder prompt="Record a voice note. Say what you like." onDone={setFile} onCancel={() => setFile(null)} />
      <Note dark={false}>{file ? `Got ${file.filename}: ${file.durationSeconds}s, ${file.blob.size} bytes.` : 'Press Record to try it. Nothing leaves your browser.'}</Note>
    </div>
  );
}

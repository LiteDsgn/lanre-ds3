import { useState } from 'react';
import { AudioRecorder } from '../../../components/contributor/AudioRecorder';
import argTypes from '../../../components/contributor/AudioRecorder.d.ts?argtypes';
import notes from '../../../components/contributor/AudioRecorder.prompt.md?raw';
import { Note } from '../../kit';

export default {
  title: 'Adventure/Contributor/AudioRecorder',
  component: AudioRecorder,
  argTypes,
  args: { prompt: 'Record a voice note. Say what you like.' },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
};

/* Press Record to ask for the microphone. Nothing leaves the browser. */
export const Playground = {
  render: function Render(args) {
    const [file, setFile] = useState(null);
    return (
      <div style={{ display: 'grid', gap: 14, maxWidth: 380 }}>
        <AudioRecorder {...args} onDone={setFile} onCancel={() => setFile(null)} />
        <Note>{file ? `Got ${file.filename}: ${file.durationSeconds}s, ${file.blob.size} bytes.` : 'Nothing recorded yet.'}</Note>
      </div>
    );
  },
};

export const ShortLimit = { name: 'Short limit', args: { maxSeconds: 10 }, render: Playground.render };

import { useState } from 'react';
import { ViewerKeys } from '../../../components/viewer/ViewerKeys';
import argTypes from '../../../components/viewer/ViewerKeys.d.ts?argtypes';
import notes from '../../../components/viewer/ViewerKeys.prompt.md?raw';

const three = [{ icon: 'quotes', label: 'Message', seen: true }, { icon: 'images', label: '3 photos' }, { icon: 'microphone', label: 'Voice note', meta: '0:42' }];
const four = [...three, { icon: 'video-camera', label: 'Video', meta: '1:05' }];

export default {
  title: 'Adventure/Viewer/ViewerKeys',
  component: ViewerKeys,
  argTypes,
  args: { pieces: three, at: 1 },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 360, padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))' }}><Story /></div>],
};

export const Playground = {};

/* With more than three, only the key on screen keeps its name. */
export const ManyPieces = { args: { pieces: four, at: 2 } };

export const Interactive = {
  render: function Render(args) {
    const [at, setAt] = useState(0);
    return <ViewerKeys {...args} pieces={three.map((p, i) => ({ ...p, seen: i !== at && i < at }))} at={at} onSelect={setAt} />;
  },
};

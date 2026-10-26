import { Unavailable } from '../../../components/media/Unavailable';
import argTypes from '../../../components/media/Unavailable.d.ts?argtypes';
import notes from '../../../components/media/Unavailable.prompt.md?raw';

export default {
  title: 'Adventure/Media/Unavailable',
  component: Unavailable,
  argTypes,
  args: { what: 'photo', onRetry: () => {} },
  parameters: { surface: 'cream', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 360 }}><Story /></div>],
};

export const Playground = {};

export const Kinds = {
  render: () => (
    <div style={{ display: 'grid', gap: 10 }}>
      {['photo', 'set of photos', 'video', 'voice note'].map(what => <Unavailable key={what} what={what} onRetry={() => {}} />)}
    </div>
  ),
};

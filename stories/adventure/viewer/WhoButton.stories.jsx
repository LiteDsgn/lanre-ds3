import { WhoButton } from '../../../components/viewer/WhoButton';
import argTypes from '../../../components/viewer/WhoButton.d.ts?argtypes';
import notes from '../../../components/viewer/WhoButton.prompt.md?raw';

export default {
  title: 'Adventure/Viewer/WhoButton',
  component: WhoButton,
  argTypes,
  args: { onClick: () => {}, 'aria-label': 'Who’s behind this?' },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div data-world="small_chops" style={{ padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))' }}><Story /></div>],
};

export const Playground = {};

export const Found = { args: { found: true, name: 'Ada Okafor', seed: 'c-7', 'aria-label': 'From Ada Okafor. See who it was from again' } };

export const Berry = { args: { berry: true, text: 'See who left it' } };

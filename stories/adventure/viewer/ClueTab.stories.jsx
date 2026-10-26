import { ClueTab } from '../../../components/viewer/ClueTab';
import argTypes from '../../../components/viewer/ClueTab.d.ts?argtypes';
import notes from '../../../components/viewer/ClueTab.prompt.md?raw';

export default {
  title: 'Adventure/Viewer/ClueTab',
  component: ClueTab,
  argTypes,
  args: { onClick: () => {} },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))' }}><Story /></div>],
};

export const Playground = {};

export const Open = { args: { open: true } };

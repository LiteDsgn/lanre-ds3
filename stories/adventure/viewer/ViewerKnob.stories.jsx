import { ViewerKnob } from '../../../components/viewer/ViewerKnob';
import argTypes from '../../../components/viewer/ViewerKnob.d.ts?argtypes';
import notes from '../../../components/viewer/ViewerKnob.prompt.md?raw';

export default {
  title: 'Adventure/Viewer/ViewerKnob',
  component: ViewerKnob,
  argTypes,
  args: { label: 'Next: photos', onClick: () => {} },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 340, padding: 12, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--wood-300), var(--wood-500))' }}><Story /></div>],
};

export const Playground = {};

export const Guess = { args: { label: 'Who’s behind this?', icon: 'question', tone: 'guess', attract: true } };

export const Saved = { args: { label: 'Saved', icon: 'check', tone: 'saved' } };

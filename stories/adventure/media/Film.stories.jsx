import { Film } from '../../../components/media/Film';
import argTypes from '../../../components/media/Film.d.ts?argtypes';
import notes from '../../../components/media/Film.prompt.md?raw';
import { Screen } from '../../kit';
import { sampleClip } from '../../sample-media';

export default {
  title: 'Adventure/Media/Film',
  component: Film,
  argTypes,
  args: { src: sampleClip, caption: 'The party', width: 160, height: 90 },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <Screen height={400} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Story /></Screen>],
};

export const Playground = {};

export const NoCaption = { args: { caption: undefined } };

export const NoSource = { args: { src: undefined, onError: () => {} } };

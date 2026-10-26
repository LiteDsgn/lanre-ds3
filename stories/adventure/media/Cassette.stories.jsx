import { Cassette } from '../../../components/media/Cassette';
import argTypes from '../../../components/media/Cassette.d.ts?argtypes';
import notes from '../../../components/media/Cassette.prompt.md?raw';
import { Screen } from '../../kit';
import { sampleTone } from '../../sample-media';

export default {
  title: 'Adventure/Media/Cassette',
  component: Cassette,
  argTypes,
  args: { src: sampleTone(4), duration: 4, heading: 'A voice note', hint: "Tap play when you're ready" },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <Screen height={320} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Story /></Screen>],
};

export const Playground = {};

export const WithTitle = { args: { title: 'Song for you', heading: 'Listen', hint: undefined } };

export const NoSource = { args: { src: undefined, onError: () => {} } };

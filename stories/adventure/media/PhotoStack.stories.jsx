import { PhotoStack } from '../../../components/media/PhotoStack';
import argTypes from '../../../components/media/PhotoStack.d.ts?argtypes';
import notes from '../../../components/media/PhotoStack.prompt.md?raw';

export default {
  title: 'Adventure/Media/PhotoStack',
  component: PhotoStack,
  argTypes,
  args: { photos: [{ caption: 'Fixture caption' }, {}, {}], height: 220, width: 330 },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

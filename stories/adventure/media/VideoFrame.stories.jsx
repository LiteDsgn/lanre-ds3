import { VideoFrame } from '../../../components/media/VideoFrame';
import argTypes from '../../../components/media/VideoFrame.d.ts?argtypes';
import notes from '../../../components/media/VideoFrame.prompt.md?raw';

export default {
  title: 'Adventure/Media/VideoFrame',
  component: VideoFrame,
  argTypes,
  args: { caption: 'Neutral caption: never the sender', width: 300 },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

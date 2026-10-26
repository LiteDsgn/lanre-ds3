import { useState } from 'react';
import { Album } from '../../../components/media/Album';
import argTypes from '../../../components/media/Album.d.ts?argtypes';
import notes from '../../../components/media/Album.prompt.md?raw';
import { Screen } from '../../kit';
import { samplePhotos } from '../../sample-media';

export default {
  title: 'Adventure/Media/Album',
  component: Album,
  argTypes,
  args: { photos: samplePhotos },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <Screen height={520}><Story /></Screen>],
};

export const Playground = {};

export const OnePhoto = { args: { photos: samplePhotos.slice(0, 1) } };

/* Controlled, so the page can follow along. */
export const Controlled = {
  render: function Render(args) {
    const [at, setAt] = useState(1);
    return <Album {...args} index={at} onIndex={setAt} />;
  },
};

export const WithoutSizes = { args: { photos: samplePhotos.map(({ width, height, ...p }) => p) } };

export const NoPhotos = { args: { photos: [{}, {}], onError: () => {} } };

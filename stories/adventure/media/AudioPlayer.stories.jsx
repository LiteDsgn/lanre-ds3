import React from 'react';
import { AudioPlayer } from '../../../components/media/AudioPlayer';
import argTypes from '../../../components/media/AudioPlayer.d.ts?argtypes';
import notes from '../../../components/media/AudioPlayer.prompt.md?raw';
import { Col } from '../../kit';

export default {
  title: 'Adventure/Media/AudioPlayer',
  component: AudioPlayer,
  argTypes,
  args: { title: 'Voice note', duration: 42 },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 300 }}><Story /></div>],
};

export const Playground = {};

export const Tones = {
  render: () => (
    <Col gap={14}>
      <AudioPlayer title="Voice note" duration={42} />
      <AudioPlayer title="Song for you" duration={128} tone="berry" />
    </Col>
  ),
};

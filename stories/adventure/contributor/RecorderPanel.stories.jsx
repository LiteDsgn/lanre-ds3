import { RecorderPanel } from '../../../components/contributor/RecorderPanel';
import argTypes from '../../../components/contributor/RecorderPanel.d.ts?argtypes';
import notes from '../../../components/contributor/RecorderPanel.prompt.md?raw';
import { sampleTone } from '../../sample-media';

export default {
  title: 'Adventure/Contributor/RecorderPanel',
  component: RecorderPanel,
  argTypes,
  args: { phase: 'idle', prompt: 'Record a voice note. Say what you like.', onRecord: () => {}, onStop: () => {}, onRedo: () => {}, onUse: () => {}, onCancel: () => {} },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ maxWidth: 380 }}><Story /></div>],
};

export const Playground = {};

export const Recording = { args: { phase: 'recording', seconds: 42 } };

export const Review = { args: { phase: 'review', url: sampleTone(3) } };

export const MicrophoneBlocked = { name: 'Microphone blocked', args: { error: 'Microphone access was blocked. Allow it in your browser settings, or upload an audio file instead.' } };

export const Unsupported = { args: { supported: false } };

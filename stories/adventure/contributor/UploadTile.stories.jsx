import React from 'react';
import { UploadTile } from '../../../components/contributor/UploadTile';
import { TextField } from '../../../components/contributor/TextField';
import argTypes from '../../../components/contributor/UploadTile.d.ts?argtypes';
import notes from '../../../components/contributor/UploadTile.prompt.md?raw';
import { samplePhoto } from '../../kit';

const noop = () => {};
const keys = { onMoveUp: noop, onMoveDown: noop, onRemove: noop };

export default {
  title: 'Adventure/Contributor/UploadTile',
  component: UploadTile,
  argTypes,
  args: { type: 'video', index: 0, count: 3, state: 'uploading', progress: 0.42, name: 'party.mov', details: '0:42 · 12.6 MB', onCancel: noop, onRetry: noop, ...keys },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 358 }}><Story /></div>],
};

export const Playground = {};

/* Every state, stacked the way the composer stacks them. */
export const States = {
  render: () => (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 22 }}>
      <li><UploadTile type="text" index={0} count={6} {...keys}><TextField label={<span className="mp-sr">Text 1</span>} multiline rows={3} value="The first time we met, we talked for hours." onChange={noop} /></UploadTile></li>
      <li><UploadTile type="photo" index={1} count={6} state="done" name="beach.jpg" details="2.4 MB" thumb={samplePhoto} {...keys}><TextField label="Caption" optional value="The day at the beach" onChange={noop} /></UploadTile></li>
      <li><UploadTile type="video" index={2} count={6} state="uploading" progress={0.42} name="party.mov" details="0:42 · 12.6 MB" onCancel={noop} {...keys} /></li>
      <li><UploadTile type="audio" index={3} count={6} state="error" reason="The file is too big" name="voice.m4a" details="1:15 · 31.2 MB" onRetry={noop} {...keys} /></li>
      <li><UploadTile type="photo" index={4} count={6} state="stalled" name="scan.png" details="310 KB" onRetry={noop} {...keys} /></li>
      <li><UploadTile type="video" index={5} count={6} state="missing" {...keys} /></li>
    </ol>
  ),
};

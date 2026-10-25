import React from 'react';
import { UploadTile } from '../../../components/contributor/UploadTile';
import argTypes from '../../../components/contributor/UploadTile.d.ts?argtypes';
import notes from '../../../components/contributor/UploadTile.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Adventure/Contributor/UploadTile',
  component: UploadTile,
  argTypes,
  args: { type: 'video', state: 'uploading', progress: 0.42, size: 84, onRemove: () => {} },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
};

export const Playground = {};

export const States = {
  render: () => (
    <Row gap={14} align="flex-start" style={{ paddingBottom: 22 }}>
      <UploadTile type="photo" state="done" name="beach.jpg" size={84} onRemove={() => {}} />
      <UploadTile type="video" state="uploading" progress={0.42} size={84} onRemove={() => {}} />
      <UploadTile type="audio" state="error" size={84} onRetry={() => {}} onRemove={() => {}} />
      <UploadTile type="photo" state="idle" size={84} onAdd={() => {}} />
    </Row>
  ),
};

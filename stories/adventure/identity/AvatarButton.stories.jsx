import React from 'react';
import { AvatarButton } from '../../../components/identity/AvatarButton';
import argTypes from '../../../components/identity/AvatarButton.d.ts?argtypes';
import notes from '../../../components/identity/AvatarButton.prompt.md?raw';
import { Row, Note, samplePhoto } from '../../kit';

export default {
  title: 'Adventure/Identity/AvatarButton',
  component: AvatarButton,
  argTypes,
  args: { name: 'Ada Okafor', seed: 'c_01', onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const WithPhoto = { name: 'With a photo', args: { src: samplePhoto } };

export const Generated = {
  render: () => (
    <Row gap={18}>
      <AvatarButton name="Ada Okafor" seed="c_01" onClick={() => {}} />
      <AvatarButton name="Tunde Bello" seed="c_22" onClick={() => {}} />
      <Note>The generated look comes from the seed, the same as Avatar.</Note>
    </Row>
  ),
};

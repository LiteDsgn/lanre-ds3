import React from 'react';
import { Avatar } from '../../../components/identity/Avatar';
import argTypes from '../../../components/identity/Avatar.d.ts?argtypes';
import notes from '../../../components/identity/Avatar.prompt.md?raw';
import { Row, Note } from '../../kit';

export default {
  title: 'Adventure/Identity/Avatar',
  component: Avatar,
  argTypes,
  args: { name: 'Ada Okafor', seed: 'c_01', size: 72 },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const GeneratedAndMystery = {
  name: 'Generated and mystery',
  render: () => (
    <Row gap={14}>
      {[['Ada Okafor', 'c_01'], ['Tunde Bello', 'c_22'], ['Kemi A.', 'c_07'], ['Femi & Bisi', 'c_15'], ['Mrs Adeyemi', 'c_09'], ['Bayo (work)', 'c_40']].map(([n, s]) => <Avatar key={s} name={n} seed={s} size={56} />)}
      <Avatar mystery size={56} />
      <Note>Generated from the seed, so it stays stable. The mystery avatar leaks nothing. Fictional names.</Note>
    </Row>
  ),
};

import React from 'react';
import { PersonTile } from '../../../components/identity/PersonTile';
import argTypes from '../../../components/identity/PersonTile.d.ts?argtypes';
import notes from '../../../components/identity/PersonTile.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Adventure/Identity/PersonTile',
  component: PersonTile,
  argTypes,
  args: { state: 'revealed', name: 'Ada Okafor', relationship: 'Sister', seed: 'c_01', gem: 'amethyst', tier: 3, onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const States = {
  render: () => (
    <Row gap={10} align="stretch">
      <PersonTile state="revealed" name="Ada Okafor" relationship="Sister" seed="c_01" gem="amethyst" tier={3} onClick={() => {}} />
      <PersonTile state="revealed" name="Tunde Bello" relationship="Colleague" seed="c_22" gem="amber" tier={1} onClick={() => {}} />
      <PersonTile state="mystery" />
      <PersonTile state="new" name="Kemi A." seed="c_07" gem="emerald" tier={2} onClick={() => {}} />
    </Row>
  ),
};

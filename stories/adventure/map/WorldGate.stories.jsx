import React from 'react';
import { WorldGate } from '../../../components/map/WorldGate';
import argTypes from '../../../components/map/WorldGate.d.ts?argtypes';
import notes from '../../../components/map/WorldGate.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Adventure/Map/WorldGate',
  component: WorldGate,
  argTypes,
  args: { world: 'small_chops', levels: 'Levels 6–11', width: 300, note: "Fixture note: Henry's real words go here, or no card at all." },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Gates = {
  render: () => (
    <Row gap={22} align="flex-start">
      <WorldGate world="small_chops" levels="Levels 6–11" width={300} note="Fixture note: Henry's real words go here, or no card at all." />
      <WorldGate world="japan" levels="Levels 17–21" width={220} />
      <WorldGate world="summit" locked width={220} />
    </Row>
  ),
};

import React from 'react';
import { DiscoveryMarker } from '../../../components/map/DiscoveryMarker';
import argTypes from '../../../components/map/DiscoveryMarker.d.ts?argtypes';
import notes from '../../../components/map/DiscoveryMarker.prompt.md?raw';
import { Row, Col, Note } from '../../kit';

export default {
  title: 'Adventure/Map/DiscoveryMarker',
  component: DiscoveryMarker,
  argTypes,
  args: { kind: 'mango', state: 'available', label: 'Mango', onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const States = {
  render: () => (
    <Col>
      <Row gap={18} align="flex-end">
        <DiscoveryMarker kind="mango" state="available" label="Mango" onClick={() => {}} />
        <DiscoveryMarker kind="rice" state="hidden" onClick={() => {}} />
        <DiscoveryMarker kind="dumbbell" state="new" onClick={() => {}} />
        <DiscoveryMarker kind="lantern" state="opened" />
        <DiscoveryMarker kind="flower" state="available" size={52} onClick={() => {}} />
        <DiscoveryMarker kind="gift" state="available" size={52} onClick={() => {}} />
      </Row>
      <Note>hidden = a glinting bush · available = glow + float · new = late arrival · opened = tick</Note>
    </Col>
  ),
};

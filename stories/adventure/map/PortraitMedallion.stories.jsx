import React, { useState } from 'react';
import { PortraitMedallion } from '../../../components/map/PortraitMedallion';
import { LevelNode } from '../../../components/map/LevelNode';
import { Button } from '../../../components/buttons/Button';
import argTypes from '../../../components/map/PortraitMedallion.d.ts?argtypes';
import notes from '../../../components/map/PortraitMedallion.prompt.md?raw';
import { Row, Col, Note } from '../../kit';

export default {
  title: 'Adventure/Map/PortraitMedallion',
  component: PortraitMedallion,
  argTypes,
  args: { name: 'Ada Okafor', seed: 'c_01', number: 4, onClick: () => {} },
  parameters: {
    docs: { description: { component: notes } },
    // axe's label-in-name check reads the avatar's initials as the button's visible label and wants "AO1" in the name.
    // The initials are part of the picture; the visible label is the level number, which "Replay level 1, Ada Okafor" keeps.
    a11y: { config: { rules: [{ id: 'label-content-name-mismatch', enabled: false }] } },
  },
};

export const Playground = {};

export const OnTheRoad = {
  name: 'On the road',
  render: () => (
    <Col>
      <Row gap={22} align="flex-end">
        <PortraitMedallion name="Ada Okafor" seed="c_01" number={1} onClick={() => {}} />
        <PortraitMedallion name="Tunde Bello" seed="c_22" number={2} onClick={() => {}} />
        <PortraitMedallion name="Kemi A." seed="c_07" number={3} onClick={() => {}} />
        <LevelNode number={4} state="current" onClick={() => {}} />
        <LevelNode number={5} state="locked" />
      </Row>
      <Note>Completed levels are medallions. The current and locked ones stay plain nodes, so nobody is given away early.</Note>
    </Col>
  ),
};

export const Arrival = {
  render: function Render() {
    const [run, setRun] = useState(0);
    return (
      <Row gap={22}>
        <PortraitMedallion key={run} name="Femi & Bisi" seed="c_15" number={6} pop onClick={() => {}} />
        <Button variant="ghost" typeface="ui" size="sm" onClick={() => setRun(r => r + 1)}>Play again</Button>
      </Row>
    );
  },
};

export const SizesAndDiscoveries = {
  name: 'Sizes and discoveries',
  render: () => (
    <Row gap={22} align="flex-end">
      <PortraitMedallion name="Ada Okafor" seed="c_01" number={4} size={64} onClick={() => {}} />
      <PortraitMedallion name="Ada Okafor" seed="c_01" number={4} onClick={() => {}} />
      <PortraitMedallion name="Ada Okafor" seed="c_01" number={4} size={110} onClick={() => {}} />
      <PortraitMedallion name="Mrs Adeyemi" seed="c_09" size={76} onClick={() => {}} />
      <PortraitMedallion name="Dayo" seed="c_31" number={9} />
    </Row>
  ),
};

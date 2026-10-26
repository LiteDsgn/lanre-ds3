'use client';
import { useState } from 'react';
import { PortraitMedallion } from '@ds/map/PortraitMedallion';
import { LevelNode } from '@ds/map/LevelNode';
import { Button } from '@ds/buttons/Button';
import { Row, Col, Note } from '@stories/kit';

export default function PortraitMedallionExample() {
  const [run, setRun] = useState(0);
  return (
    <Col>
      <Row gap={22} align="flex-end">
        <PortraitMedallion name="Ada Okafor" seed="c_01" number={1} onClick={() => {}} />
        <PortraitMedallion name="Tunde Bello" seed="c_22" number={2} onClick={() => {}} />
        <PortraitMedallion key={run} name="Kemi A." seed="c_07" number={3} pop onClick={() => {}} />
        <LevelNode number={4} state="current" onClick={() => {}} />
        <LevelNode number={5} state="locked" />
        <Button variant="ghost" typeface="ui" size="sm" onClick={() => setRun(r => r + 1)}>Replay arrival</Button>
      </Row>
      <Note>Completed levels become medallions. Current and locked levels stay plain nodes, so nobody is given away early.</Note>
    </Col>
  );
}

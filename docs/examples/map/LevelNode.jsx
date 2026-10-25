'use client';
import { LevelNode } from '@ds/map/LevelNode';
import { Row } from '@stories/kit';

export default function LevelNodeExample() {
  return (
    <Row gap={18} align="flex-end">
      <LevelNode number={1} state="complete" stars={3} onClick={() => {}} />
      <LevelNode number={2} state="complete" stars={2} onClick={() => {}} />
      <LevelNode number={3} state="complete" stars={1} onClick={() => {}} />
      <LevelNode number={4} state="current" onClick={() => {}} />
      <LevelNode number={5} state="locked" />
      <LevelNode number={12} state="locked" size={64} />
    </Row>
  );
}

'use client';
import { useState } from 'react';
import { WorldChip } from '@ds/contributor/WorldChip';
import { Row, Col } from '@stories/kit';

const worlds = ['mango_grove', 'small_chops', 'good_energy', 'japan'];

export default function WorldChipExample() {
  const [theme, setTheme] = useState('small_chops');
  return (
    <Col gap={16}>
      <Row gap={10}>{worlds.map(w => <WorldChip key={w} world={w} size="sm" selected={theme === w} onClick={() => setTheme(w)} />)}</Row>
      <Row gap={10} align="stretch">{worlds.map(w => <WorldChip key={w} world={w} showBlurb selected={theme === w} onClick={() => setTheme(w)} />)}</Row>
    </Col>
  );
}

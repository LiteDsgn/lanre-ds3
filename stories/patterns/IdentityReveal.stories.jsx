import React, { useState } from 'react';
import { RevealCard } from '../../components/identity/RevealCard';
import { PersonTile } from '../../components/identity/PersonTile';
import { Button } from '../../components/buttons/Button';
import { Row, Col, Note } from '../kit';

export default {
  title: 'Patterns/Identity reveal',
  tags: ['!autodocs'],
};

export const Default = {
  name: 'Identity reveal',
  render: function Render() {
    const [revealed, setRevealed] = useState(false);
    return (
      <Row gap={24} align="flex-start">
        <RevealCard revealed={revealed} name="Ada Okafor" relationship="Sister" seed="c_01" gem="emerald" tier={2} clue="We met over jollof." width={220} onGemTap={() => {}} />
        <Col gap={10} style={{ alignContent: 'start' }}>
          <Button variant="confirm" typeface="ui" onClick={() => setRevealed(r => !r)}>{revealed ? 'Back to mystery' : 'Reveal sender'}</Button>
          <Row gap={10} align="stretch">
            <PersonTile state="revealed" name="Ada Okafor" relationship="Sister" seed="c_01" gem="amethyst" tier={3} onClick={() => {}} />
            <PersonTile state="revealed" name="Tunde Bello" relationship="Colleague" seed="c_22" gem="amber" tier={1} onClick={() => {}} />
            <PersonTile state="mystery" />
            <PersonTile state="new" name="Kemi A." seed="c_07" gem="emerald" tier={2} onClick={() => {}} />
          </Row>
          <Note>Fictional fixture names. Babe's surfaces show the stone only: no score, rank or tier text.</Note>
        </Col>
      </Row>
    );
  },
};

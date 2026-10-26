import React from 'react';
import { PersonTile } from '../../components/identity/PersonTile';
import { Row, Col, Note } from '../kit';
import { ViewerDemo } from '../ViewerDemo';

export default {
  title: 'Patterns/Identity reveal',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

/* Guess in the tray, and the face flips to the friend. Then the same people in "Your People". */
export const Default = {
  name: 'Identity reveal',
  render: () => (
    <Row gap={24} align="flex-start">
      <ViewerDemo startLoaded />
      <Col gap={10} style={{ alignContent: 'start' }}>
        <Row gap={10} align="stretch">
          <PersonTile state="revealed" name="Ada Okafor" relationship="Sister" seed="c_01" gem="amethyst" tier={3} onClick={() => {}} />
          <PersonTile state="revealed" name="Tunde Bello" relationship="Colleague" seed="c_22" gem="amber" tier={1} onClick={() => {}} />
          <PersonTile state="mystery" />
          <PersonTile state="new" name="Kemi A." seed="c_07" gem="emerald" tier={2} onClick={() => {}} />
        </Row>
        <Note>Fictional fixture names. The recipient’s surfaces show the stone only: no score, rank or tier text.</Note>
      </Col>
    </Row>
  ),
};

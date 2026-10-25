'use client';
import { PersonTile } from '@ds/identity/PersonTile';
import { Row } from '@stories/kit';

export default function PersonTileExample() {
  return (
    <Row gap={10} align="stretch">
      <PersonTile state="revealed" name="Ada Okafor" relationship="Sister" seed="c_01" gem="amethyst" tier={3} onClick={() => {}} />
      <PersonTile state="revealed" name="Tunde Bello" relationship="Colleague" seed="c_22" gem="amber" tier={1} onClick={() => {}} />
      <PersonTile state="mystery" />
      <PersonTile state="new" name="Kemi A." seed="c_07" gem="emerald" tier={2} onClick={() => {}} />
    </Row>
  );
}

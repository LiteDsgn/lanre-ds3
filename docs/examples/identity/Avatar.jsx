'use client';
import { Avatar } from '@ds/identity/Avatar';
import { Row, Note } from '@stories/kit';

const people = [['Ada Okafor', 'c_01'], ['Tunde Bello', 'c_22'], ['Kemi A.', 'c_07'], ['Femi & Bisi', 'c_15'], ['Mrs Adeyemi', 'c_09'], ['Bayo (work)', 'c_40']];

export default function AvatarExample() {
  return (
    <Row gap={14}>
      {people.map(([name, seed]) => <Avatar key={seed} name={name} seed={seed} size={56} />)}
      <Avatar mystery size={56} />
      <Note>Generated from the seed, so it stays stable. The mystery avatar leaks nothing. Fictional names.</Note>
    </Row>
  );
}

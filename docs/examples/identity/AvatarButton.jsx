'use client';
import { AvatarButton } from '@ds/identity/AvatarButton';
import { Row, Note } from '@stories/kit';

export default function AvatarButtonExample() {
  return (
    <Row gap={18}>
      <AvatarButton name="Ada Okafor" seed="c_01" onClick={() => {}} />
      <AvatarButton name="Tunde Bello" seed="c_22" onClick={() => {}} />
      <Note>Only for the person’s own avatar, where pressing it changes something.</Note>
    </Row>
  );
}

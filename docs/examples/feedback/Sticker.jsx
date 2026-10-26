'use client';
import { Sticker } from '@ds/feedback/Sticker';
import { Row, Note } from '@stories/kit';

export default function StickerExample() {
  return (
    <Row gap={12}>
      {['blue', 'teal', 'gold', 'coral', 'berry', 'green', 'stone'].map(t => <Sticker key={t} icon="heart" tone={t} />)}
      <Sticker icon="warning" tone="coral" weight="bold" />
      <Note>One glyph, tinted from a colour family. Hidden from screen readers, so pair it with words.</Note>
    </Row>
  );
}

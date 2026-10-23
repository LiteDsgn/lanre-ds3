'use client';
import { Gemstone } from '@ds/identity/Gemstone';
import { Row, Col, Note } from '@stories/kit';

export default function GemstoneExample() {
  return (
    <Col gap={18}>
      <Row gap={18} align="flex-end">
        {['amber', 'emerald', 'amethyst'].map(g => [1, 2, 3].map(t => <Gemstone key={g + t} gem={g} tier={t} size={52} showTier />))}
        <Gemstone gem="pearl" size={52} showTier />
      </Row>
      <Note>Friend-facing with showTier. On Babe&apos;s surfaces the stone appears alone, with no tier, score or rank.</Note>
    </Col>
  );
}

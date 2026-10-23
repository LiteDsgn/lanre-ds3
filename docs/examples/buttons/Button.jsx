'use client';
import { Button } from '@ds/buttons/Button';
import { Row, Col, Ph } from '@stories/kit';

export default function ButtonExample() {
  return (
    <Col>
      <Row>
        {['primary', 'play', 'confirm', 'danger', 'premium', 'wood', 'ghost'].map(v => <Button key={v} variant={v}>{v}</Button>)}
        <Button disabled>Locked</Button>
      </Row>
      <Row>
        <Button size="sm" variant="confirm">OK</Button>
        <Button size="md" variant="play" icon={<Ph n="play" />} typeface="ui">Level 22</Button>
        <Button size="lg">Claim</Button>
        <Button variant="premium" pill typeface="ui" trailing={<span style={{ opacity: .85 }}>USD 3.99</span>}>3,000 coins</Button>
      </Row>
    </Col>
  );
}

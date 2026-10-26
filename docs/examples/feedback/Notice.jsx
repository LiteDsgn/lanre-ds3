'use client';
import { Notice } from '@ds/feedback/Notice';
import { Col } from '@stories/kit';

export default function NoticeExample() {
  return (
    <Col gap={14} style={{ maxWidth: 380 }}>
      <Notice icon="envelope-simple">Your changes are saved as you go.</Notice>
      <Notice tone="warn" icon="warning">That photo is too large. Try one under 10 MB.</Notice>
      <Notice tone="gold" icon="gift">Everything is in. Nicely done.</Notice>
    </Col>
  );
}

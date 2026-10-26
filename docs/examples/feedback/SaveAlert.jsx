'use client';
import { SaveAlert } from '@ds/feedback/SaveAlert';
import { Col } from '@stories/kit';

export default function SaveAlertExample() {
  return (
    <Col gap={12} style={{ maxWidth: 380 }}>
      <SaveAlert status="conflict" error="Someone else changed this. Reload to see it." onReload={() => {}} />
      <SaveAlert status="error" error="The connection dropped" />
      <SaveAlert status="error" />
    </Col>
  );
}

'use client';
import { DiscoveryMarker } from '@ds/map/DiscoveryMarker';
import { Row, Col, Note } from '@stories/kit';

export default function DiscoveryMarkerExample() {
  return (
    <Col>
      <Row gap={18} align="flex-end">
        <DiscoveryMarker kind="mango" state="available" label="Mango" onClick={() => {}} />
        <DiscoveryMarker kind="rice" state="hidden" onClick={() => {}} />
        <DiscoveryMarker kind="dumbbell" state="new" onClick={() => {}} />
        <DiscoveryMarker kind="lantern" state="opened" />
        <DiscoveryMarker kind="flower" state="available" size={52} onClick={() => {}} />
        <DiscoveryMarker kind="gift" state="available" size={52} onClick={() => {}} />
      </Row>
      <Note>hidden = a glinting bush · available = glow + float · new = late arrival · opened = tick</Note>
    </Col>
  );
}

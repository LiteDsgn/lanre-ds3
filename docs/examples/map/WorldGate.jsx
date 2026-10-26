'use client';
import { WorldGate } from '@ds/map/WorldGate';
import { Row } from '@stories/kit';

export default function WorldGateExample() {
  return (
    <Row gap={22} align="flex-start">
      <WorldGate world="small_chops" levels="Levels 6–11" width={300} note="Fixture note: the author’s real words go here, or no card at all." />
      <WorldGate world="japan" levels="Levels 17–21" width={220} />
      <WorldGate world="summit" locked width={220} />
    </Row>
  );
}

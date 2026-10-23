'use client';
import { TimerChip } from '@ds/hud/TimerChip';
import { Row } from '@stories/kit';

export default function TimerChipExample() {
  return (
    <Row gap={16}>
      <TimerChip time="00:02" />
      <TimerChip time="4h 12m" tone="light" />
      <TimerChip time="00:09" urgent />
      <TimerChip time="12:00" size="sm" icon="hourglass" />
    </Row>
  );
}

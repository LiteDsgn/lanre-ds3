'use client';
import { AudioPlayer } from '@ds/media/AudioPlayer';
import { Col } from '@stories/kit';

export default function AudioPlayerExample() {
  return (
    <Col gap={14} style={{ width: 320 }}>
      <AudioPlayer title="Voice note" duration={42} />
      <AudioPlayer title="Song for you" duration={128} tone="berry" />
    </Col>
  );
}

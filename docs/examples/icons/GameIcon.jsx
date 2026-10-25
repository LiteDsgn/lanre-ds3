'use client';
import { GameIcon } from '@ds/icons/GameIcon';
import { Row, Col, Note } from '@stories/kit';

const kinds = ['coin', 'coins', 'gem', 'ruby', 'heart', 'star', 'energy', 'key', 'gift', 'chest', 'trophy', 'crown', 'lock', 'clock', 'ticket', 'egg', 'map', 'compass', 'flag', 'leaf', 'tent', 'boat', 'mountains', 'footprints', 'play', 'check', 'x', 'plus', 'gear', 'shop', 'trash', 'sound', 'music', 'vibrate', 'bell', 'backpack', 'fire', 'binoculars', 'sparkle', 'quest', 'spin'];
const tones = ['gold', 'coral', 'blue', 'teal', 'green', 'berry', 'wood', 'stone', 'white', 'ink'];

export default function GameIconExample() {
  return (
    <Col gap={20}>
      <Row gap={12}>
        {kinds.map(k => (
          <span key={k} style={{ display: 'grid', justifyItems: 'center', gap: 4, width: 64 }}>
            <GameIcon kind={k} size={34} /><Note>{k}</Note>
          </span>
        ))}
      </Row>
      <Row gap={16} align="flex-end">
        {[20, 28, 40, 56].map(s => <GameIcon key={s} kind="coin" size={s} />)}
        <span style={{ width: 16 }} />
        {tones.map(t => <GameIcon key={t} name="star" tone={t} size={32} />)}
      </Row>
    </Col>
  );
}

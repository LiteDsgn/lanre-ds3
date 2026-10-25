'use client';
import { Tile } from '@ds/map/Tile';
import { GameIcon } from '@ds/icons/GameIcon';
import { Row } from '@stories/kit';

export default function TileExample() {
  return (
    <Row gap={12} align="flex-start">
      <Tile variant="grass" />
      <Tile variant="sand" content="?" />
      <Tile variant="stone" content={<GameIcon kind="lock" size={26} />} />
      <Tile variant="water" />
      <Tile variant="reward" content={<GameIcon kind="coin" size={30} />} active onClick={() => {}} label="Coin" />
      <Tile variant="hazard" content={<GameIcon name="skull" tone="white" size={28} />} />
      <Tile variant="start" content="GO" />
      <Tile variant="sand" size={48} content="5" />
      <Tile variant="grass" size={48} content={<GameIcon kind="gem" size={22} />} />
    </Row>
  );
}

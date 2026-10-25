'use client';
import { UploadTile } from '@ds/contributor/UploadTile';
import { Row } from '@stories/kit';

export default function UploadTileExample() {
  return (
    <Row gap={14} align="flex-start" style={{ paddingBottom: 22 }}>
      <UploadTile type="photo" state="done" name="beach.jpg" size={84} onRemove={() => {}} />
      <UploadTile type="video" state="uploading" progress={0.42} size={84} onRemove={() => {}} />
      <UploadTile type="audio" state="error" size={84} onRetry={() => {}} onRemove={() => {}} />
      <UploadTile type="photo" state="idle" size={84} onAdd={() => {}} />
    </Row>
  );
}

'use client';
import { PhotoStack } from '@ds/media/PhotoStack';

export default function PhotoStackExample() {
  return <PhotoStack photos={[{ caption: 'Fixture caption' }, {}, {}]} height={240} width={360} />;
}

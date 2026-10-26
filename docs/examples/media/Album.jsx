'use client';
import { useCallback, useState } from 'react';
import { Album } from '@ds/media/Album';
import { Screen } from '@stories/kit';
import { samplePhotos } from '@stories/sample-media';

export default function AlbumExample() {
  const [at, setAt] = useState(0);
  // The docs scope the tokens to the preview, so the lightbox is drawn inside it rather than on the page body.
  const [root, setRoot] = useState(null);
  const find = useCallback(el => { if (el) setRoot(el.closest('.lanre-preview')); }, []);
  return (
    <div ref={find}>
      <Screen width={360} height={500}>
        <Album photos={samplePhotos} index={at} onIndex={setAt} lightboxRoot={root} />
      </Screen>
    </div>
  );
}

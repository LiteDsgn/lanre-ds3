'use client';
import { useCallback, useState } from 'react';
import { ViewerDemo } from '@stories/ViewerDemo';

export default function RoadsideViewerExample() {
  // The docs scope the tokens to the preview, so the photo lightbox is drawn inside it rather than on the page body.
  const [root, setRoot] = useState(null);
  const find = useCallback(el => { if (el) setRoot(el.closest('.lanre-preview')); }, []);
  return <div ref={find}><ViewerDemo lightboxRoot={root} /></div>;
}

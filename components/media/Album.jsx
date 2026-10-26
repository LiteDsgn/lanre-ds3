'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { reduceMotion, useLoaded } from './shared.js';
import { Unavailable } from './Unavailable';

const shapeOf = p => (p.width && p.height ? { w: p.width, h: p.height } : null);
const shapeVars = (s, caption) => ({ '--w': s ? s.w : 4, '--h': s ? s.h : 3, '--cap': caption ? '34px' : '0px' });
const keyOf = p => p.id ?? p.src;

function Lightbox({ photos, index, onIndex, onClose, root }) {
  const b = photos[index];
  const close = useRef(null);
  const [leaving, setLeaving] = useState(false);
  const step = useCallback(d => onIndex(Math.max(0, Math.min(photos.length - 1, index + d))), [index, onIndex, photos.length]);
  // Fade out before going, like every other sheet.
  const leave = useCallback(() => {
    if (reduceMotion()) return onClose();
    setLeaving(true);
    window.setTimeout(onClose, 180);
  }, [onClose]);
  useEffect(() => { if (close.current) close.current.focus(); }, []);
  useEffect(() => {
    // Capture phase, so Escape closes the photo and not whatever sheet is behind it. Every key it handles stops here:
    // the lightbox sits inside the album in the React tree, so the album's own arrow keys would step a second time.
    const onKey = e => {
      if (e.key === 'Escape') { e.stopImmediatePropagation(); leave(); }
      else if (e.key === 'ArrowLeft') { e.stopImmediatePropagation(); step(-1); }
      else if (e.key === 'ArrowRight') { e.stopImmediatePropagation(); step(1); }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [leave, step]);
  return createPortal(
    <div className={'mp-lightbox' + (leaving ? ' mp-lightbox-leaving' : '')} role="dialog" aria-modal="true" aria-label={'Photo ' + (index + 1) + ' of ' + photos.length} onClick={leave}>
      <img key={keyOf(b)} src={b.src} alt={b.alt || 'Photo ' + (index + 1)} />
      {b.caption && <p className="mp-light-caption">{b.caption}</p>}
      <button ref={close} type="button" className="mp-light-close" onClick={e => { e.stopPropagation(); leave(); }} aria-label="Close the photo">
        <i className="ph-bold ph-x" aria-hidden="true" />
      </button>
      {photos.length > 1 && (
        <>
          <button type="button" className="mp-album-arrow mp-album-arrow-prev" disabled={index === 0} onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Previous photo">
            <i className="ph-bold ph-caret-left" aria-hidden="true" />
          </button>
          <button type="button" className="mp-album-arrow mp-album-arrow-next" disabled={index === photos.length - 1} onClick={e => { e.stopPropagation(); step(1); }} aria-label="Next photo">
            <i className="ph-bold ph-caret-right" aria-hidden="true" />
          </button>
        </>
      )}
    </div>,
    root || document.body,
  );
}

/* One photo at a time, at its own shape, with a strip to jump around. Tap the photo to see it full screen.
   Fills the box it sits in (position: absolute; inset: 0), so put it in a positioned box with a size. */
export function Album({ photos: all = [], index: controlled, onIndex, onError, onSound, lightboxRoot, ...rest }) {
  const photos = useMemo(() => all.filter(p => p.src), [all]);
  const [own, setOwn] = useState(0);
  const index = controlled === undefined ? own : controlled;
  const at = Math.min(index, Math.max(0, photos.length - 1));
  const [natural, setNatural] = useState({});
  const [zoomed, setZoomed] = useState(false);
  const strip = useRef(null);
  const touch = useRef(null);
  const many = photos.length > 1;
  const { loaded: photoLoaded, done: photoDone, checkImage } = useLoaded(photos[at] && photos[at].src);
  // A server-rendered photo can arrive before React is listening for its load, so read its size from the element too.
  const photoRef = useCallback(el => {
    checkImage(el);
    if (el && el.complete && el.naturalWidth > 0) {
      const w = el.naturalWidth, h = el.naturalHeight, k = keyOf(photos[at]);
      setNatural(n => (n[k] && n[k].w === w && n[k].h === h ? n : { ...n, [k]: { w, h } }));
    }
  }, [checkImage, photos, at]);

  const go = useCallback(i => {
    const to = Math.max(0, Math.min(photos.length - 1, i));
    if (to === Math.min(index, photos.length - 1)) return;
    if (onSound) onSound('tick');
    setOwn(to);
    if (onIndex) onIndex(to);
  }, [index, onIndex, onSound, photos.length]);

  useEffect(() => {
    const el = strip.current;
    const thumb = el && el.children[at];
    if (!el || !thumb) return;
    el.scrollTo({ left: thumb.offsetLeft - el.clientWidth / 2 + thumb.clientWidth / 2, behavior: reduceMotion() ? 'auto' : 'smooth' });
  }, [at]);

  // Fetch the neighbours ahead so the next photo is there when it's tapped.
  useEffect(() => {
    for (const n of [photos[at + 1], photos[at - 1]]) { if (n && n.src) new window.Image().src = n.src; }
  }, [at, photos]);

  if (!photos.length) return <Unavailable what={all.length > 1 ? 'set of photos' : 'photo'} onRetry={onError} />;
  const b = photos[at];
  // The file's own size wins once it has loaded: it knows about phone photos saved on their side.
  const shape = natural[keyOf(b)] || shapeOf(b);

  const arrows = [
    <button key="prev" type="button" className="mp-album-arrow mp-album-arrow-prev" disabled={at === 0} onClick={() => go(at - 1)} aria-label="Previous photo">
      <i className="ph-bold ph-caret-left" aria-hidden="true" />
    </button>,
    <button key="next" type="button" className="mp-album-arrow mp-album-arrow-next" disabled={at === photos.length - 1} onClick={() => go(at + 1)} aria-label="Next photo">
      <i className="ph-bold ph-caret-right" aria-hidden="true" />
    </button>,
  ];

  return (
    <div className="mp-album" onKeyDown={e => { if (e.key === 'ArrowLeft') go(at - 1); else if (e.key === 'ArrowRight') go(at + 1); }} {...rest}>
      <div className="mp-album-frame"
        onTouchStart={e => { touch.current = e.touches[0].clientX; }}
        onTouchEnd={e => {
          const from = touch.current;
          touch.current = null;
          if (from === null || !many) return;
          const dx = e.changedTouches[0].clientX - from;
          if (Math.abs(dx) > 40) go(at + (dx < 0 ? 1 : -1));
        }}>
        <figure key={keyOf(b)} className="mp-polaroid" style={{ ...shapeVars(shape, Boolean(b.caption)), '--tilt': (at % 2 ? 1.5 : -1.5) + 'deg' }}>
          <button type="button" className="mp-photo-button mp-media" data-loaded={photoLoaded} onClick={() => { if (onSound) onSound('tap'); setZoomed(true); }} aria-label="See this photo full screen">
            <span className="mp-shimmer mp-on-cream" aria-hidden="true" />
            <img ref={photoRef} src={b.src} alt={b.alt || (many ? 'Photo ' + (at + 1) : 'A photo from this memory')}
              onLoad={e => {
                photoDone();
                const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
                const k = keyOf(b);
                if (w && h) setNatural(n => (n[k] && n[k].w === w && n[k].h === h ? n : { ...n, [k]: { w, h } }));
              }}
              onError={onError} />
            <span className="mp-photo-zoom" aria-hidden="true"><i className="ph-bold ph-arrows-out-simple" /></span>
          </button>
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
        {many && <>{arrows}</>}
      </div>
      {many && (
        <div className="mp-strip-row">
          {/* On a phone the arrows live down here, clear of the photo. */}
          {arrows}
          <div ref={strip} className="mp-album-strip">
            {photos.map((p, i) => (
              <button key={keyOf(p)} type="button" className={'mp-album-thumb' + (i === at ? ' mp-album-thumb-on' : '')} onClick={() => go(i)} aria-label={'Photo ' + (i + 1)} aria-current={i === at ? 'true' : undefined}>
                <img src={p.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
          <span className="mp-album-count">{at + 1} / {photos.length}</span>
        </div>
      )}
      {zoomed && <Lightbox photos={photos} index={at} onIndex={go} onClose={() => setZoomed(false)} root={lightboxRoot} />}
    </div>
  );
}

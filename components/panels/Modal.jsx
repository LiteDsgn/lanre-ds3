'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const GROUND = { dim: 'var(--bg-scrim)', dusk: 'var(--bg-dusk)', world: 'var(--world-bg)' };
const FOCUSABLE = 'a[href], area[href], button, input, select, textarea, summary, iframe, audio[controls], video[controls], [contenteditable]:not([contenteditable="false"]), [tabindex]';
const tabbable = el => !el.disabled && el.getAttribute('tabindex') !== '-1' && !el.closest('[inert]') && el.getClientRects().length > 0;
const open = []; // stack of open modals: only the top one answers Escape and Tab
let locks = 0, savedOverflow = ''; // one scroll lock shared by every open modal, so the order they close in doesn't matter

export function Modal({ label, onClose, tone = 'dim', world, closeOnScrim = false, zIndex = 45, children, style, ...rest }) {
  const box = useRef(null), timer = useRef(0), pressedScrim = useRef(false);
  const [closing, setClosing] = useState(false);
  const close = useCallback(() => {
    if (closing) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return onClose && onClose();
    setClosing(true);
    timer.current = setTimeout(() => onClose && onClose(), 240);
  }, [onClose, closing]);
  const closeRef = useRef(close);
  useEffect(() => { closeRef.current = close; });

  useEffect(() => {
    const id = {}, opener = document.activeElement, root = document.documentElement;
    open.push(id);
    if (locks++ === 0) { savedOverflow = root.style.overflow; root.style.overflow = 'hidden'; }
    if (box.current) box.current.focus();
    const onKey = e => {
      if (open[open.length - 1] !== id) return;
      if (e.key === 'Escape') { e.preventDefault(); closeRef.current(); return; }
      if (e.key !== 'Tab' || !box.current) return;
      const items = Array.from(box.current.querySelectorAll(FOCUSABLE)).filter(tabbable);
      if (!items.length) { e.preventDefault(); return; }
      const first = items[0], last = items[items.length - 1], at = document.activeElement;
      if (e.shiftKey && (at === first || !items.includes(at))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (at === last || !items.includes(at))) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(timer.current); // a fade still running must not call onClose after we're gone
      document.removeEventListener('keydown', onKey);
      open.splice(open.indexOf(id), 1);
      if (--locks === 0) root.style.overflow = savedOverflow;
      if (opener && typeof opener.focus === 'function' && document.contains(opener)) opener.focus();
    };
  }, []);

  // Only a tap that both starts and ends on the scrim closes it, so a text selection that ends there doesn't.
  const onScrim = e => e.target === e.currentTarget || e.target === box.current;
  return (
    <div role="dialog" aria-modal="true" aria-label={label} data-world={world}
      onPointerDown={closeOnScrim ? e => { pressedScrim.current = onScrim(e); } : undefined}
      onClick={closeOnScrim ? e => { if (pressedScrim.current && onScrim(e)) close(); pressedScrim.current = false; } : undefined}
      style={{
        position: 'fixed', inset: 0, zIndex, overflowY: 'auto', background: GROUND[tone] || GROUND.dim,
        animation: closing ? 'mp-sheet-out 240ms var(--ease-in-out) both' : 'mp-sheet-in 260ms var(--ease-out) both',
        pointerEvents: closing ? 'none' : undefined, ...style,
      }} {...rest}>
      <div ref={box} tabIndex={-1} style={{
        minHeight: '100%', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', placeItems: 'center',
        padding: 'max(64px, env(safe-area-inset-top)) 16px max(40px, env(safe-area-inset-bottom))', outline: 'none',
      }}>
        {typeof children === 'function' ? children(close) : children}
      </div>
    </div>
  );
}

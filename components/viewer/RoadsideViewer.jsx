'use client';
import React from 'react';
import { Button } from '../buttons/Button';

/* A memory in a wooden cabinet over the map: a sign on top, a header, a screen that plays one piece at a time, and a
   deck underneath. Fill the slots with the pieces: `who`, `clue`, `clueCard`, `keys`, `knob`, and the screen's content
   as children. While `loading` the cabinet is already in place with its screen switched off and warming up.
   By default it covers the window like a sheet; set `contained` to sit inside a positioned box instead. */
export function RoadsideViewer({ world, kind = 'level', signEyebrow, signTitle, titleId = 'memory-title', leafy = false, ribbon, onClose, closeLabel = 'Back to the map',
  eyebrow, title, loading = false, error, onRetry, retryLabel = 'Try again', loadingLabel = 'Tuning in', closing = false, contained = false, titleRef,
  who, clue, clueCard, keys, knob, pieceKey, message, layers, children, ...rest }) {
  const ready = !loading && !error;
  return (
    <div className={'mp-viewer' + (closing ? ' mp-viewer-closing' : '') + (contained ? ' mp-viewer-contained' : '')} role="dialog" aria-modal="true" aria-labelledby={titleId} {...rest}>
      <div className="mp-viewer-overlay">
        <div className="mp-viewer-sheet" data-world={world} data-kind={kind}>
          <div className={'mp-viewer-sign'}>
            {leafy && (
              <>
                <i className="ph-fill ph-leaf mp-viewer-leaf mp-viewer-leaf-a" aria-hidden="true" />
                <i className="ph-fill ph-leaf mp-viewer-leaf mp-viewer-leaf-b" aria-hidden="true" />
                <i className="ph-fill ph-leaf mp-viewer-leaf mp-viewer-leaf-c" aria-hidden="true" />
              </>
            )}
            <span className="mp-viewer-sign-eyebrow">{signEyebrow}</span>
            <h2 id={titleId} ref={titleRef} tabIndex={-1} className={'mp-viewer-sign-title' + (leafy ? ' mp-viewer-sign-title-long' : '')}>{signTitle}</h2>
          </div>
          {ribbon && <span className="mp-viewer-ribbon"><i className="ph-fill ph-sparkle" aria-hidden="true" /> {ribbon}</span>}
          <button type="button" className="mp-viewer-close" onClick={onClose} aria-label={closeLabel}>
            <i className="ph-bold ph-x" aria-hidden="true" />
          </button>

          {!ready && (
            <>
              <header className="mp-viewer-head" aria-hidden="true">
                <span className="mp-placeholder mp-placeholder-eyebrow" />
                <span className="mp-placeholder mp-placeholder-title" />
              </header>
              <div className="mp-cabinet">
                <div className="mp-screen mp-screen-off" role={error ? 'alert' : 'status'}>
                  {error ? (
                    <div className="mp-screen-off-message">
                      <i className="ph-fill ph-cloud-warning" aria-hidden="true" />
                      <p>{error}</p>
                      <Button variant="play" onClick={onRetry}>{retryLabel}</Button>
                    </div>
                  ) : (
                    <>
                      <span className="mp-screen-sweep" aria-hidden="true" />
                      <div className="mp-screen-off-message">
                        <span className="mp-screen-tuning">
                          {loadingLabel}
                          <span className="mp-tuning-dots" aria-hidden="true"><i /><i /><i /></span>
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mp-deck" aria-hidden="true">
                  <div className="mp-keys">
                    <span className="mp-placeholder mp-placeholder-key" />
                    <span className="mp-placeholder mp-placeholder-key" />
                  </div>
                  <span className="mp-placeholder mp-placeholder-knob" />
                </div>
              </div>
            </>
          )}

          {ready && (
            <>
              <header className="mp-viewer-head">
                {eyebrow && <span className="mp-viewer-eyebrow">{eyebrow}</span>}
                {title && <h3 className="mp-viewer-title">{title}</h3>}
              </header>
              <div className="mp-cabinet">
                {who}
                {clue}
                <div className="mp-screen" role="group" aria-label="The memory">
                  <div key={pieceKey} className="mp-screen-piece">{children}</div>
                  {clueCard}
                </div>
                <div className="mp-deck">
                  {keys}
                  {knob}
                </div>
              </div>
              {message && <p role="alert" className="mp-viewer-error">{message}</p>}
            </>
          )}
        </div>
      </div>
      {layers}
    </div>
  );
}

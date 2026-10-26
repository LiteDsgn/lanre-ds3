'use client';
import React from 'react';

/* The dock down the side of the map: one stop for each place on the road, from the top, with the one you're at marked and
   the ones you've finished lit. A compass jumps to what's next. On phones it folds into the compass until it's tapped.
   Set `contained` to place it in a positioned box instead. */
export function FastTravelDock({ stops = [], phone = false, open = false, hiddenTotal = 0, nextLabel = 'Next', label = 'Fast travel', compassLabel = 'Take me to the next level',
  closeLabel = 'Close fast travel', openLabel = 'Open fast travel', contained = false, onCompass, onNext, onTravel, onClose, ...rest }) {
  return (
    <>
      <div className={'mp-dock' + (phone ? ' mp-dock-phone' : '') + (open ? ' mp-dock-open' : '') + (contained ? ' mp-dock-contained' : '')} role="group" aria-label={label} {...rest}>
        <button type="button" className="mp-stop mp-stop-compass" onClick={onCompass} aria-label={phone ? (open ? closeLabel : openLabel) : compassLabel} aria-expanded={phone ? open : undefined}>
          <i className={'ph-bold ' + (phone ? 'ph-compass' : 'ph-arrow-up')} aria-hidden="true" />
          {phone && hiddenTotal > 0 && !open && <span className="mp-stop-count">{hiddenTotal}</span>}
        </button>
        <span className="mp-dock-label" aria-hidden="true">{nextLabel}</span>
        <span className="mp-dock-rule" aria-hidden="true" />
        {phone && (
          <button type="button" className="mp-stop mp-stop-here mp-stop-next" onClick={onNext} aria-label={compassLabel}>
            <i className="ph-bold ph-arrow-up" aria-hidden="true" />
          </button>
        )}
        {stops.map(st => (
          <div key={st.id} className="mp-stop-wrap">
            <button type="button" className={'mp-stop ' + (st.state === 'done' ? 'mp-stop-done' : st.state === 'here' ? 'mp-stop-here' : 'mp-stop-ahead')} onClick={onTravel ? () => onTravel(st.id) : undefined} aria-label={st.ariaLabel || st.name}>
              <i className={'ph-fill ph-' + st.glyph} aria-hidden="true" />
              {st.hidden > 0 && <span className="mp-stop-count" aria-hidden="true">{st.hidden}</span>}
            </button>
            <span className="mp-dock-label" aria-hidden="true">{st.label || st.name}</span>
          </div>
        ))}
      </div>
      {phone && open && <button type="button" className={'mp-dock-scrim' + (contained ? ' mp-dock-scrim-contained' : '')} aria-label={closeLabel} onClick={onClose} />}
    </>
  );
}

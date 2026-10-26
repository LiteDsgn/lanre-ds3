'use client';
import React from 'react';

/* The deck's keys: one per piece of the memory, with its icon and name. A key already seen shows a tick, and one
   not yet seen can show a short note such as a length. With more than three pieces, only the one on screen keeps its name. */
export function ViewerKeys({ pieces = [], at = 0, onSelect, label = 'In this memory', ...rest }) {
  return (
    <div className={'mp-keys' + (pieces.length > 3 ? ' mp-keys-many' : '')} role="group" aria-label={label} {...rest}>
      {pieces.map((p, i) => (
        <button key={i} type="button" className={'mp-key' + (i === at ? ' mp-key-on' : '')} aria-current={i === at ? 'true' : undefined} onClick={onSelect ? () => onSelect(i) : undefined}>
          <i className={'ph-fill ph-' + p.icon} aria-hidden="true" />
          <span className="mp-key-label">{p.label}</span>
          {i !== at && p.seen ? (
            <span className="mp-key-tick"><i className="ph-bold ph-check" aria-hidden="true" /><span className="mp-sr">, seen</span></span>
          ) : (
            i !== at && p.meta && <span className="mp-key-meta">{p.meta}</span>
          )}
        </button>
      ))}
    </div>
  );
}

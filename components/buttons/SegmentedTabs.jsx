'use client';
import React from 'react';

/* A pill-shaped tab switch for two or three views of the same thing. items are { id, label }; the one whose id equals value is on. */
export function SegmentedTabs({ items = [], value, onChange, label, className, ...rest }) {
  return (
    <div className={['mp-seg', className].filter(Boolean).join(' ')} role="tablist" aria-label={label} {...rest}>
      {items.map(it => (
        <button key={it.id} type="button" role="tab" aria-selected={value === it.id} className={'mp-seg-tab' + (value === it.id ? ' mp-seg-on' : '')} onClick={() => onChange && onChange(it.id)}>
          {it.label}
        </button>
      ))}
    </div>
  );
}

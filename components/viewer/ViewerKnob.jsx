'use client';
import React from 'react';

/* The one big button on the deck. It always says what happens next, with a dial on the right. */
export function ViewerKnob({ label, icon = 'caret-right', weight = 'bold', tone, attract = false, disabled = false, onClick, ...rest }) {
  return (
    <button type="button" className={'mp-knob' + (tone ? ' mp-knob-' + tone : '') + (attract ? ' mp-knob-attract' : '')} onClick={onClick} disabled={disabled} {...rest}>
      {label}
      <span className="mp-knob-dial"><i className={'ph-' + weight + ' ph-' + icon} aria-hidden="true" /></span>
    </button>
  );
}

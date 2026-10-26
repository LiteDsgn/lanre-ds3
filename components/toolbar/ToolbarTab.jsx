'use client';
import React from 'react';

/* A tab on the toolbar: a round icon and a short label. */
export function ToolbarTab({ icon, weight = 'fill', label, onClick, ...rest }) {
  return (
    <button type="button" className="mp-toolbar-tab" onClick={onClick} {...rest}>
      <span className="mp-toolbar-tab-icon"><i className={'ph-' + weight + ' ph-' + icon} aria-hidden="true" /></span>
      <span>{label}</span>
    </button>
  );
}

'use client';
import React from 'react';

/* The bar along the bottom of the map: two tabs with a big Next button between them. It floats over the window, centred.
   Set `contained` to place it in a positioned box instead. */
export function Toolbar({ label = 'Adventure tools', contained = false, children, ...rest }) {
  return <nav className={'mp-toolbar' + (contained ? ' mp-toolbar-contained' : '')} aria-label={label} {...rest}>{children}</nav>;
}

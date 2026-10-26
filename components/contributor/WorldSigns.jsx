'use client';
import React from 'react';

/* Hangs a column of WorldSigns over one road, with a straight stretch of it showing between the signs. */
export function WorldSigns({ label, children, ...rest }) {
  return (
    <div className="mp-signs mp-signs-road" role="group" aria-label={label} {...rest}>
      <span className="mp-signs-spine" aria-hidden="true" />
      {children}
    </div>
  );
}

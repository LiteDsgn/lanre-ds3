'use client';
import React from 'react';
import { Button } from '../buttons/Button';

export function Unavailable({ what = 'photo', onRetry, ...rest }) {
  return (
    <div className="mp-unavailable" {...rest}>
      <i className="ph-fill ph-cloud-warning" aria-hidden="true" />
      <span>This {what} didn&apos;t load.</span>
      <Button variant="ghost" size="sm" onClick={onRetry}>Try again</Button>
    </div>
  );
}

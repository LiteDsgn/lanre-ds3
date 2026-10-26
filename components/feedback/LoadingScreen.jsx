'use client';
import React from 'react';
import { OutlineText } from '../text/OutlineText';

/* The boot screen: sky with a few drifting clouds, the title, a striped gold bar in its track, and a hill with the road setting off.
   Fills the window. Give it a title; the label under the bar is the accessible name. */
export function LoadingScreen({ title, label = 'Loading…', className, ...rest }) {
  return (
    <div className={['mp-loading', className].filter(Boolean).join(' ')} role="status" aria-label="Loading" {...rest}>
      <span className="mp-loading-cloud mp-loading-cloud-a" aria-hidden="true" />
      <span className="mp-loading-cloud mp-loading-cloud-b" aria-hidden="true" />
      <span className="mp-loading-cloud mp-loading-cloud-c" aria-hidden="true" />
      <div className="mp-loading-stack">
        {title && <OutlineText as="p" size={40} color="gold" stroke="ink" style={{ margin: 0, textAlign: 'center', textWrap: 'balance' }}>{title}</OutlineText>}
        <span className="mp-loading-track" aria-hidden="true"><span className="mp-loading-fill" /></span>
        <OutlineText as="span" size={18} color="white" stroke="ink" style={{ letterSpacing: '0.04em' }}>{label}</OutlineText>
      </div>
      <div className="mp-loading-ground" aria-hidden="true">
        <span className="mp-loading-hill" />
        <span className="mp-loading-road" />
      </div>
    </div>
  );
}

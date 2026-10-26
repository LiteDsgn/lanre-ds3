'use client';
import React from 'react';

/* A short error under a form or a field. Renders nothing when there is no message, and is announced when one appears. */
export function ErrorText({ children, className, ...rest }) {
  if (!children) return null;
  return <p className={['mp-error-text', className].filter(Boolean).join(' ')} role="alert" {...rest}>{children}</p>;
}

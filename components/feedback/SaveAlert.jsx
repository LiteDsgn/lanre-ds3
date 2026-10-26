'use client';
import React from 'react';

/* The full message behind a failed save. A conflict is announced as an alert, with a Reload link when onReload is given;
   an error is a status line. Renders nothing when the save is fine. */
export function SaveAlert({ status, error, onReload, className, ...rest }) {
  const cls = ['mp-save-alert', className].filter(Boolean).join(' ');
  if (status === 'conflict') {
    return (
      <div className={cls} role="alert" {...rest}>
        <i className="ph-fill ph-warning" aria-hidden="true" /> {error}
        {onReload && <button type="button" className="mp-link-button" onClick={onReload}>Reload</button>}
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div className={cls} role="status" {...rest}>
        <i className="ph-fill ph-cloud-slash" aria-hidden="true" /> Not saved yet: {error ?? 'retrying when you edit'}
      </div>
    );
  }
  return null;
}

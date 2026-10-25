'use client';
import React, { useState } from 'react';
import { Button } from '../buttons/Button';

const TYPE = { text: ['article', 'Text'], photo: ['image', 'Photo'], video: ['video-camera', 'Video'], audio: ['microphone', 'Voice note'] };
const DROP = '0 12px 20px oklch(0.22 0.05 60 / 0.25)';
const WARN = { color: 'var(--coral-700)' };
const LINE = { display: 'inline-flex', alignItems: 'center', gap: 4 };
const FONT = { fontFamily: 'inherit', fontStyle: 'inherit', lineHeight: 'inherit' };

// Square cream key for moving and removing a block.
function Key({ label, disabled, onClick, children }) {
  const [down, setDown] = useState(false);
  const pressed = down && !disabled;
  return (
    <button type="button" aria-label={label} disabled={disabled} onClick={onClick}
      onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerCancel={() => setDown(false)} onPointerLeave={() => setDown(false)}
      style={{ appearance: 'none', boxSizing: 'border-box', border: '2px solid var(--cream-300)', background: 'linear-gradient(180deg, #fff, var(--cream-100))',
        boxShadow: pressed ? '0 1px 0 var(--cream-300)' : '0 3px 0 var(--cream-300), inset 0 2px 0 oklch(1 0 0 / 0.45)', width: 44, height: 44, borderRadius: 12,
        display: 'grid', placeItems: 'center', ...FONT, fontWeight: 'inherit', fontSize: 18, color: 'var(--ink-700)', cursor: disabled ? 'default' : 'pointer', flex: 'none',
        opacity: disabled ? 0.4 : undefined, transform: pressed ? 'translateY(2px)' : undefined,
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)' }}>
      {children}
    </button>
  );
}

function Status({ state, pct, reason }) {
  if (state === 'missing') return <span style={WARN}>File missing. Remove this and add it again.</span>;
  if (state === 'done') return <span style={{ color: 'var(--green-700)', ...LINE, animation: 'mp-pop var(--dur-base) var(--ease-bounce) both' }}><i className="ph-fill ph-check-circle" aria-hidden="true" /> Uploaded</span>;
  if (state === 'error') return <span style={{ ...WARN, ...LINE }}><i className="ph-fill ph-warning-circle" aria-hidden="true" /> Upload failed{reason ? ': ' + reason : ''}</span>;
  // The percentage is hidden from the live region, so it announces "Uploading" once, not every tick. The progress bar carries the number.
  if (state === 'uploading') return <span>Uploading <span aria-hidden="true">{pct}%</span></span>;
  return <span style={WARN}>Upload didn&apos;t finish</span>;
}

export function UploadTile({ type = 'photo', index = 0, count, state = 'done', progress = 0, name, details, thumb, reason, error,
  onMoveUp, onMoveDown, onRemove, onRetry, onCancel, children, style, ...rest }) {
  const [glyph, kind] = TYPE[type] || TYPE.photo;
  const media = type !== 'text';
  const failed = media && (state === 'error' || state === 'missing');
  const pct = Math.round(Math.max(0, Math.min(1, progress)) * 100);
  const label = kind + ' ' + (index + 1);
  return (
    <div style={{ position: 'relative', ...style }} {...rest}>
      {/* From the second block on, a short stretch of road joins it to the one above. Stack blocks 22px apart. */}
      {index > 0 && <span aria-hidden="true" style={{ position: 'absolute', left: 28, top: -26, width: 12, height: 30, borderRadius: 999, background: 'var(--world-path)', boxShadow: '0 0 0 3px var(--world-path-edge)' }} />}
      <div style={{ position: 'relative', boxSizing: 'border-box', background: failed ? 'var(--coral-100)' : 'linear-gradient(180deg, var(--cream-50), var(--cream-100))',
        border: 'var(--border-panel) solid ' + (failed ? 'var(--coral-500)' : 'var(--cream-300)'), borderRadius: 'var(--radius-lg)',
        boxShadow: '0 5px 0 ' + (failed ? 'var(--coral-700)' : 'var(--cream-300)') + ', ' + DROP, padding: 'var(--space-3)', display: 'grid', gap: 'var(--space-3)', minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontWeight: 700, fontSize: 14, color: 'var(--ink-700)' }}>
          <span className="mp-puck mp-puck-current mp-puck-lg" aria-hidden="true" style={{ minWidth: 0 }}>{index + 1}</span>
          <span style={{ flex: 1, minWidth: 0, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i className={'ph-fill ph-' + glyph} aria-hidden="true" style={{ fontSize: 20 }} />
            {kind}
          </span>
          {onMoveUp && <Key label={'Move ' + label + ' up'} disabled={index === 0} onClick={onMoveUp}><i className="ph-bold ph-arrow-up" aria-hidden="true" /></Key>}
          {onMoveDown && <Key label={'Move ' + label + ' down'} disabled={count !== undefined && index >= count - 1} onClick={onMoveDown}><i className="ph-bold ph-arrow-down" aria-hidden="true" /></Key>}
          {onRemove && <Key label={'Remove ' + label} onClick={onRemove}><i className="ph-bold ph-trash" aria-hidden="true" style={{ color: 'var(--coral-700)' }} /></Key>}
        </div>
        {media && (
          <div style={{ display: 'grid', gridTemplateColumns: '88px minmax(0, 1fr)', gap: 'var(--space-3)', alignItems: 'center' }}>
            <div style={{ width: 88, height: 88, borderRadius: 'var(--radius-sm)', background: 'var(--cream-200)', display: 'grid', placeItems: 'center', overflow: 'hidden', fontSize: 32, color: 'var(--stone-500)', position: 'relative' }}>
              {thumb
                ? <img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'mp-pop var(--dur-base) var(--ease-bounce) both' }} />
                : <i className={'ph-fill ph-' + glyph} aria-hidden="true" />}
            </div>
            <div style={{ display: 'grid', gap: 4, minWidth: 0, fontSize: 13, color: 'var(--ink-500)' }}>
              {name && <span title="Only you see filenames" style={{ fontWeight: 700, color: 'var(--ink-700)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>}
              <span>{details}</span>
              <span role="status" style={{ fontWeight: 700 }}><Status state={state} pct={pct} reason={reason} /></span>
              {state === 'uploading' && (
                <>
                  <div role="progressbar" aria-label="Upload progress" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}
                    style={{ height: 12, borderRadius: 999, background: 'var(--cream-300)', boxShadow: 'inset 0 2px 3px oklch(0 0 0 / 0.12)', overflow: 'hidden' }}>
                    <span style={{ display: 'block', width: pct + '%', height: '100%', borderRadius: 999, transition: 'width var(--dur-base) var(--ease-out)',
                      background: 'repeating-linear-gradient(-45deg, oklch(1 0 0 / 0.28) 0 6px, transparent 6px 12px), linear-gradient(180deg, var(--teal-300), var(--teal-500))' }} />
                  </div>
                  {onCancel && (
                    <button type="button" onClick={onCancel} style={{ appearance: 'none', border: 0, background: 'none', padding: 0, minHeight: 32, justifySelf: 'start', ...FONT,
                      fontWeight: 700, fontSize: 15, color: 'var(--blue-700)', textDecoration: 'underline', textUnderlineOffset: 3, cursor: 'pointer' }}>Cancel</button>
                  )}
                </>
              )}
              {(state === 'error' || state === 'stalled') && onRetry && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Button size="sm" variant="danger" onClick={onRetry}>Retry</Button>
                </div>
              )}
              {error && <span style={WARN}>{error}</span>}
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

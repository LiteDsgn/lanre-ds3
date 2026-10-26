'use client';
import React from 'react';
import { Button } from '../buttons/Button';

// 90 seconds is "1:30"
export function formatDuration(seconds) {
  if (seconds == null || !Number.isFinite(seconds)) return null;
  const s = Math.round(seconds);
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}

/* The card a voice recorder lives in. It only draws one step at a time: unsupported, idle (a prompt and Record), recording
   (a blinking dot, the time and Stop) or review (the take to play back, Redo and Use this). The recording itself is
   AudioRecorder's job; this panel is for showing a state or wiring your own recorder. */
export function RecorderPanel({ phase = 'idle', supported = true, prompt = 'Record a voice note.', seconds = 0, maxSeconds = 600, url, error, onRecord, onStop, onRedo, onUse, onCancel, className, ...rest }) {
  return (
    <div className={['mp-recorder', className].filter(Boolean).join(' ')} {...rest}>
      {!supported ? (
        <p className="mp-recorder-lede">This browser can&apos;t record audio. Upload an audio file instead.</p>
      ) : phase === 'idle' ? (
        <>
          <p className="mp-recorder-lede">{prompt}</p>
          <Button size="lg" variant="danger" onClick={onRecord} icon={<i className="ph-fill ph-microphone" aria-hidden="true" />}>Record</Button>
        </>
      ) : phase === 'recording' ? (
        <>
          <div className="mp-recorder-row" role="status" aria-live="polite">
            <span className="mp-rec-dot" aria-hidden="true" />
            <strong style={{ fontSize: 22, fontVariantNumeric: 'tabular-nums' }}>{formatDuration(seconds)}</strong>
            <span className="mp-recorder-small">/ {formatDuration(maxSeconds)}</span>
          </div>
          <Button size="lg" onClick={onStop} icon={<i className="ph-fill ph-stop" aria-hidden="true" />}>Stop</Button>
        </>
      ) : (
        url && (
          <>
            <audio controls src={url} style={{ width: '100%' }} />
            <div className="mp-recorder-row">
              <Button variant="ghost" onClick={onRedo}>Redo</Button>
              <Button onClick={onUse}>Use this</Button>
            </div>
          </>
        )
      )}
      {error && <p className="mp-recorder-small" style={{ color: 'var(--coral-700)', fontWeight: 700 }}>{error}</p>}
      {phase !== 'recording' && <button type="button" className="mp-link-button" onClick={onCancel}>Cancel</button>}
    </div>
  );
}

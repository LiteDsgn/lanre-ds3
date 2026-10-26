'use client';
import React, { useEffect, useRef, useState } from 'react';
import { RecorderPanel } from './RecorderPanel';

const MIME_TYPES = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus'];

function pickMimeType() {
  if (typeof MediaRecorder === 'undefined') return undefined;
  return MIME_TYPES.find(t => MediaRecorder.isTypeSupported(t));
}

const baseMimeType = mime => mime.split(';')[0].trim().toLowerCase();

/* A voice-note recorder: record, listen back, then use or discard. Nothing leaves the browser until onDone is called with the take.
   onDone gets { blob, kind: 'audio', mimeType, filename, durationSeconds }. It asks for the microphone when Record is pressed. */
export function AudioRecorder({ onDone, onCancel, prompt, maxSeconds = 10 * 60, ...rest }) {
  const [phase, setPhase] = useState('idle');
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const recorder = useRef(null);
  const stream = useRef(null);
  const chunks = useRef([]);
  const tick = useRef(null);

  const supported = typeof window !== 'undefined' && typeof MediaRecorder !== 'undefined' && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  useEffect(() => () => {
    if (tick.current) clearInterval(tick.current);
    if (stream.current) stream.current.getTracks().forEach(t => t.stop());
  }, []);

  useEffect(() => () => { if (result) URL.revokeObjectURL(result.url); }, [result]);

  useEffect(() => { if (phase === 'recording' && seconds >= maxSeconds) stop(); }, [phase, seconds, maxSeconds]);

  async function start() {
    setError(null);
    try {
      stream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setError('Microphone access was blocked. Allow it in your browser settings, or upload an audio file instead.');
      return;
    }
    const mimeType = pickMimeType();
    const rec = new MediaRecorder(stream.current, mimeType ? { mimeType } : undefined);
    chunks.current = [];
    rec.ondataavailable = e => { if (e.data.size) chunks.current.push(e.data); };
    rec.onstop = () => {
      if (stream.current) stream.current.getTracks().forEach(t => t.stop());
      const mime = baseMimeType(rec.mimeType || mimeType || 'audio/webm');
      const blob = new Blob(chunks.current, { type: mime });
      setResult({ blob, url: URL.createObjectURL(blob), mime });
      setPhase('review');
    };
    recorder.current = rec;
    rec.start(1000);
    setSeconds(0);
    setPhase('recording');
    tick.current = setInterval(() => setSeconds(n => n + 1), 1000);
  }

  function stop() {
    if (tick.current) clearInterval(tick.current);
    tick.current = null;
    if (recorder.current && recorder.current.state === 'recording') recorder.current.stop();
  }

  function use() {
    if (!result) return;
    const ext = result.mime.includes('mp4') ? 'm4a' : result.mime.includes('ogg') ? 'ogg' : 'webm';
    onDone && onDone({ blob: result.blob, kind: 'audio', mimeType: result.mime, filename: 'voice-note.' + ext, durationSeconds: seconds });
  }

  return (
    <RecorderPanel phase={phase} supported={supported} prompt={prompt} seconds={seconds} maxSeconds={maxSeconds} url={result && result.url} error={error}
      onRecord={start} onStop={stop} onRedo={() => { setResult(null); setPhase('idle'); }} onUse={use} onCancel={onCancel} {...rest} />
  );
}

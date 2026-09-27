import React, { useRef, useState } from 'react';

const fmt = s => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };

export function VideoFrame({ src, poster, ratio = '16 / 9', caption, width = '100%', style, ...rest }) {
  const box = useRef(null), vid = useRef(null);
  const [playing, setPlaying] = useState(false), [t, setT] = useState(0), [dur, setDur] = useState(0), [muted, setMuted] = useState(false), [ended, setEnded] = useState(false);
  const toggle = () => { const v = vid.current; if (!v) { setPlaying(p => !p); setEnded(false); return; } if (v.paused) v.play().catch(() => {}); else v.pause(); };
  const full = () => { const el = box.current; if (!el) return; if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen(); };
  const pct = dur ? Math.min(100, (t / dur) * 100) : 0;
  const Btn = ({ label, onClick, children, size = 40 }) => (
    <button type="button" aria-label={label} onClick={onClick} style={{ width: size, height: size, borderRadius: '50%', border: 0, padding: 0, cursor: 'pointer', background: 'oklch(1 0 0 / 0.14)', color: '#fff', fontSize: size * 0.5, display: 'grid', placeItems: 'center', flex: 'none' }}>{children}</button>
  );
  return (
    <figure style={{ margin: 0, width, ...style }} {...rest}>
      <div ref={box} style={{ position: 'relative', aspectRatio: ratio, borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '4px solid var(--cream-300)', background: 'var(--ink-900)', boxShadow: '0 6px 0 var(--cream-300), 0 12px 24px oklch(0.22 0.05 60 / 0.25)' }}>
        {src ? (
          <video ref={vid} src={src} poster={poster} playsInline preload="metadata" muted={muted}
            onPlay={() => { setPlaying(true); setEnded(false); }} onPause={() => setPlaying(false)} onTimeUpdate={e => setT(e.target.currentTime)} onLoadedMetadata={e => setDur(e.target.duration)} onEnded={() => { setPlaying(false); setEnded(true); }}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#000' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'repeating-linear-gradient(-45deg, oklch(1 0 0 / 0.08) 0 12px, transparent 12px 24px), var(--ink-900)', font: '600 12px/1.3 ui-monospace, Menlo, monospace', color: 'oklch(1 0 0 / 0.8)', textAlign: 'center' }}>video<br />(contributor upload)</div>
        )}
        {!playing && (
          <button type="button" aria-label={ended ? 'Play again' : 'Play video'} onClick={toggle}
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 76, height: 76, borderRadius: '50%', border: '4px solid #fff', cursor: 'pointer', padding: 0,
              background: 'linear-gradient(180deg, var(--blue-300), var(--blue-500) 50%)', boxShadow: '0 6px 0 var(--blue-700), 0 12px 18px oklch(0 0 0 / 0.35)', color: '#fff', fontSize: 34, display: 'grid', placeItems: 'center', textShadow: '0 2px 0 var(--blue-700)' }}>
            <i className={'ph-fill ph-' + (ended ? 'arrow-counter-clockwise' : 'play')} aria-hidden="true" />
          </button>
        )}
        <div style={{ position: 'absolute', left: 10, right: 10, bottom: 10, height: 48, borderRadius: 999, background: 'var(--surface-hud)', border: '2px solid oklch(0.2 0.05 55 / 0.9)', display: 'flex', alignItems: 'center', gap: 8, padding: '0 8px', boxSizing: 'border-box' }}>
          <Btn label={playing ? 'Pause' : 'Play'} onClick={toggle}><i className={'ph-fill ph-' + (playing ? 'pause' : 'play')} aria-hidden="true" /></Btn>
          <div style={{ position: 'relative', flex: 1, height: 28 }}>
            <div style={{ position: 'absolute', inset: '9px 0', borderRadius: 999, background: 'oklch(0 0 0 / 0.45)', overflow: 'hidden' }}><div style={{ width: pct + '%', height: '100%', background: 'linear-gradient(180deg, var(--gold-300), var(--gold-500) 60%, var(--gold-700))', borderRadius: 999 }} /></div>
            <input type="range" min={0} max={dur || 1} step={0.1} value={t} onChange={e => { const v = Number(e.target.value); setT(v); if (vid.current) vid.current.currentTime = v; }} aria-label="Seek" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'pointer' }} />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, color: '#fff', letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)', flex: 'none' }}>{fmt(t) + ' / ' + fmt(dur)}</span>
          <Btn label={muted ? 'Unmute' : 'Mute'} onClick={() => setMuted(m => !m)} size={36}><i className={'ph-fill ph-' + (muted ? 'speaker-slash' : 'speaker-high')} aria-hidden="true" /></Btn>
          <Btn label="Full screen" onClick={full} size={36}><i className="ph-bold ph-arrows-out" aria-hidden="true" /></Btn>
        </div>
      </div>
      {caption && <figcaption style={{ marginTop: 8, fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13, color: 'var(--ink-500)' }}>{caption}</figcaption>}
    </figure>
  );
}

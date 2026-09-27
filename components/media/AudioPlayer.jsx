import React, { useEffect, useRef, useState } from 'react';

const fmt = s => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };

export function AudioPlayer({ src, title = 'Voice note', duration = 42, tone = 'teal', style, ...rest }) {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false), [t, setT] = useState(0), [dur, setDur] = useState(duration), [down, setDown] = useState(false);
  useEffect(() => { // demo clock when there is no real source
    if (src || !playing) return;
    const id = setInterval(() => setT(x => { if (x + 0.25 >= dur) { setPlaying(false); return dur; } return x + 0.25; }), 250);
    return () => clearInterval(id);
  }, [playing, src, dur]);
  useEffect(() => { const a = audio.current; if (!a) return; if (playing) a.play().catch(() => setPlaying(false)); else a.pause(); }, [playing]);
  const seek = v => { setT(v); if (audio.current) audio.current.currentTime = v; };
  const pct = dur ? Math.min(100, (t / dur) * 100) : 0;
  const c = ['var(--' + tone + '-300)', 'var(--' + tone + '-500)', 'var(--' + tone + '-700)'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px 12px 12px', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(180deg, #fff, var(--cream-100))', border: '3px solid var(--cream-300)',
      boxShadow: '0 4px 0 var(--cream-300), 0 8px 16px oklch(0.22 0.05 60 / 0.15)', fontFamily: 'var(--font-ui)', minWidth: 280, boxSizing: 'border-box', ...style }} {...rest}>
      {src && <audio ref={audio} src={src} preload="metadata" onLoadedMetadata={e => setDur(e.target.duration || duration)} onTimeUpdate={e => setT(e.target.currentTime)} onEnded={() => setPlaying(false)} />}
      <button type="button" aria-label={playing ? 'Pause' : 'Play'} onClick={() => { if (!playing && t >= dur) setT(0); setPlaying(p => !p); }}
        onPointerDown={() => setDown(true)} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)}
        style={{ width: 56, height: 56, borderRadius: '50%', border: 0, padding: 0, flex: 'none', cursor: 'pointer', background: 'linear-gradient(180deg, ' + c[0] + ', ' + c[1] + ' 45%)',
          boxShadow: '0 ' + (down ? 1 : 5) + 'px 0 ' + c[2] + ', inset 0 2px 0 oklch(1 0 0 / 0.45)', transform: 'translateY(' + (down ? 4 : 0) + 'px)', transition: 'transform var(--dur-fast), box-shadow var(--dur-fast)',
          color: '#fff', fontSize: 26, display: 'grid', placeItems: 'center', textShadow: '0 2px 0 ' + c[2], WebkitTapHighlightColor: 'transparent' }}>
        <i className={'ph-fill ph-' + (playing ? 'pause' : 'play')} aria-hidden="true" />
      </button>
      <div style={{ flex: 1, minWidth: 0, display: 'grid', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink-900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--ink-700)', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em', flex: 'none' }}>{fmt(t) + ' / ' + fmt(dur)}</span>
        </div>
        <div style={{ position: 'relative', height: 22 }}>
          <div style={{ position: 'absolute', inset: '4px 0', borderRadius: 999, background: 'var(--cream-200)', boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.12)', overflow: 'hidden' }}>
            <div style={{ width: pct + '%', height: '100%', borderRadius: 999, background: 'linear-gradient(180deg, ' + c[0] + ', ' + c[1] + ' 60%, ' + c[2] + ')', minWidth: pct > 0 ? 14 : 0 }} />
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', top: -1, left: 'calc(' + pct + '% - ' + (pct / 100) * 24 + 'px)', width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(180deg, #fff, var(--cream-100))', boxShadow: '0 2px 0 ' + c[2] + ', 0 3px 6px oklch(0 0 0 / 0.25)', pointerEvents: 'none' }} />
          <input type="range" min={0} max={dur || 1} step={0.1} value={t} onChange={e => seek(Number(e.target.value))} aria-label={'Seek ' + title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', margin: 0, opacity: 0, cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
}

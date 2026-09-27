import React from 'react';

const TYPE = { photo: ['image', 'Add photo'], video: ['video-camera', 'Add video'], audio: ['microphone', 'Add audio'], text: ['article', 'Add text'] };

export function UploadTile({ type = 'photo', state = 'idle', progress = 0, name, thumb, onAdd, onRetry, onRemove, size = 104, style, ...rest }) {
  const [glyph, addLabel] = TYPE[type] || TYPE.photo;
  const pct = Math.round(Math.max(0, Math.min(1, progress)) * 100);
  const frame = { position: 'relative', width: size, height: size, borderRadius: 'var(--radius-md)', boxSizing: 'border-box', flex: 'none', fontFamily: 'var(--font-ui)' };
  if (state === 'idle') return (
    <button type="button" onClick={onAdd} aria-label={addLabel} style={{ ...frame, border: '3px dashed var(--stone-500)', background: 'var(--cream-50)', cursor: 'pointer', display: 'grid', placeItems: 'center', alignContent: 'center', gap: 4, color: 'var(--ink-700)', fontWeight: 700, fontSize: 12, ...style }} {...rest}>
      <i className="ph-bold ph-plus" aria-hidden="true" style={{ fontSize: 24, color: 'var(--teal-700)' }} /><span>{addLabel}</span>
    </button>
  );
  const err = state === 'error', up = state === 'uploading', done = state === 'done';
  const edge = err ? 'var(--coral-500)' : done ? 'var(--green-500)' : 'var(--cream-300)';
  const shade = err ? 'var(--coral-700)' : done ? 'var(--green-700)' : 'var(--cream-300)';
  return (
    <div style={{ ...frame, ...style }} {...rest}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', overflow: 'hidden', border: '3px solid ' + edge, background: thumb ? 'url(' + thumb + ') center / cover' : 'var(--cream-200)', boxShadow: '0 3px 0 ' + shade }}>
        {!thumb && <i aria-hidden="true" className={'ph-fill ph-' + glyph} style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontSize: size * 0.36, color: 'var(--stone-500)' }} />}
        {up && (
          <div style={{ position: 'absolute', inset: 0, background: 'oklch(1 0 0 / 0.6)', display: 'grid', placeItems: 'center', alignContent: 'center', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--ink-900)' }}>{pct + '%'}</span>
            <span role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Uploading" style={{ width: '70%', height: 10, borderRadius: 999, background: 'var(--cream-300)', overflow: 'hidden', display: 'block' }}><span style={{ display: 'block', width: pct + '%', height: '100%', background: 'linear-gradient(180deg, var(--teal-300), var(--teal-500))', borderRadius: 999 }} /></span>
          </div>
        )}
        {err && (
          <div role="alert" style={{ position: 'absolute', inset: 0, background: 'oklch(0.94 0.04 30 / 0.88)', display: 'grid', placeItems: 'center', alignContent: 'center', gap: 6, color: 'var(--coral-700)' }}>
            <i className="ph-fill ph-warning" aria-hidden="true" style={{ fontSize: 24 }} /><span className="mp-sr">Upload failed</span>
            <button type="button" onClick={onRetry} style={{ height: 30, padding: '0 12px', border: 0, borderRadius: 10, cursor: 'pointer', background: 'linear-gradient(180deg, var(--coral-300), var(--coral-500) 45%)', boxShadow: '0 3px 0 var(--coral-700)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: 12, letterSpacing: '0.04em', textShadow: '0 1px 0 var(--coral-700)' }}>RETRY</button>
          </div>
        )}
      </div>
      {!err && <span aria-hidden="true" style={{ position: 'absolute', left: 6, bottom: 6, width: 24, height: 24, borderRadius: 8, background: 'var(--surface-hud)', color: '#fff', fontSize: 14, display: 'grid', placeItems: 'center' }}><i className={'ph-fill ph-' + glyph} /></span>}
      {done && <span role="img" aria-label="Uploaded" style={{ position: 'absolute', right: -6, bottom: -6, width: 24, height: 24, borderRadius: '50%', background: 'var(--green-500)', border: '2px solid #fff', color: '#fff', fontSize: 13, display: 'grid', placeItems: 'center', boxShadow: '0 2px 0 var(--green-700)' }}><i className="ph-bold ph-check" aria-hidden="true" /></span>}
      {onRemove && <button type="button" aria-label="Remove" onClick={onRemove} style={{ position: 'absolute', right: -8, top: -8, width: 28, height: 28, borderRadius: '50%', border: '2px solid #fff', padding: 0, cursor: 'pointer', background: 'linear-gradient(180deg, var(--coral-300), var(--coral-500) 50%)', boxShadow: '0 2px 0 var(--coral-700)', color: '#fff', fontSize: 14, display: 'grid', placeItems: 'center' }}><i className="ph-bold ph-x" aria-hidden="true" /></button>}
      {name && <span style={{ position: 'absolute', left: -6, right: -6, top: '100%', marginTop: 8, fontWeight: 600, fontSize: 11, color: 'var(--ink-500)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'center' }}>{name}</span>}
    </div>
  );
}

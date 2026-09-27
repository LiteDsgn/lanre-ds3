// World map: winding trail with level pucks over a scrolling meadow.
window.Kit = window.Kit || {};
Kit.smoothPath = function smoothPath(pts) {
  let d = 'M ' + pts[0][0] + ' ' + pts[0][1];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ' C ' + c1.join(' ') + ', ' + c2.join(' ') + ', ' + p2.join(' ');
  }
  return d;
};
Kit.WAYPOINTS = [[86, 1040], [300, 940], [92, 830], [300, 720], [92, 610], [300, 500], [92, 390], [300, 280], [160, 170]];

function Bush({ x, y, s = 70, tone = 0 }) {
  const tops = ['var(--green-300)', 'var(--green-100)'];
  return <div aria-hidden="true" style={{ position: 'absolute', left: x, top: y, width: s, height: s * 0.8, borderRadius: '50% 50% 45% 45%', background: 'radial-gradient(ellipse at 40% 25%, ' + tops[tone] + ', var(--green-500) 55%, var(--green-700) 100%)', boxShadow: '0 8px 0 oklch(0.40 0.10 142 / 0.35), inset 0 -6px 10px oklch(0 0 0 / 0.08)' }} />;
}
function Rock({ x, y, s = 34 }) {
  return <div aria-hidden="true" style={{ position: 'absolute', left: x, top: y, width: s, height: s * 0.7, borderRadius: '50%', background: 'radial-gradient(ellipse at 40% 30%, var(--stone-100), var(--stone-300) 60%, var(--stone-500))', boxShadow: '0 4px 0 var(--stone-700), 0 8px 8px oklch(0 0 0 / 0.2)' }} />;
}
function Flower({ x, y, c = 'var(--coral-300)' }) {
  return <div aria-hidden="true" style={{ position: 'absolute', left: x, top: y, width: 10, height: 10, borderRadius: '50%', background: c, boxShadow: '14px 6px 0 -1px ' + c + ', 6px 16px 0 -2px #fff' }} />;
}
function Slot({ x, y, w, h, label }) {
  return <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, borderRadius: 'var(--radius-lg)', border: '3px dashed oklch(1 0 0 / 0.7)', background: 'repeating-linear-gradient(-45deg, oklch(1 0 0 / 0.18) 0 10px, transparent 10px 20px)', display: 'grid', placeItems: 'center', textAlign: 'center', font: '600 11px/1.3 ui-monospace, Menlo, monospace', color: '#fff', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)', padding: 8, boxSizing: 'border-box' }}>{label}</div>;
}

Kit.MapScreen = function MapScreen({ progress, onSelectLevel }) {
  const { LevelNode, OutlineText, Tag } = window.MP;
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.scrollTop = ref.current.scrollHeight; }, []);
  const pts = Kit.WAYPOINTS, W = 390, H = 1240;
  const d = Kit.smoothPath(pts);
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden', background: 'var(--bg-meadow)' }}>
      <div style={{ position: 'relative', width: W, height: H }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 30% at 20% 30%, oklch(1 0 0 / 0.10), transparent), radial-gradient(ellipse 50% 25% at 80% 70%, oklch(1 0 0 / 0.10), transparent)' }} />
        <svg aria-hidden="true" width={W} height={H} viewBox={'0 0 ' + W + ' ' + H} style={{ position: 'absolute', inset: 0, display: 'block' }}>
          <path d={d} fill="none" stroke="oklch(0.62 0.12 60 / 0.35)" strokeWidth="58" strokeLinecap="round" transform="translate(0 6)" />
          <path d={d} fill="none" stroke="var(--wood-300)" strokeWidth="56" strokeLinecap="round" />
          <path d={d} fill="none" stroke="var(--cream-200)" strokeWidth="46" strokeLinecap="round" />
          <path d={d} fill="none" stroke="oklch(1 0 0 / 0.55)" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 16" />
        </svg>
        <Bush x={-20} y={70} s={110} /><Bush x={320} y={60} s={90} tone={1} /><Bush x={330} y={380} s={70} /><Bush x={-10} y={480} s={84} tone={1} />
        <Bush x={320} y={830} s={96} /><Bush x={-16} y={930} s={80} /><Bush x={190} y={1110} s={64} tone={1} /><Bush x={200} y={350} s={56} /><Bush x={300} y={1150} s={76} />
        <Rock x={200} y={240} /><Rock x={40} y={710} s={28} /><Rock x={340} y={650} s={30} /><Rock x={230} y={890} s={26} /><Rock x={30} y={1160} s={30} />
        <Flower x={40} y={350} /><Flower x={250} y={470} c="var(--gold-300)" /><Flower x={340} y={570} /><Flower x={60} y={1100} c="var(--berry-300)" /><Flower x={210} y={190} c="var(--gold-300)" /><Flower x={180} y={1190} />
        <Slot x={196} y={748} w={168} h={110} label={'hero cottage illustration'} />
        <div style={{ position: 'absolute', left: 110, top: 96, display: 'grid', justifyItems: 'center', gap: 6 }}>
          <Tag tone="wood">Next area</Tag>
          <OutlineText size="sm" stroke="wood" color="cream">Pine Ridge</OutlineText>
        </div>
        {pts.slice(0, 8).map((p, i) => {
          const n = i + 1, size = 84, h = Math.round(size * 0.62);
          const state = n < progress.current ? 'complete' : n === progress.current ? 'current' : 'locked';
          return <LevelNode key={n} number={n} state={state} stars={progress.stars[n] || 0} size={size} onClick={() => onSelectLevel(n)}
            style={{ position: 'absolute', left: p[0] - (size + 8) / 2, top: p[1] - h / 2 - Math.round(size * 0.34) }} />;
        })}
      </div>
    </div>
  );
};

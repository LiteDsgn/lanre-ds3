// Expedition board: a ring of 3D tiles, a player token, a roll button that spends energy.
window.Kit = window.Kit || {};
Kit.RING = (() => { // 16 perimeter cells of a 5x5 grid, clockwise from bottom-left
  const cells = [];
  for (let r = 4; r >= 0; r--) cells.push([0, r]);
  for (let c = 1; c <= 4; c++) cells.push([c, 0]);
  for (let r = 1; r <= 4; r++) cells.push([4, r]);
  for (let c = 3; c >= 1; c--) cells.push([c, 4]);
  return cells;
})();
Kit.TILE_KINDS = ['start', 'sand', 'reward', 'sand', 'hazard', 'sand', 'reward', 'sand', 'grass', 'reward', 'sand', 'hazard', 'sand', 'reward', 'sand', 'grass'];

Kit.BoardScreen = function BoardScreen({ board, onRoll, rolling }) {
  const { Tile, GameIcon, OutlineText, Tag, ProgressBar, CurrencyPill, IconButton, TimerChip } = window.MP;
  const S = 56, G = 6, TOP = 100;
  const content = (kind, i) => {
    if (kind === 'start') return 'GO';
    if (kind === 'reward') return <GameIcon kind={i % 3 === 0 ? 'gem' : 'coin'} size={26} />;
    if (kind === 'hazard') return <GameIcon name="skull" tone="white" size={26} />;
    if (kind === 'grass') return <GameIcon kind="leaf" size={24} />;
    return <span style={{ opacity: 0.85 }}>?</span>;
  };
  const pos = Kit.RING[board.pos];
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-meadow)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 40% at 50% 60%, oklch(1 0 0 / 0.12), transparent)' }} />
      <div style={{ position: 'absolute', top: 66, left: 0, right: 0, display: 'grid', justifyItems: 'center', gap: 6 }}>
        <OutlineText size="lg">Autumn Trail</OutlineText>
        <div style={{ display: 'flex', gap: 8 }}><Tag tone="coral">Event</Tag><TimerChip time="6d 04h" size="sm" /></div>
      </div>
      <div style={{ position: 'absolute', top: 150, left: 16, right: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <ProgressBar value={board.points} max={20} tone="green" size="md" label={board.points + '/20'} cap={<GameIcon kind="footprints" size={36} />} style={{ flex: 1 }} />
        <IconButton variant="primary" size="sm" shape="square" badge><GameIcon kind="gift" size={18} outline={false} shadow={false} tone="white" /></IconButton>
      </div>
      <div style={{ position: 'absolute', top: 200, left: (390 - (5 * S + 4 * G)) / 2, width: 5 * S + 4 * G, height: 5 * (S + 12) }}>
        <div style={{ position: 'absolute', left: S + G, top: S + G + 4, width: 3 * S + 2 * G, height: 3 * S + 2 * G - 8, borderRadius: 'var(--radius-lg)', border: '3px dashed oklch(1 0 0 / 0.6)', background: 'repeating-linear-gradient(-45deg, oklch(1 0 0 / 0.16) 0 10px, transparent 10px 20px)', display: 'grid', placeItems: 'center', textAlign: 'center', font: '600 11px/1.3 ui-monospace, Menlo, monospace', color: '#fff', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)' }}>landmark illustration<br />(pagoda / lighthouse)</div>
        {Kit.RING.map(([c, r], i) => {
          const kind = Kit.TILE_KINDS[i];
          const reachable = !rolling && board.energy > 0 && i === (board.pos + board.lastRoll) % 16 && board.lastRoll > 0;
          return <Tile key={i} variant={kind} size={S} content={content(kind, i)} active={board.pos === i} style={{ position: 'absolute', left: c * (S + G), top: r * (S + G + 6) }} />;
        })}
        <div aria-label="You" style={{ position: 'absolute', left: pos[0] * (S + G) + S / 2 - 22, top: pos[1] * (S + G + 6) - 30, width: 44, height: 44, borderRadius: '50%', border: '3px solid #fff', background: 'linear-gradient(180deg, var(--coral-300), var(--coral-500))', boxShadow: '0 4px 0 var(--coral-700), 0 8px 12px oklch(0 0 0 / 0.3)', display: 'grid', placeItems: 'center', transition: 'left var(--dur-slow) var(--ease-bounce), top var(--dur-slow) var(--ease-bounce)', zIndex: 3, animation: 'mp-float var(--dur-idle) ease-in-out infinite' }}>
          <GameIcon name="user" tone="white" size={24} outline={false} shadow={false} />
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 104, display: 'grid', justifyItems: 'center', gap: 10 }}>
        <div style={{ position: 'relative' }}>
          <button type="button" onClick={onRoll} disabled={rolling || board.energy <= 0} aria-label="Roll the dice"
            style={{ width: 96, height: 96, borderRadius: '50%', border: '5px solid #fff', padding: 0, cursor: rolling ? 'default' : 'pointer', appearance: 'none',
              background: 'radial-gradient(circle at 50% 30%, var(--coral-300), var(--coral-500) 60%)', boxShadow: '0 8px 0 var(--coral-700), 0 14px 18px oklch(0 0 0 / 0.3), inset 0 3px 0 oklch(1 0 0 / 0.5)',
              display: 'grid', placeItems: 'center', alignContent: 'center', color: '#fff', transform: rolling ? 'translateY(6px)' : 'none', transition: 'transform var(--dur-fast)', opacity: board.energy <= 0 ? 0.6 : 1 }}>
            <i className={'ph-fill ph-dice-' + ['one', 'two', 'three', 'four', 'five', 'six'][Math.max(0, (board.lastRoll || 5) - 1)]} style={{ fontSize: 40, lineHeight: 1, animation: rolling ? 'mp-sparkle 0.3s linear infinite' : 'none' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '0.05em', textShadow: '0 2px 0 var(--coral-700)' }}>{rolling ? '…' : 'GO'}</span>
          </button>
        </div>
        <CurrencyPill kind="energy" value={board.energy + '/40'} size="sm" minWidth={90} />
      </div>
    </div>
  );
};

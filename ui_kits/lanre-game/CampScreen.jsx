// Camp: collection / merge grid with selection, boost meter, hatch CTA.
window.Kit = window.Kit || {};
Kit.CampScreen = function CampScreen({ camp, onSelect, onHatch, onBuySlot }) {
  const { ItemCell, GameIcon, OutlineText, ProgressBar, TimerChip, Button, IconButton, CurrencyPill } = window.MP;
  const glyph = { egg: 'egg', leaf: 'leaf', gem: 'gem', fire: 'fire', key: 'key', flower: 'flower' };
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-meadow)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: 60, left: 16, right: 16, height: 150, borderRadius: '50% / 60%', background: 'radial-gradient(ellipse at 50% 40%, var(--teal-300), var(--teal-500) 70%)', border: '6px solid var(--cream-200)', boxShadow: 'inset 0 6px 14px oklch(0 0 0 / 0.15), 0 4px 0 var(--wood-300)' }} />
      <div style={{ position: 'absolute', top: 96, left: 0, right: 0, display: 'grid', justifyItems: 'center', gap: 6, textAlign: 'center', font: '600 11px/1.3 ui-monospace, Menlo, monospace', color: '#fff', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)' }}>
        <OutlineText size="md" stroke="blue">Camp Pond</OutlineText>
        <span>creature illustrations swim here</span>
      </div>
      <div style={{ position: 'absolute', top: 222, left: 0, right: 0, display: 'grid', justifyItems: 'center', gap: 6 }}>
        <ProgressBar value={camp.boost} tone="berry" size="lg" width={200} label="x2 Boost" cap={<GameIcon kind="sparkle" size={38} />} />
        <TimerChip time={camp.boostTime} size="sm" urgent={camp.boost < 0.2} />
      </div>
      <div style={{ position: 'absolute', top: 300, left: (390 - (4 * 72 + 3 * 8)) / 2, display: 'grid', gridTemplateColumns: 'repeat(4, 72px)', gap: 8 }}>
        {camp.cells.map((cell, i) => {
          if (!cell) return <ItemCell key={i} state="empty" onClick={() => onSelect(i)} label="Empty slot" />;
          if (cell.locked) return <ItemCell key={i} state="locked" />;
          if (cell.add) return <ItemCell key={i} state="add" onClick={onBuySlot} label="Buy slot" />;
          return <ItemCell key={i} state="filled" content={<GameIcon kind={glyph[cell.kind] ? undefined : 'egg'} name={glyph[cell.kind] === 'flower' ? 'flower' : undefined} kind={glyph[cell.kind] && cell.kind !== 'flower' ? cell.kind : undefined} tone={cell.kind === 'flower' ? 'coral' : undefined} size={44} />}
            count={cell.count} selected={camp.selected === i} dim={cell.dim} onClick={() => onSelect(i)} label={cell.kind + ' level ' + cell.count} />;
        })}
      </div>
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 104, display: 'flex', alignItems: 'center', gap: 12 }}>
        <IconButton variant="ghost" size="lg" aria-label="Sell"><GameIcon kind="trash" size={28} outline={false} shadow={false} tone="ink" /></IconButton>
        <Button variant="primary" size="lg" block onClick={onHatch} style={{ flex: 1 }} trailing={<CurrencyPill kind="coin" value="1,200" size="sm" tone="light" minWidth={84} style={{ marginLeft: 6 }} />}>Hatch</Button>
      </div>
    </div>
  );
};

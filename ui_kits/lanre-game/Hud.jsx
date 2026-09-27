// Fixed top strip: level star + XP, currency pills, settings. Reads components from window.MP (filled by tools/ds-loader.js).
window.Kit = window.Kit || {};
Kit.Hud = function Hud({ level, xp, coins, gems, onShop, onSettings }) {
  const { CurrencyPill, ProgressBar, GameIcon, IconButton } = window.MP;
  const star = (
    <span style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
      <GameIcon kind="star" size={44} />
      <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', paddingTop: 2, fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--gold-900)' }}>{level}</span>
    </span>
  );
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'var(--layout-hud-top)', padding: '10px 14px 0 12px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', gap: 10, zIndex: 5 }}>
      <ProgressBar value={xp} tone="gold" size="sm" width={104} cap={star} />
      <div style={{ flex: 1 }} />
      <CurrencyPill kind="coin" value={coins} size="sm" minWidth={92} onAdd={onShop} />
      <CurrencyPill kind="gem" value={gems} size="sm" minWidth={64} onAdd={onShop} style={{ marginLeft: 6 }} />
      <IconButton variant="ghost" size="sm" onClick={onSettings} label={undefined} style={{ marginLeft: 6 }}><i className="ph-fill ph-gear" /></IconButton>
    </div>
  );
};

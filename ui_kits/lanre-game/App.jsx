// Shell: HUD + active screen + bottom bar + dialogs + toast. State is fake but interactive.
window.Kit = window.Kit || {};

function App() {
  const { IconButton, Button, Toast, GameIcon, Badge } = window.MP;
  const [screen, setScreen] = React.useState('map');
  const [dialog, setDialog] = React.useState(null);
  const [selected, setSelected] = React.useState(4);
  const [wallet, setWallet] = React.useState({ coins: 12480, gems: 36, level: 12, xp: 0.42 });
  const [progress, setProgress] = React.useState({ current: 4, stars: { 1: 3, 2: 2, 3: 3 } });
  const [board, setBoard] = React.useState({ pos: 0, energy: 32, points: 6, lastRoll: 0 });
  const [rolling, setRolling] = React.useState(false);
  const [claimed, setClaimed] = React.useState(2);
  const [settings, setSettings] = React.useState({ sound: true, vibration: false, notify: true, music: 70, sfx: 45 });
  const [camp, setCamp] = React.useState({ boost: 0.85, boostTime: '00:42', selected: null, cells: [
    { kind: 'egg', count: 1 }, { kind: 'leaf', count: 4, dim: true }, { kind: 'fire', count: 6, dim: true }, { kind: 'gem', count: 2 },
    { kind: 'egg', count: 1 }, { kind: 'key', count: 3 }, { kind: 'flower', count: 2 }, { kind: 'leaf', count: 1, dim: true },
    { kind: 'gem', count: 5 }, null, { kind: 'egg', count: 2 }, null,
    { kind: 'leaf', count: 4 }, null, { locked: true }, { add: true }] });
  const [toast, setToast] = React.useState(null);
  const toastTimer = React.useRef(null);
  const say = (t) => { setToast(t); clearTimeout(toastTimer.current); toastTimer.current = setTimeout(() => setToast(null), 1700); };
  const fmt = n => n >= 1000 ? (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k' : String(n);

  const selectLevel = n => { if (n <= progress.current) { setSelected(n); setDialog('level'); } };
  const finishLevel = () => {
    const earned = 3;
    setProgress(p => ({ current: Math.max(p.current, selected === p.current ? p.current + 1 : p.current), stars: { ...p.stars, [selected]: Math.max(p.stars[selected] || 0, earned) } }));
    setWallet(w => ({ ...w, coins: w.coins + 32, xp: Math.min(1, w.xp + 0.18) }));
    setDialog('complete');
  };
  const roll = () => {
    if (rolling || board.energy <= 0) return;
    setRolling(true);
    const r = 1 + Math.floor(Math.random() * 6);
    setTimeout(() => {
      setBoard(b => {
        const pos = (b.pos + r) % 16; const kind = Kit.TILE_KINDS[pos];
        let coins = 0, gems = 0, energy = b.energy - 1, points = b.points + 1;
        if (kind === 'reward') { if (pos % 3 === 0) { gems = 5; say({ icon: <GameIcon kind="gem" size={32} />, message: '+5', detail: 'Gems found', tone: 'blue' }); } else { coins = 250; say({ icon: <GameIcon kind="coin" size={32} />, message: '+250', detail: 'Coins found' }); } }
        else if (kind === 'hazard') { energy = Math.max(0, energy - 3); say({ icon: <GameIcon kind="energy" size={32} />, message: '-3', detail: 'Thorns! Energy lost', tone: 'coral' }); }
        else if (kind === 'grass') { points += 2; say({ icon: <GameIcon kind="leaf" size={32} />, message: '+2', detail: 'Trail points', tone: 'teal' }); }
        else if (kind === 'start') { coins = 500; say({ icon: <GameIcon kind="chest" size={32} />, message: '+500', detail: 'Lap bonus!' }); }
        setWallet(w => ({ ...w, coins: w.coins + coins, gems: w.gems + gems }));
        return { pos, energy, points: Math.min(20, points), lastRoll: r };
      });
      setRolling(false);
    }, 500);
  };
  const claim = () => { if (claimed >= 7) return; const bonus = [1000, 5000, 0, 100, 10, 50, 50][claimed]; setClaimed(c => c + 1); setWallet(w => ({ ...w, coins: w.coins + (claimed === 4 || claimed === 5 ? 0 : bonus), gems: w.gems + (claimed === 4 || claimed === 5 ? bonus : 0) })); say({ icon: <GameIcon kind={claimed === 2 ? 'gift' : 'coin'} size={32} />, message: 'Day ' + (claimed + 1), detail: 'Reward claimed' }); };
  const buy = (coins, gems) => { setWallet(w => ({ ...w, coins: w.coins + coins, gems: w.gems + gems })); say({ icon: <GameIcon kind="check" size={28} tone="teal" />, message: 'Purchased', detail: 'Thanks for supporting the trail', tone: 'teal' }); };
  const selectCell = i => setCamp(c => {
    const cell = c.cells[i];
    if (c.selected == null) return { ...c, selected: cell ? i : null };
    if (c.selected === i) return { ...c, selected: null };
    const a = c.cells[c.selected], b = cell;
    if (a && b && a.kind === b.kind && a.count === b.count) {
      const cells = c.cells.slice(); cells[i] = { kind: a.kind, count: a.count + 1 }; cells[c.selected] = null;
      say({ icon: <GameIcon kind="sparkle" size={32} />, message: 'Merged!', detail: a.kind + ' reached level ' + (a.count + 1), tone: 'berry' });
      return { ...c, cells, selected: null };
    }
    if (a && !b) { const cells = c.cells.slice(); cells[i] = a; cells[c.selected] = null; return { ...c, cells, selected: null }; }
    return { ...c, selected: cell ? i : null };
  });

  const nav = [['shop', 'Shop', 'storefront'], ['map', 'Map', 'map-trifold'], ['board', 'Trail', 'footprints'], ['camp', 'Camp', 'tent']];
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {screen === 'map' && <Kit.MapScreen progress={progress} onSelectLevel={selectLevel} />}
      {screen === 'board' && <Kit.BoardScreen board={board} onRoll={roll} rolling={rolling} />}
      {screen === 'camp' && <Kit.CampScreen camp={camp} onSelect={selectCell} onHatch={() => say({ icon: <GameIcon kind="egg" size={32} />, message: 'Hatching…', detail: '-1,200 coins' })} onBuySlot={() => setDialog('shop')} />}
      <Kit.Hud level={wallet.level} xp={wallet.xp} coins={fmt(wallet.coins)} gems={wallet.gems} onShop={() => setDialog('shop')} onSettings={() => setDialog('settings')} />

      {screen === 'map' && (
        <div style={{ position: 'absolute', left: 12, top: 76, display: 'grid', gap: 14, zIndex: 4 }}>
          <IconButton variant="play" shape="square" label="Quests" badge={2} onClick={() => say({ icon: <GameIcon kind="quest" size={30} />, message: '2 quests', detail: 'Collect 12 gems · Win 3 levels', tone: 'white' })}><GameIcon kind="quest" size={26} outline={false} shadow={false} tone="white" /></IconButton>
          <IconButton variant="premium" shape="square" label="Spin" onClick={() => say({ icon: <GameIcon kind="spin" size={30} />, message: 'Spin', detail: 'Next free spin in 2h 10m', tone: 'berry' })}><GameIcon kind="spin" size={26} outline={false} shadow={false} tone="white" /></IconButton>
        </div>
      )}
      {screen === 'map' && (
        <div style={{ position: 'absolute', right: 12, top: 76, zIndex: 4 }}>
          <IconButton variant="primary" shape="square" label="Daily" badge={claimed < 7} onClick={() => setDialog('daily')}><GameIcon kind="gift" size={26} outline={false} shadow={false} tone="white" /></IconButton>
        </div>
      )}
      {screen === 'map' && (
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 104, display: 'grid', placeItems: 'center', zIndex: 4 }}>
          <Button variant="play" size="lg" onClick={() => selectLevel(progress.current)} icon={<GameIcon kind="play" size={22} outline={false} shadow={false} />} style={{ minWidth: 200 }}>Level {progress.current}</Button>
        </div>
      )}

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 'var(--layout-bottom-bar)', zIndex: 6, background: 'linear-gradient(180deg, var(--wood-500), var(--wood-700))', borderTop: '4px solid var(--wood-300)', boxShadow: '0 -6px 16px oklch(0 0 0 / 0.25), inset 0 -6px 0 var(--wood-900)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', padding: '10px 8px 0', boxSizing: 'border-box' }}>
        {nav.map(([key, label, glyph]) => {
          const active = screen === key;
          return <IconButton key={key} variant={active ? 'primary' : 'ghost'} shape="square" label={label} onClick={() => key === 'shop' ? setDialog('shop') : setScreen(key)}>
            <GameIcon name={glyph} size={26} outline={false} shadow={false} tone={active ? 'ink' : 'wood'} />
          </IconButton>;
        })}
      </div>

      {toast && <div style={{ position: 'absolute', left: 0, right: 0, ...(screen === 'board' ? { top: 196 } : { bottom: 180 }), display: 'grid', placeItems: 'center', zIndex: 30, pointerEvents: 'none' }}><Toast key={toast.message + toast.detail} {...toast} /></div>}

      {dialog === 'level' && <Kit.Scrim onClose={() => setDialog(null)}><Kit.LevelStartDialog level={selected} stars={progress.stars[selected] || 0} onPlay={finishLevel} onClose={() => setDialog(null)} /></Kit.Scrim>}
      {dialog === 'complete' && <Kit.Scrim><Kit.LevelCompleteDialog level={selected} stars={3} score="14 000" reward={32} onOk={() => setDialog(null)} /></Kit.Scrim>}
      {dialog === 'daily' && <Kit.Scrim onClose={() => setDialog(null)}><Kit.DailyRewardDialog claimed={claimed} onClaim={claim} onClose={() => setDialog(null)} /></Kit.Scrim>}
      {dialog === 'shop' && <Kit.Scrim onClose={() => setDialog(null)}><Kit.ShopDialog onBuy={buy} onClose={() => setDialog(null)} /></Kit.Scrim>}
      {dialog === 'settings' && <Kit.Scrim onClose={() => setDialog(null)}><Kit.SettingsDialog settings={settings} onChange={p => setSettings(s => ({ ...s, ...p }))} onClose={() => setDialog(null)} /></Kit.Scrim>}
    </div>
  );
}

window.MPReady.then(() => { ReactDOM.createRoot(document.getElementById('root')).render(<App />); });

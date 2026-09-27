// Modal panels: level start, level complete, daily reward, shop, settings.
window.Kit = window.Kit || {};

Kit.Scrim = function Scrim({ children, onClose }) {
  return (
    <div onClick={e => { if (e.target === e.currentTarget && onClose) onClose(); }} style={{ position: 'absolute', inset: 0, background: 'var(--bg-scrim)', display: 'grid', placeItems: 'center', zIndex: 20, padding: 16, boxSizing: 'border-box', animation: 'mp-pop var(--dur-base) var(--ease-out) both' }}>
      {children}
    </div>
  );
};

Kit.LevelStartDialog = function LevelStartDialog({ level, stars, onPlay, onClose }) {
  const { Panel, Button, StarRating, GameIcon, OutlineText, Tag } = window.MP;
  return (
    <Panel title={'Level ' + level} accent="teal" onClose={onClose} width={320} footer={<Button variant="play" size="lg" block onClick={onPlay} icon={<GameIcon kind="play" size={22} outline={false} shadow={false} />}>Play</Button>}>
      <div style={{ display: 'grid', justifyItems: 'center', gap: 12, paddingTop: 4 }}>
        <StarRating value={stars} size={30} arc />
        <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-500)' }}>Goal</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 18px', borderRadius: 'var(--radius-pill)', background: 'var(--cream-200)', boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.1)', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>
          <GameIcon kind="gem" size={28} /> Collect 12 gems
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Tag tone="berry">Boost</Tag><span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 13, color: 'var(--ink-700)' }}>x2 coins for this run</span></div>
      </div>
    </Panel>
  );
};

Kit.LevelCompleteDialog = function LevelCompleteDialog({ level, stars, score, reward, onOk }) {
  const { Panel, Button, StarRating, GameIcon } = window.MP;
  const Label = ({ children }) => <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-500)', textAlign: 'center' }}>{children}</div>;
  return (
    <Panel title="Complete" eyebrow={'Level ' + level} header="ribbon" width={320} footer={<Button variant="confirm" size="lg" onClick={onOk} style={{ minWidth: 160 }}>OK</Button>}>
      <div style={{ display: 'grid', justifyItems: 'center', gap: 6 }}>
        <StarRating value={stars} size={40} arc animate />
        <Label>Score</Label>
        <div style={{ width: '100%', padding: '10px 16px', boxSizing: 'border-box', borderRadius: 'var(--radius-pill)', background: 'var(--cream-200)', boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.1)', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--ink-900)' }}>{score}</div>
        <div style={{ width: '60%', height: 2, background: 'var(--cream-300)', margin: '8px 0' }} />
        <Label>Reward</Label>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--ink-900)' }}><GameIcon kind="coin" size={34} /><span>{'+' + reward}</span></div>
      </div>
    </Panel>
  );
};

Kit.DailyRewardDialog = function DailyRewardDialog({ claimed, onClaim, onClose }) {
  const { Panel, Button, RewardCard, GameIcon } = window.MP;
  const days = [['coin', '+1M'], ['coin', '+5M'], ['gift', null], ['ticket', '+100'], ['gem', '+10'], ['gem', '+50']];
  const next = claimed;
  return (
    <Panel title="Daily Reward" header="sign" tone="wood" onClose={onClose} width={330} footer={<Button size="lg" block disabled={claimed >= 7} onClick={onClaim}>{claimed >= 7 ? 'Come back tomorrow' : 'Claim'}</Button>}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 6 }}>
        {days.map(([k, amt], i) => <RewardCard key={i} title={'Day ' + (i + 1)} icon={<GameIcon kind={k} size={38} />} amount={amt} width="100%" state={i < next ? 'claimed' : i === next ? 'available' : 'locked'} onClick={onClaim} />)}
      </div>
      <RewardCard title="Day 7" featured icon={<GameIcon kind="heart" size={40} />} amount="+50" state={next >= 7 ? 'claimed' : next === 6 ? 'available' : 'locked'} onClick={onClaim} style={{ marginTop: 10 }} />
    </Panel>
  );
};

Kit.ShopDialog = function ShopDialog({ onBuy, onClose }) {
  const { Panel, ShopRow, Tag, GameIcon } = window.MP;
  return (
    <Panel title="Shop" onClose={onClose} width={340} padding={14}>
      <div style={{ display: 'grid', gap: 16, maxHeight: 560, overflowY: 'auto', padding: '8px 2px 2px' }}>
        <ShopRow tone="featured" icon={<GameIcon kind="coins" size={46} />} title="3,000 coins" subtitle="One-time offer" price="USD 3.99" tag={<Tag tone="gold">3x the value</Tag>} onBuy={() => onBuy(3000, 0)} />
        <ShopRow icon={<GameIcon name="prohibit" tone="berry" size={42} />} title="No ads" subtitle="Rewarded videos still available" price="USD 0.99" onBuy={() => onBuy(0, 0)} />
        <ShopRow icon={<GameIcon kind="energy" size={42} />} title="12 energy" price="USD 0.99" onBuy={() => onBuy(0, 0)} />
        <ShopRow icon={<GameIcon kind="coin" size={42} />} title="2,720 coins" price="USD 0.99" tag={<Tag>Most popular</Tag>} onBuy={() => onBuy(2720, 0)} />
        <ShopRow icon={<GameIcon kind="gem" size={42} />} title="40 gems" price="USD 1.99" onBuy={() => onBuy(0, 40)} />
      </div>
    </Panel>
  );
};

Kit.SettingsDialog = function SettingsDialog({ settings, onChange, onClose }) {
  const { Panel, Switch, Slider, Button, GameIcon } = window.MP;
  const Row = ({ icon, label, children }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 46 }}>
      <GameIcon kind={icon} size={26} /><span style={{ flex: 1, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{label}</span>{children}
    </div>
  );
  const Group = ({ children }) => <div style={{ padding: '4px 14px', borderRadius: 'var(--radius-lg)', background: '#fff', border: '3px solid var(--cream-200)' }}>{children}</div>;
  return (
    <Panel title="Settings" onClose={onClose} width={320}>
      <div style={{ display: 'grid', gap: 12, paddingTop: 4 }}>
        <Group>
          <Row icon="sound" label="Sound"><Switch checked={settings.sound} onChange={v => onChange({ sound: v })} label="Sound" /></Row>
          <Row icon="vibrate" label="Vibration"><Switch checked={settings.vibration} onChange={v => onChange({ vibration: v })} label="Vibration" tone="blue" /></Row>
          <Row icon="bell" label="Notifications"><Switch checked={settings.notify} onChange={v => onChange({ notify: v })} label="Notifications" tone="gold" /></Row>
        </Group>
        <Group>
          <div style={{ display: 'grid', gap: 10, padding: '10px 0' }}>
            <Slider value={settings.music} onChange={v => onChange({ music: v })} icon={<GameIcon kind="music" size={26} />} label="Music" width="100%" />
            <Slider value={settings.sfx} onChange={v => onChange({ sfx: v })} tone="teal" icon={<GameIcon kind="sound" tone="teal" size={26} />} label="Effects" width="100%" />
          </div>
        </Group>
        <Group>
          <div style={{ display: 'grid', justifyItems: 'center', gap: 6, padding: '10px 0' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-500)' }}>Language</span>
            <Button variant="confirm" typeface="ui" size="md" style={{ minWidth: 160 }}>English</Button>
          </div>
        </Group>
      </div>
    </Panel>
  );
};

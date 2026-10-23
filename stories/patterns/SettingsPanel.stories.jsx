import React, { useState } from 'react';
import { Switch } from '../../components/forms/Switch';
import { Slider } from '../../components/forms/Slider';
import { GameIcon } from '../../components/icons/GameIcon';

export default {
  title: 'Patterns/Settings panel',
  tags: ['!autodocs'],
  parameters: { surface: 'sky' },
};

const card = { padding: '12px 16px', background: 'var(--cream-100)', border: '4px solid var(--cream-300)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-drop)' };
const SettingRow = ({ icon, label, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 44 }}>
    <GameIcon kind={icon} size={26} /><span style={{ flex: 1, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{label}</span>{children}
  </div>
);

export const Default = {
  name: 'Settings panel',
  render: function Render() {
    const [sound, setSound] = useState(true);
    const [vib, setVib] = useState(false);
    const [music, setMusic] = useState(70);
    const [sfx, setSfx] = useState(45);
    return (
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{ ...card, width: 260 }}>
          <SettingRow icon="sound" label="Sound"><Switch checked={sound} onChange={setSound} label="Sound" /></SettingRow>
          <SettingRow icon="vibrate" label="Vibration"><Switch checked={vib} onChange={setVib} label="Vibration" tone="blue" /></SettingRow>
          <SettingRow icon="bell" label="Notifications"><Switch checked size="sm" tone="gold" label="Notifications" /></SettingRow>
          <SettingRow icon="lock" label="Disabled"><Switch checked={false} disabled label="Disabled" /></SettingRow>
        </div>
        <div style={{ ...card, width: 320, padding: 16, display: 'grid', gap: 12 }}>
          <Slider value={music} onChange={setMusic} icon={<GameIcon kind="music" size={28} />} label="Music" width="100%" />
          <Slider value={sfx} onChange={setSfx} tone="teal" icon={<GameIcon kind="sound" tone="teal" size={28} />} label="Effects" width="100%" />
          <Slider value={30} tone="gold" icon={<GameIcon kind="sparkle" size={28} />} width="100%" disabled />
        </div>
      </div>
    );
  },
};

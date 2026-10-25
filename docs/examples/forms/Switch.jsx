'use client';
import { useState } from 'react';
import { Switch } from '@ds/forms/Switch';
import { GameIcon } from '@ds/icons/GameIcon';

const SettingRow = ({ icon, label, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 44 }}>
    <GameIcon kind={icon} size={26} /><span style={{ flex: 1, fontWeight: 700, fontSize: 16, color: 'var(--ink-900)' }}>{label}</span>{children}
  </div>
);

export default function SwitchExample() {
  const [sound, setSound] = useState(true);
  const [vib, setVib] = useState(false);
  const [bell, setBell] = useState(true);
  return (
    <div style={{ width: 280, padding: '12px 16px', background: 'var(--cream-100)', border: '4px solid var(--cream-300)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-drop)' }}>
      <SettingRow icon="sound" label="Sound"><Switch checked={sound} onChange={setSound} label="Sound" /></SettingRow>
      <SettingRow icon="vibrate" label="Vibration"><Switch checked={vib} onChange={setVib} label="Vibration" tone="blue" /></SettingRow>
      <SettingRow icon="bell" label="Notifications"><Switch checked={bell} onChange={setBell} size="sm" tone="gold" label="Notifications" /></SettingRow>
      <SettingRow icon="lock" label="Disabled"><Switch checked={false} disabled label="Disabled" /></SettingRow>
    </div>
  );
}

import React from 'react';
import { Panel } from '../../../components/panels/Panel';
import { Button } from '../../../components/buttons/Button';
import { StarRating } from '../../../components/map/StarRating';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/panels/Panel.d.ts?argtypes';
import notes from '../../../components/panels/Panel.prompt.md?raw';
import { Row } from '../../kit';

const Label = ({ children }) => <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-500)', textAlign: 'center' }}>{children}</div>;
const Inset = ({ children }) => <div style={{ margin: '6px 0 14px', padding: '10px 16px', borderRadius: 'var(--radius-pill)', background: 'var(--cream-200)', boxShadow: 'inset 0 2px 4px oklch(0 0 0 / 0.1)', textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--ink-900)' }}>{children}</div>;
const SettingsRows = () => (
  <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 14, color: 'var(--ink-700)', display: 'grid', gap: 8 }}>
    <div>Sound</div><div>Vibration</div><div>Language</div>
  </div>
);

export default {
  title: 'Components/Panels/Panel',
  component: Panel,
  argTypes: { ...argTypes, children: { ...argTypes.children, control: false } },
  args: { title: 'Settings', width: 240, onClose: () => {}, children: <SettingsRows /> },
  parameters: { surface: 'dusk', padding: '44px 28px 28px', docs: { description: { component: notes } } },
};

export const Playground = {};

export const Headers = {
  render: () => (
    <Row gap={40} align="flex-start">
      <Panel title="Settings" width={200} onClose={() => {}} style={{ marginTop: 10 }}><SettingsRows /></Panel>
      <Panel title="Complete" eyebrow="Level 23" header="ribbon" width={220} footer={<Button variant="confirm" size="md">OK</Button>}>
        <div style={{ display: 'grid', placeItems: 'center', marginTop: -6 }}><StarRating value={3} size={26} arc /></div>
        <Label>Score</Label><Inset>14 000</Inset>
      </Panel>
      <Panel title="Daily Reward" header="sign" tone="wood" width={200} footer={<Button size="md">Claim</Button>}>
        <div style={{ display: 'grid', placeItems: 'center', gap: 6, fontFamily: 'var(--font-ui)', fontWeight: 700, color: 'var(--wood-900)' }}><GameIcon kind="gift" size={48} />Day 3</div>
      </Panel>
    </Row>
  ),
};

import { HudBar } from '../../../components/hud/HudBar';
import { HudChip } from '../../../components/hud/HudChip';
import { SoundToggle } from '../../../components/feedback/SoundToggle';
import argTypes from '../../../components/hud/HudBar.d.ts?argtypes';
import notes from '../../../components/hud/HudBar.prompt.md?raw';
import { Screen } from '../../kit';

/* The bar covers the window and its layout follows it, so each story gives it a box, and the box is contained. */
export default {
  title: 'Components/HUD/HudBar',
  component: HudBar,
  argTypes,
  args: {
    contained: true,
    left: <>
      <HudChip icon="users-three" tone="teal" value="3/5" onClick={() => {}} aria-label="3 of 5 friends found. Open Your people" />
      <HudChip icon="sparkle" tone="berry" value="1/3" fresh onClick={() => {}} aria-label="1 of 3 surprises found, a new one just arrived" />
    </>,
    right: <SoundToggle on size="sm" onChange={() => {}} />,
  },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <Screen width="100%" height={150} style={{ background: 'var(--bg-meadow)' }}><Story /></Screen>],
};

export const Playground = {};

export const ChipsOnly = { args: { right: undefined } };

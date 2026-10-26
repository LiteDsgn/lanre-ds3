import { useState } from 'react';
import { HudChip, useBump } from '../../../components/hud/HudChip';
import { Button } from '../../../components/buttons/Button';
import argTypes from '../../../components/hud/HudChip.d.ts?argtypes';
import notes from '../../../components/hud/HudChip.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/HUD/HudChip',
  component: HudChip,
  argTypes,
  args: { icon: 'users-three', tone: 'teal', value: '3/5', onClick: () => {}, 'aria-label': '3 of 5 friends found. Open Your people' },
  parameters: { surface: 'meadow', docs: { description: { component: notes } } },
};

export const Playground = {};

export const Surprises = { args: { icon: 'sparkle', tone: 'berry', value: '1/3', fresh: true, 'aria-label': '1 of 3 surprises found, a new one just arrived' } };

export const Disabled = { args: { icon: 'sparkle', tone: 'berry', value: '3/3', disabled: true, 'aria-label': '3 of 3 surprises found' } };

/* Bumps and glows each time the count goes up. */
export const Counting = {
  render: function Render() {
    const [found, setFound] = useState(1);
    const bump = useBump(found);
    return (
      <Row gap={18}>
        <HudChip icon="sparkle" tone="berry" value={found + '/6'} bump={bump} aria-label={found + ' of 6 surprises found'} />
        <Button size="sm" variant="ghost" onClick={() => setFound(f => (f >= 6 ? 1 : f + 1))}>{found >= 6 ? 'Start again' : 'Find one'}</Button>
      </Row>
    );
  },
};

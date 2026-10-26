import React, { useState } from 'react';
import { Confetti } from '../../../components/effects/Confetti';
import { Button } from '../../../components/buttons/Button';
import { Sticker } from '../../../components/feedback/Sticker';
import argTypes from '../../../components/effects/Confetti.d.ts?argtypes';
import notes from '../../../components/effects/Confetti.prompt.md?raw';

/* A burst plays once when it mounts, so a new key plays it again. */
const Stage = ({ children }) => <div style={{ position: 'relative', minHeight: 320, display: 'grid', placeItems: 'center', alignContent: 'center', gap: 22 }}>{children}</div>;

export default {
  title: 'Components/Effects/Confetti',
  component: Confetti,
  argTypes,
  args: { pieces: 46 },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <Stage><Story /></Stage>],
};

export const Playground = {};

export const Few = { args: { pieces: 14, seed: 'few' } };

export const Replay = {
  decorators: [],
  render: function Render() {
    const [round, setRound] = useState(1);
    return (
      <Stage>
        <Confetti key={round} />
        <Sticker icon="gift" tone="berry" />
        <Button size="sm" onClick={() => setRound(r => r + 1)}>Pop it</Button>
      </Stage>
    );
  },
};

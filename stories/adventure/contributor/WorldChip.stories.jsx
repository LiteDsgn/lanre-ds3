import React, { useState } from 'react';
import { WorldChip } from '../../../components/contributor/WorldChip';
import argTypes from '../../../components/contributor/WorldChip.d.ts?argtypes';
import notes from '../../../components/contributor/WorldChip.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Adventure/Contributor/WorldChip',
  component: WorldChip,
  argTypes,
  args: { world: 'small_chops', selected: true, showBlurb: true },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
};

export const Playground = {};

export const Picker = {
  render: function Render() {
    const [theme, setTheme] = useState('small_chops');
    return (
      <Row gap={10}>
        {argTypes.world.options.map(w => <WorldChip key={w} world={w} size="sm" selected={theme === w} onClick={() => setTheme(w)} />)}
      </Row>
    );
  },
};

import { WorldChip } from '../../../components/contributor/WorldChip';
import argTypes from '../../../components/contributor/WorldChip.d.ts?argtypes';
import notes from '../../../components/contributor/WorldChip.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Adventure/Contributor/WorldChip',
  component: WorldChip,
  argTypes,
  args: { world: 'small_chops', 'aria-label': 'Where on the road: Small Chops, Big Gist. Tap to change.' },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
};

export const Playground = {};

export const AllWorlds = {
  render: () => (
    <Row gap={12}>
      {['mango_grove', 'small_chops', 'good_energy', 'japan'].map(w => <WorldChip key={w} world={w} onClick={() => {}} />)}
    </Row>
  ),
};

export const NoCaret = { args: { caret: false } };

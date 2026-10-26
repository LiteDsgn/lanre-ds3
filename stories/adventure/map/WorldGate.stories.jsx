import { WorldGate } from '../../../components/map/WorldGate';
import argTypes from '../../../components/map/WorldGate.d.ts?argtypes';
import notes from '../../../components/map/WorldGate.prompt.md?raw';

/* The gate positions itself from its caller, like on the map, so each story gives it a ground to stand on. */
const Ground = ({ children, height = 270 }) => <div style={{ position: 'relative', width: 400, height, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--bg-meadow)' }}>{children}</div>;

export default {
  title: 'Adventure/Map/WorldGate',
  component: WorldGate,
  argTypes,
  args: { world: 'small_chops', detail: '4 memories', onNote: undefined },
  parameters: { surface: 'sky', docs: { description: { component: notes } } },
};

export const Playground = {
  render: args => <Ground><WorldGate {...args} style={{ left: 200, top: args.onNote ? 250 : 190, width: 300 }} /></Ground>,
};

export const WithNote = { ...Playground, args: { world: 'japan', detail: '12 memories', onNote: () => {} } };

export const AllWorlds = {
  render: () => (
    <div style={{ display: 'grid', gap: 18 }}>
      {[['mango_grove', '4 memories'], ['small_chops', '1 memory'], ['good_energy', 'Surprises only'], ['japan', '12 memories']].map(([world, detail]) => (
        <Ground key={world} height={190}><WorldGate world={world} detail={detail} style={{ left: 200, top: 130, width: 300 }} /></Ground>
      ))}
    </div>
  ),
};

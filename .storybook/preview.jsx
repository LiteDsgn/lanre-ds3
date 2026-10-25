import React from 'react';
import { WORLDS, WORLD_ORDER } from '../components/map/worlds.js';
import '../styles.css';

/* Each story sits on a painted ground, like the preview cards did. A story picks its own with
   `parameters.surface`; the Surface toolbar overrides it, and choosing a World paints that world's
   ground unless the story asked for something else. */
const SURFACES = {
  meadow: 'var(--bg-meadow)',
  sky: 'var(--bg-sky)',
  dusk: 'var(--bg-dusk)',
  cream: 'var(--cream-50)',
  world: 'var(--world-bg)',
};

const withGround = (Story, { globals, parameters, viewMode }) => {
  const world = globals.world && globals.world !== 'meadow' ? globals.world : undefined;
  const surface = globals.surface && globals.surface !== 'auto' ? globals.surface : parameters.surface || (world ? 'world' : 'meadow');
  return (
    <div data-world={world} style={{
      padding: parameters.padding ?? 18, background: SURFACES[surface], boxSizing: 'border-box',
      minHeight: viewMode === 'docs' ? undefined : '100vh',
      fontFamily: 'var(--font-ui)', color: 'var(--text-primary)',
    }}>
      <Story />
    </div>
  );
};

export default {
  tags: ['autodocs'],
  decorators: [withGround],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    controls: { sort: 'requiredFirst' },
    options: { storySort: { order: ['Introduction', 'Components', 'Adventure', 'Patterns'] } },
  },
  globalTypes: {
    world: {
      description: 'World theme: sets data-world around the story',
      toolbar: {
        title: 'World', icon: 'globe', dynamicTitle: true,
        items: [{ value: 'meadow', title: 'Meadow (default)' }, { value: 'base_camp', title: 'Base Camp (contributors)' }, ...WORLD_ORDER.map(id => ({ value: id, title: WORLDS[id].name }))],
      },
    },
    surface: {
      description: 'Ground painted behind the story',
      toolbar: {
        title: 'Surface', icon: 'paintbrush', dynamicTitle: true,
        items: [{ value: 'auto', title: 'Story default' }, ...Object.keys(SURFACES).map(s => ({ value: s, title: s[0].toUpperCase() + s.slice(1) }))],
      },
    },
  },
  initialGlobals: { world: 'meadow', surface: 'auto' },
};

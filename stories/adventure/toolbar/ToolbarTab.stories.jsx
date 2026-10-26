import { Toolbar } from '../../../components/toolbar/Toolbar';
import { ToolbarTab } from '../../../components/toolbar/ToolbarTab';
import argTypes from '../../../components/toolbar/ToolbarTab.d.ts?argtypes';
import notes from '../../../components/toolbar/ToolbarTab.prompt.md?raw';
import { Screen } from '../../kit';

export default {
  title: 'Adventure/Toolbar/ToolbarTab',
  component: ToolbarTab,
  argTypes,
  args: { icon: 'users-three', label: 'Your people', onClick: () => {} },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <Screen width="100%" height={200} style={{ background: 'var(--bg-meadow)' }}><Toolbar contained><Story /></Toolbar></Screen>],
};

export const Playground = {};

export const Menu = { args: { icon: 'list', weight: 'bold', label: 'Menu' } };

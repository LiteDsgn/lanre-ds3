import { Toolbar } from '../../../components/toolbar/Toolbar';
import { ToolbarTab } from '../../../components/toolbar/ToolbarTab';
import { ToolbarNext } from '../../../components/toolbar/ToolbarNext';
import argTypes from '../../../components/toolbar/Toolbar.d.ts?argtypes';
import notes from '../../../components/toolbar/Toolbar.prompt.md?raw';
import { Screen } from '../../kit';

export default {
  title: 'Adventure/Toolbar/Toolbar',
  component: Toolbar,
  argTypes,
  args: {
    contained: true,
    children: <>
      <ToolbarTab icon="users-three" label="Your people" onClick={() => {}} />
      <ToolbarNext aria-label="Next, level 7" onClick={() => {}}>7</ToolbarNext>
      <ToolbarTab icon="list" weight="bold" label="Menu" onClick={() => {}} />
    </>,
  },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <Screen width="100%" height={240} style={{ background: 'var(--bg-meadow)' }}><Story /></Screen>],
};

export const Playground = {};

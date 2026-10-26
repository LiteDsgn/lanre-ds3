import { Toolbar } from '../../../components/toolbar/Toolbar';
import { ToolbarNext } from '../../../components/toolbar/ToolbarNext';
import argTypes from '../../../components/toolbar/ToolbarNext.d.ts?argtypes';
import notes from '../../../components/toolbar/ToolbarNext.prompt.md?raw';
import { Screen } from '../../kit';

export default {
  title: 'Adventure/Toolbar/ToolbarNext',
  component: ToolbarNext,
  argTypes,
  args: { children: '7', onClick: () => {}, 'aria-label': 'Next, level 7' },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <Screen width="100%" height={220} style={{ background: 'var(--bg-meadow)' }}><Toolbar contained><Story /></Toolbar></Screen>],
};

export const Playground = {};

/* Once the summit letter is ready. */
export const Letter = { args: { gold: true, caption: 'Your', children: <i className="ph-fill ph-envelope-simple" aria-hidden="true" />, 'aria-label': 'Your letter' } };

/* While the road rearranges itself. */
export const Busy = { args: { busy: true, children: <i className="ph-fill ph-hourglass" />, 'aria-label': undefined } };

export const Nothing = { args: { disabled: true, children: <i className="ph-fill ph-lock-simple" aria-hidden="true" />, 'aria-label': 'Nothing to open yet' } };

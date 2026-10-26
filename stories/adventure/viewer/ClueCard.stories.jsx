import { ClueCard } from '../../../components/viewer/ClueCard';
import argTypes from '../../../components/viewer/ClueCard.d.ts?argtypes';
import notes from '../../../components/viewer/ClueCard.prompt.md?raw';
import { Screen } from '../../kit';

export default {
  title: 'Adventure/Viewer/ClueCard',
  component: ClueCard,
  argTypes,
  args: { clue: 'It was raining that day.', onClick: () => {} },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <Screen width={340} height={220} style={{ background: 'oklch(0.2 0.05 60)' }}><Story /></Screen>],
};

export const Playground = {};

import { useState } from 'react';
import { Words } from '../../../components/media/Words';
import argTypes from '../../../components/media/Words.d.ts?argtypes';
import notes from '../../../components/media/Words.prompt.md?raw';
import { Screen } from '../../kit';

const short = 'Happy birthday, you. I hope today is gentle and loud in all the right places.';
const long = 'We met at the bus stop and talked about mangoes for an hour.\n\nYou insisted the rice needed just five more minutes, four times in a row, and every time it was perfect.\n\nI still think about that evening when the power went out and we ate by phone light, laughing at how the whole street went quiet at once.\n\nThank you for all of it.';

export default {
  title: 'Adventure/Media/Words',
  component: Words,
  argTypes,
  args: { text: short, typed: true, label: 'Their message' },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Story => <Screen><Story /></Screen>],
};

export const Playground = {};

/* Types itself in, once. The key restarts it. */
export const TypesItselfIn = {
  render: function Render(args) {
    const [run, setRun] = useState(0);
    return (
      <>
        <Words key={run} {...args} typed={false} />
        <button type="button" onClick={() => setRun(n => n + 1)} style={{ position: 'absolute', right: 12, top: 12 }}>Type it again</button>
      </>
    );
  },
};

export const LongText = { args: { text: long } };

/* In a short box the long text scrolls, and a hint shows until the end. */
export const Scrolls = {
  args: { text: long },
  decorators: [Story => <Screen height={200}><Story /></Screen>],
};

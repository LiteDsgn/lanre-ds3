import { useState } from 'react';
import { RevealTray, TrayPrompt, TrayHint, TrayChoices, TrayClue, TrayLink } from '../../../components/viewer/RevealTray';
import { ChoiceButton } from '../../../components/levels/ChoiceButton';
import { Button } from '../../../components/buttons/Button';
import argTypes from '../../../components/viewer/RevealTray.d.ts?argtypes';
import notes from '../../../components/viewer/RevealTray.prompt.md?raw';
import { Screen } from '../../kit';

const ADA = { name: 'Ada Okafor', seed: 'c-7', relationship: 'Friend from uni', gem: 'emerald', tier: 2 };
const NAMES = ['Ada Okafor', 'Bayo Daniel', 'Chidi Eze'];

/* The tray covers the box it sits in, so each story gives it one. */
const Box = Story => <Screen width={390} height={640} style={{ background: 'var(--world-bg)' }}><Story /></Screen>;

const body = (state = () => 'idle', hint) => (
  <>
    <TrayPrompt>Who sent this?</TrayPrompt>
    <TrayClue>It was raining that day.</TrayClue>
    <TrayChoices>{NAMES.map((n, i) => <ChoiceButton key={n} index={i} size="lg" state={state(i)} onClick={() => {}}>{n}</ChoiceButton>)}</TrayChoices>
    {hint && <TrayHint>{hint}</TrayHint>}
    <TrayLink onClick={() => {}}>Just tell me</TrayLink>
    <TrayLink back onClick={() => {}}>Back to the memory</TrayLink>
  </>
);

export default {
  title: 'Adventure/Viewer/RevealTray',
  component: RevealTray,
  argTypes,
  args: { tone: 'blue', identity: ADA, message: 'You found them!', actions: <><Button variant="primary" size="lg" block>Continue</Button><TrayLink>Read it again</TrayLink></>, children: body() },
  parameters: { surface: 'world', layout: 'padded', docs: { description: { component: notes } } },
  decorators: [Box],
};

export const Playground = {};

export const WrongGuess = { args: { wobble: true, children: body(i => (i === 1 ? 'wrong' : 'idle'), 'Not Bayo. Have another go, or I can tell you.') } };

export const Surprise = { args: { tone: 'berry', children: <><TrayPrompt>Who left this for you?</TrayPrompt><TrayChoices>{NAMES.map((n, i) => <ChoiceButton key={n} index={i} size="lg" onClick={() => {}}>{n}</ChoiceButton>)}</TrayChoices><TrayLink onClick={() => {}}>Just tell me</TrayLink></> } };

export const Revealed = { args: { revealed: true, tone: 'gold' } };

/* A memory that has been opened before: nothing to unwrap. */
export const Settled = { args: { revealed: true, tone: 'gold', settled: true, actions: <><Button variant="play" size="lg" block>Back to the map</Button><TrayLink>Back to the memory</TrayLink></> } };

/* Flips when you press the button. */
export const Flip = {
  render: function Render(args) {
    const [revealed, setRevealed] = useState(false);
    return <RevealTray {...args} revealed={revealed} tone={revealed ? 'gold' : 'blue'}
      children={<><TrayPrompt>Who sent this?</TrayPrompt><Button variant="confirm" size="lg" block onClick={() => setRevealed(true)}>Show me</Button></>} />;
  },
};

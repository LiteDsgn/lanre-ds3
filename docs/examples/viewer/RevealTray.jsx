'use client';
import { useState } from 'react';
import { RevealTray, TrayPrompt, TrayHint, TrayChoices, TrayClue, TrayLink } from '@ds/viewer/RevealTray';
import { ChoiceButton } from '@ds/levels/ChoiceButton';
import { Button } from '@ds/buttons/Button';
import { Screen } from '@stories/kit';

const ADA = { name: 'Ada Okafor', seed: 'c-7', relationship: 'Friend from uni', gem: 'emerald', tier: 2 };
const NAMES = ['Ada Okafor', 'Bayo Daniel', 'Chidi Eze'];

export default function RevealTrayExample() {
  const [found, setFound] = useState(false);
  const [wrong, setWrong] = useState([]);
  const [wobble, setWobble] = useState(false);
  const guess = i => {
    if (i === 0) return setFound(true);
    setWrong(w => (w.includes(i) ? w : [...w, i]));
    setWobble(true); setTimeout(() => setWobble(false), 450);
  };
  const state = i => (found ? (i === 0 ? 'correct' : 'dim') : wrong.includes(i) ? 'wrong' : 'idle');
  const reset = () => { setFound(false); setWrong([]); };
  return (
    <Screen width={390} height={640} style={{ background: 'var(--world-bg)' }}>
      <RevealTray tone={found ? 'gold' : 'blue'} revealed={found} identity={found ? ADA : undefined} wobble={wobble} message="You found them!"
        actions={<><Button variant="primary" size="lg" block onClick={reset}>Start again</Button><TrayLink onClick={reset}>Read it again</TrayLink></>}>
        <TrayPrompt>Who sent this?</TrayPrompt>
        <TrayClue>It was raining that day.</TrayClue>
        <TrayChoices>{NAMES.map((n, i) => <ChoiceButton key={n} index={i} size="lg" state={state(i)} onClick={() => guess(i)}>{n}</ChoiceButton>)}</TrayChoices>
        {wrong.length > 0 && <TrayHint>Not {NAMES[wrong[wrong.length - 1]]}. Have another go, or I can tell you.</TrayHint>}
        <TrayLink onClick={() => setFound(true)}>Just tell me</TrayLink>
      </RevealTray>
    </Screen>
  );
}

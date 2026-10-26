import React, { useEffect, useMemo, useState } from 'react';
import { RoadsideViewer } from '../components/viewer/RoadsideViewer';
import { ViewerKeys } from '../components/viewer/ViewerKeys';
import { ViewerKnob } from '../components/viewer/ViewerKnob';
import { WhoButton } from '../components/viewer/WhoButton';
import { ClueTab } from '../components/viewer/ClueTab';
import { ClueCard } from '../components/viewer/ClueCard';
import { RevealTray, TrayPrompt, TrayHint, TrayChoices, TrayClue, TrayLink } from '../components/viewer/RevealTray';
import { ChoiceButton } from '../components/levels/ChoiceButton';
import { Button } from '../components/buttons/Button';
import { Words } from '../components/media/Words';
import { Album } from '../components/media/Album';
import { Cassette } from '../components/media/Cassette';
import { samplePhotos, sampleTone } from './sample-media';
import { Screen } from './kit';

/* The whole viewer flow, with fictional people, for the docs, Storybook and the pattern story: the cabinet loads, the
   pieces play one at a time, the clue comes out, and the guess tray opens, flips and lets go. */
const PIECES = [
  { icon: 'quotes', label: 'Message' },
  { icon: 'images', label: '3 photos' },
  { icon: 'microphone', label: 'Voice note', meta: '0:04' },
];
const NAMES = ['Ada Okafor', 'Bayo Daniel', 'Chidi Eze'];
const ADA = { name: 'Ada Okafor', seed: 'c-7', relationship: 'Friend from uni', gem: 'emerald', tier: 2 };
const TEXT = 'Happy birthday, you. I hope today is gentle and loud in all the right places.';
const CLUE = 'It was raining that day.';

export function ViewerDemo({ height = 720, width = '100%', startLoaded = false, lightboxRoot }) {
  const [loading, setLoading] = useState(!startLoaded);
  const [at, setAt] = useState(0);
  const [seen, setSeen] = useState(() => new Set([0]));
  const [typed, setTyped] = useState(false);
  const [clueOpen, setClueOpen] = useState(false);
  const [tray, setTray] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [wrong, setWrong] = useState([]);
  const [wobble, setWobble] = useState(false);
  const [found, setFound] = useState(false);
  const tone = useMemo(() => sampleTone(4), []);
  useEffect(() => { if (!loading) return; const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t); }, [loading]);

  const last = at === PIECES.length - 1;
  const go = i => { setAt(i); setSeen(s => new Set(s).add(i)); };
  const openTray = () => { setLeaving(false); setTray(true); };
  const closeTray = () => { setLeaving(true); setTimeout(() => { setTray(false); setLeaving(false); }, 200); };
  const guess = i => {
    if (i === 0) { setFound(true); return; }
    setWrong(w => (w.includes(i) ? w : [...w, i]));
    setWobble(true); setTimeout(() => setWobble(false), 450);
  };
  const reset = () => { setTray(false); setFound(false); setWrong([]); setAt(0); setSeen(new Set([0])); setClueOpen(false); };
  const state = i => (found ? (i === 0 ? 'correct' : 'dim') : wrong.includes(i) ? 'wrong' : 'idle');

  const knob = !last ? { label: 'Next: ' + PIECES[at + 1].label.toLowerCase(), icon: 'caret-right' }
    : !found ? { label: 'Who’s behind this?', icon: 'question', tone: 'guess', attract: !tray }
      : { label: 'Continue', icon: 'arrow-right' };

  return (
    <Screen width={width} height={height} style={{ background: 'var(--world-bg)' }}>
      <div data-world="small_chops" style={{ position: 'absolute', inset: 0 }}>
        <RoadsideViewer contained world="small_chops" signEyebrow="Small Chops, Big Gist" signTitle="Level 4" loading={loading}
          eyebrow={'' + (at + 1) + ' of ' + PIECES.length + ' · ' + PIECES[at].label} title="The day at the beach" pieceKey={at} onClose={reset}
          who={<WhoButton found={found} name={ADA.name} seed={ADA.seed} onClick={openTray} aria-label={found ? 'From ' + ADA.name + '. See who it was from again' : 'Who’s behind this?'} />}
          clue={<ClueTab open={clueOpen} onClick={() => setClueOpen(o => !o)} />}
          clueCard={clueOpen ? <ClueCard clue={CLUE} onClick={() => setClueOpen(false)} /> : undefined}
          keys={<ViewerKeys pieces={PIECES.map((p, i) => ({ ...p, seen: i !== at && (seen.has(i) || found) }))} at={at} onSelect={go} />}
          knob={<ViewerKnob {...knob} onClick={() => (!last ? go(at + 1) : !found ? openTray() : reset())} />}
          layers={tray ? (
            <RevealTray tone={found ? 'gold' : 'blue'} revealed={found} identity={found ? ADA : undefined} wobble={wobble} leaving={leaving} onBackdrop={closeTray}
              message="You found them!"
              actions={<><Button variant="primary" size="lg" block onClick={reset}>Continue</Button><TrayLink onClick={closeTray}>Read it again</TrayLink></>}>
              <TrayPrompt>Who sent this?</TrayPrompt>
              <TrayClue>{CLUE}</TrayClue>
              <TrayChoices>{NAMES.map((n, i) => <ChoiceButton key={n} index={i} size="lg" state={state(i)} onClick={() => guess(i)}>{n}</ChoiceButton>)}</TrayChoices>
              {wrong.length > 0 && !found && <TrayHint>Not {NAMES[wrong[wrong.length - 1]]}. Have another go, or I can tell you.</TrayHint>}
              <TrayLink onClick={() => setFound(true)}>Just tell me</TrayLink>
              <TrayLink back onClick={closeTray}>Back to the memory</TrayLink>
            </RevealTray>
          ) : undefined}>
          {at === 0 && <Words text={TEXT} typed={typed} onTyped={() => setTyped(true)} label="Their message" />}
          {at === 1 && <Album photos={samplePhotos} lightboxRoot={lightboxRoot} />}
          {at === 2 && <Cassette src={tone} duration={4} heading="A familiar voice?" hint="Take your time. You can guess whenever you’re ready." />}
        </RoadsideViewer>
      </div>
    </Screen>
  );
}

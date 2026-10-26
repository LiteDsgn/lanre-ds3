import { RoadsideViewer } from '../../../components/viewer/RoadsideViewer';
import { ViewerKeys } from '../../../components/viewer/ViewerKeys';
import { ViewerKnob } from '../../../components/viewer/ViewerKnob';
import { WhoButton } from '../../../components/viewer/WhoButton';
import { Words } from '../../../components/media/Words';
import argTypes from '../../../components/viewer/RoadsideViewer.d.ts?argtypes';
import notes from '../../../components/viewer/RoadsideViewer.prompt.md?raw';
import { Screen } from '../../kit';
import { ViewerDemo } from '../../ViewerDemo';

const pieces = [{ icon: 'quotes', label: 'Message' }, { icon: 'images', label: '3 photos' }, { icon: 'microphone', label: 'Voice note', meta: '0:42' }];

/* Contained, so the viewer sits in the story's box instead of covering the window. */
const Box = Story => <Screen width="100%" height={720} style={{ background: 'var(--world-bg)' }}><div data-world="small_chops" style={{ position: 'absolute', inset: 0 }}><Story /></div></Screen>;

export default {
  title: 'Adventure/Viewer/RoadsideViewer',
  component: RoadsideViewer,
  argTypes,
  args: { contained: true, world: 'small_chops', signEyebrow: 'Small Chops, Big Gist', signTitle: 'Level 4', eyebrow: '1 of 3 · Message', title: 'The day at the beach', pieceKey: 0 },
  parameters: { surface: 'world', docs: { description: { component: notes } } },
  decorators: [Box],
  render: args => (
    <RoadsideViewer {...args}
      who={<WhoButton onClick={() => {}} aria-label="Who’s behind this?" />}
      keys={<ViewerKeys pieces={pieces} at={0} onSelect={() => {}} />}
      knob={<ViewerKnob label="Next: photos" onClick={() => {}} />}>
      <Words text="Happy birthday, you. I hope today is gentle and loud in all the right places." typed label="Their message" />
    </RoadsideViewer>
  ),
};

export const Playground = {};

export const Loading = { args: { loading: true } };

export const NoConnection = { args: { error: 'We couldn’t reach the memory.', onRetry: () => {} } };

/* A surprise beside the road: leaves on the sign, a ribbon over the top. */
export const Surprise = { args: { kind: 'discovery', leafy: true, signTitle: 'A little surprise', ribbon: 'Just arrived' } };

/* Everything together: loading, the pieces, the clue, and the guess tray. */
export const Flow = {
  decorators: [],
  parameters: { layout: 'padded' },
  render: () => <ViewerDemo />,
};

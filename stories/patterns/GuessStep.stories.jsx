import React from 'react';
import { ViewerDemo } from '../ViewerDemo';
import { Note } from '../kit';

export default {
  title: 'Patterns/Guess step',
  tags: ['!autodocs'],
  parameters: { layout: 'padded' },
};

/* Open the memory, go through its pieces, press "Who's behind this?", then guess. */
export const Default = {
  name: 'Guess step',
  render: () => (
    <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
      <ViewerDemo startLoaded />
      <Note>Wrong = coral + × and a retry; correct = green + ✓; the rest dim. "Just tell me" is always available.</Note>
    </div>
  ),
};

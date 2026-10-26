import React from 'react';
import { SaveAlert } from '../../../components/feedback/SaveAlert';
import argTypes from '../../../components/feedback/SaveAlert.d.ts?argtypes';
import notes from '../../../components/feedback/SaveAlert.prompt.md?raw';
import { Col } from '../../kit';

export default {
  title: 'Components/Feedback/SaveAlert',
  component: SaveAlert,
  argTypes,
  args: { status: 'conflict', error: 'Someone else changed this. Reload to see it.', onReload: () => {} },
  parameters: { docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ maxWidth: 380 }}><Story /></div>],
};

export const Playground = {};

export const NotSavedYet = { name: 'Error', args: { status: 'error', error: 'The connection dropped', onReload: undefined } };

export const States = {
  render: () => (
    <Col gap={12}>
      <SaveAlert status="conflict" error="Someone else changed this. Reload to see it." onReload={() => {}} />
      <SaveAlert status="error" error="The connection dropped" />
      <SaveAlert status="error" />
    </Col>
  ),
};

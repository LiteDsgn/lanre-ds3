import React, { useState } from 'react';
import { SavePill } from '../../../components/feedback/SavePill';
import { Button } from '../../../components/buttons/Button';
import argTypes from '../../../components/feedback/SavePill.d.ts?argtypes';
import notes from '../../../components/feedback/SavePill.prompt.md?raw';
import { Row } from '../../kit';

export default {
  title: 'Components/Feedback/SavePill',
  component: SavePill,
  argTypes,
  args: { status: 'saved' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Saving = { args: { status: 'saving' } };

export const NotSaved = { name: 'Not saved', args: { status: 'error' } };

/* Press the cloud to see its word for a moment. */
export const Cycling = {
  render: function Render() {
    const order = ['saved', 'saving', 'error', 'conflict'];
    const [status, setStatus] = useState('saved');
    return (
      <Row gap={18}>
        <SavePill status={status} />
        <Button size="sm" variant="ghost" onClick={() => setStatus(s => order[(order.indexOf(s) + 1) % order.length])}>Now: {status}</Button>
      </Row>
    );
  },
};

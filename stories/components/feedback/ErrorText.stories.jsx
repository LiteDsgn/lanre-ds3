import React from 'react';
import { ErrorText } from '../../../components/feedback/ErrorText';
import argTypes from '../../../components/feedback/ErrorText.d.ts?argtypes';
import notes from '../../../components/feedback/ErrorText.prompt.md?raw';

export default {
  title: 'Components/Feedback/ErrorText',
  component: ErrorText,
  argTypes,
  args: { children: 'That link has expired. Ask for a new one.' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

/* With no message it renders nothing, so it can always be there. */
export const Empty = { args: { children: '' } };

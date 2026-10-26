import React from 'react';
import { LoadingScreen } from '../../../components/feedback/LoadingScreen';
import argTypes from '../../../components/feedback/LoadingScreen.d.ts?argtypes';
import notes from '../../../components/feedback/LoadingScreen.prompt.md?raw';

export default {
  title: 'Components/Feedback/LoadingScreen',
  component: LoadingScreen,
  argTypes,
  args: { title: 'The Birthday Adventure', style: { minHeight: 480 } },
  parameters: { padding: 0, docs: { description: { component: notes } } },
};

export const Playground = {};

export const NoTitle = { name: 'No title', args: { title: undefined } };

export const OwnLabel = { name: 'Own label', args: { label: 'Getting things ready' } };

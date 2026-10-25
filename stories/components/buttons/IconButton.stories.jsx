import React from 'react';
import { IconButton } from '../../../components/buttons/IconButton';
import argTypes from '../../../components/buttons/IconButton.d.ts?argtypes';
import notes from '../../../components/buttons/IconButton.prompt.md?raw';
import { Row, Ph } from '../../kit';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  argTypes: { ...argTypes, children: { ...argTypes.children, control: false } },
  args: { variant: 'play', size: 'lg', badge: true, children: <Ph n="gift" /> },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Circles = {
  render: () => (
    <Row>
      <IconButton variant="danger" size="sm"><Ph n="x" weight="bold" /></IconButton>
      <IconButton variant="ghost"><Ph n="gear" /></IconButton>
      <IconButton variant="confirm"><Ph n="plus" weight="bold" /></IconButton>
      <IconButton variant="play" size="lg" badge><Ph n="gift" /></IconButton>
    </Row>
  ),
};

export const CaptionedSquares = {
  name: 'Captioned squares',
  render: () => (
    <Row align="flex-start">
      <IconButton variant="primary" shape="square" label="Shop"><Ph n="storefront" /></IconButton>
      <IconButton variant="play" shape="square" label="Quests" badge={3}><Ph n="clipboard-text" /></IconButton>
      <IconButton variant="wood" shape="square" label="Map"><Ph n="map-trifold" /></IconButton>
      <IconButton disabled shape="square" label="Locked"><Ph n="lock" /></IconButton>
    </Row>
  ),
};

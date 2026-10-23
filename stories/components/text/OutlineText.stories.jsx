import React from 'react';
import { OutlineText } from '../../../components/text/OutlineText';
import argTypes from '../../../components/text/OutlineText.d.ts?argtypes';
import notes from '../../../components/text/OutlineText.prompt.md?raw';
import { Row, Col, Note } from '../../kit';

export default {
  title: 'Components/Text/OutlineText',
  component: OutlineText,
  argTypes,
  args: { size: 'xl', children: 'Daily Reward' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Sizes = {
  render: () => (
    <Row gap={22} align="baseline">
      <OutlineText size="xl">Daily Reward</OutlineText>
      <OutlineText size="lg">Level 12</OutlineText>
      <OutlineText size="md">Complete</OutlineText>
      <OutlineText size="sm">Quests</OutlineText>
      <OutlineText size="xs">Locked</OutlineText>
    </Row>
  ),
};

export const StrokesAndFills = {
  name: 'Strokes and fills',
  render: () => (
    <Col gap={14}>
      <Row gap={22} align="baseline">
        <OutlineText size={40} stroke="blue">7</OutlineText>
        <OutlineText size={40} stroke="stone">8</OutlineText>
        <OutlineText size={40} stroke="green">9</OutlineText>
        <OutlineText size="lg" color="gold" stroke="gold">x2 Boost</OutlineText>
        <OutlineText size="lg" color="blue" stroke="blue">Splash</OutlineText>
        <OutlineText size="lg" color="cream" stroke="wood">Sign</OutlineText>
        <OutlineText size="md" uppercase={false} stroke="coral">Nice!</OutlineText>
      </Row>
      <Note>Stroke tone follows the surface: ink on grass, blue or stone on pucks, wood on planks.</Note>
    </Col>
  ),
};

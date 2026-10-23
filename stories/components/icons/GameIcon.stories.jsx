import React from 'react';
import { GameIcon } from '../../../components/icons/GameIcon';
import argTypes from '../../../components/icons/GameIcon.d.ts?argtypes';
import notes from '../../../components/icons/GameIcon.prompt.md?raw';
import { Row, Col, Note } from '../../kit';

export default {
  title: 'Components/Icons/GameIcon',
  component: GameIcon,
  argTypes,
  args: { kind: 'coin', size: 56 },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Kinds = {
  render: () => (
    <Row gap={12}>
      {argTypes.kind.options.map(k => (
        <span key={k} style={{ display: 'grid', justifyItems: 'center', gap: 4, width: 64 }}>
          <GameIcon kind={k} size={34} /><Note>{k}</Note>
        </span>
      ))}
    </Row>
  ),
};

export const SizesAndTones = {
  name: 'Sizes and tones',
  render: () => (
    <Col gap={18}>
      <Row gap={16} align="flex-end">
        {[20, 28, 40, 56].map(s => <GameIcon key={s} kind="coin" size={s} />)}
      </Row>
      <Row gap={16}>
        {argTypes.tone.options.map(t => <GameIcon key={t} name="star" tone={t} size={32} />)}
      </Row>
      <Row gap={16}>
        <GameIcon kind="gear" outline={false} shadow={false} size={28} />
        <GameIcon kind="play" outline={false} shadow={false} size={28} />
        <GameIcon kind="x" outline={false} shadow={false} size={28} />
      </Row>
      <Note>Size ramp 20 / 28 / 40 / 56. Plain white glyphs only inside bevelled buttons.</Note>
    </Col>
  ),
};

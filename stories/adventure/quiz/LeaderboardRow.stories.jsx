import React from 'react';
import { LeaderboardRow } from '../../../components/quiz/LeaderboardRow';
import argTypes from '../../../components/quiz/LeaderboardRow.d.ts?argtypes';
import notes from '../../../components/quiz/LeaderboardRow.prompt.md?raw';
import { Col, Note } from '../../kit';

export default {
  title: 'Adventure/Quiz/LeaderboardRow',
  component: LeaderboardRow,
  argTypes,
  args: { rank: 1, name: 'Ada Okafor', seed: 'c_01', gem: 'amethyst', tier: 3, score: 8 },
  parameters: { surface: 'cream', docs: { description: { component: notes } } },
  decorators: [Story => <div style={{ width: 380 }}><Story /></div>],
};

export const Playground = {};

export const Leaderboard = {
  render: () => (
    <Col gap={10}>
      <LeaderboardRow rank={1} name="Ada Okafor" seed="c_01" gem="amethyst" tier={3} score={8} />
      <LeaderboardRow rank={2} name="Femi & Bisi" seed="c_15" gem="amethyst" tier={1} score={6} />
      <LeaderboardRow rank={3} tied name="Tunde Bello" seed="c_22" gem="emerald" tier={2} score={4} me />
      <LeaderboardRow rank={3} tied name="Mrs Adeyemi" seed="c_09" gem="emerald" tier={2} score={4} />
      <LeaderboardRow rank={5} name="Dayo" seed="c_31" gem="amber" tier={1} score={0} />
      <LeaderboardRow name="Kemi A." seed="c_07" skipped />
      <Note dark={false}>Ties share rank (=3). Skipped = pearl, unranked. Friends only: the recipient never sees this list.</Note>
    </Col>
  ),
};

import React from 'react';
import { LeaderboardRow } from '../../components/quiz/LeaderboardRow';
import { Gemstone } from '../../components/identity/Gemstone';
import { ChoiceButton } from '../../components/levels/ChoiceButton';
import { Row, Note } from '../kit';

export default {
  title: 'Patterns/Quiz result',
  tags: ['!autodocs'],
  parameters: { surface: 'cream' },
};

export const Default = {
  name: 'Quiz result',
  render: () => (
    <Row gap={24} align="flex-start">
      <div style={{ width: 380, display: 'grid', gap: 10 }}>
        <LeaderboardRow rank={1} name="Ada Okafor" seed="c_01" gem="amethyst" tier={3} score={8} />
        <LeaderboardRow rank={2} name="Femi & Bisi" seed="c_15" gem="amethyst" tier={1} score={6} />
        <LeaderboardRow rank={3} tied name="Tunde Bello" seed="c_22" gem="emerald" tier={2} score={4} me />
        <LeaderboardRow rank={3} tied name="Mrs Adeyemi" seed="c_09" gem="emerald" tier={2} score={4} />
        <LeaderboardRow rank={5} name="Dayo" seed="c_31" gem="amber" tier={1} score={0} />
        <LeaderboardRow name="Kemi A." seed="c_07" skipped />
      </div>
      <div style={{ width: 260, display: 'grid', gap: 14 }}>
        <div style={{ padding: '22px 18px', borderRadius: 'var(--radius-xl)', background: 'linear-gradient(180deg,#fff,var(--cream-100))', border: '4px solid var(--cream-300)', boxShadow: 'var(--shadow-drop)', display: 'grid', justifyItems: 'center', gap: 8, textAlign: 'center' }}>
          <Gemstone gem="emerald" tier={2} size={84} showTier />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink-900)' }}>4 / 8</span>
          <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink-700)' }}>Your first try is the one that counts. Thanks for being part of this.</span>
        </div>
        <ChoiceButton index={0} state="correct">Adekunle Gold</ChoiceButton>
        <Note dark={false}>Ties share rank (=3). Skipped = pearl, unranked. The recipient never sees this list.</Note>
      </div>
    </Row>
  ),
};

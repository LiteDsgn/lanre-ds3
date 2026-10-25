'use client';
import { LeaderboardRow } from '@ds/quiz/LeaderboardRow';

export default function LeaderboardRowExample() {
  return (
    <div style={{ width: 380, display: 'grid', gap: 10 }}>
      <LeaderboardRow rank={1} name="Ada Okafor" seed="c_01" gem="amethyst" tier={3} score={8} />
      <LeaderboardRow rank={2} name="Femi & Bisi" seed="c_15" gem="amethyst" tier={1} score={6} />
      <LeaderboardRow rank={3} tied name="Tunde Bello" seed="c_22" gem="emerald" tier={2} score={4} me />
      <LeaderboardRow rank={3} tied name="Mrs Adeyemi" seed="c_09" gem="emerald" tier={2} score={4} />
      <LeaderboardRow rank={5} name="Dayo" seed="c_31" gem="amber" tier={1} score={0} />
      <LeaderboardRow name="Kemi A." seed="c_07" skipped />
    </div>
  );
}

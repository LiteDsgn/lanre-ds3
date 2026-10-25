import React, { useState } from 'react';
import { MatchCard } from '../../components/games/MatchCard';
import { Button } from '../../components/buttons/Button';
import { Row, Col, Note } from '../kit';

export default {
  title: 'Patterns/Matching game',
  tags: ['!autodocs'],
};

const deal = () => ['mango', 'rice', 'dumbbell', 'mango', 'rice', 'dumbbell'].map((s, i) => ({ id: i, symbol: s, face: 'down' }));

export const Default = {
  name: 'Matching game',
  render: function Render() {
    const [cards, setCards] = useState(deal);
    const flip = id => setCards(cs => {
      const up = cs.filter(c => c.face === 'up');
      if (up.length === 2) return cs;
      let next = cs.map(c => c.id === id ? { ...c, face: 'up' } : c);
      const now = next.filter(c => c.face === 'up');
      if (now.length === 2) {
        if (now[0].symbol === now[1].symbol) next = next.map(c => c.face === 'up' ? { ...c, face: 'matched' } : c);
        else setTimeout(() => setCards(x => x.map(c => c.face === 'up' ? { ...c, face: 'down' } : c)), 700);
      }
      return next;
    });
    const done = cards.every(c => c.face === 'matched');
    return (
      <Row gap={28} align="flex-start">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 84px)', gap: 12 }}>
          {cards.map(c => <MatchCard key={c.id} symbol={c.symbol} face={c.face} onClick={() => flip(c.id)} />)}
        </div>
        <Col gap={10} style={{ maxWidth: 220 }}>
          <Button variant={done ? 'confirm' : 'ghost'} typeface="ui" onClick={() => setCards(deal)}>{done ? 'Matched! Reset' : 'Skip'}</Button>
          <Note>Tap to flip; pairs lock green. Skip is always offered: the reveal never depends on finishing.</Note>
        </Col>
      </Row>
    );
  },
};

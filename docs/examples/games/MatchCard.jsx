'use client';
import { useState } from 'react';
import { MatchCard } from '@ds/games/MatchCard';
import { Button } from '@ds/buttons/Button';
import { Row, Col, Note } from '@stories/kit';

const deal = () => ['mango', 'rice', 'dumbbell', 'mango', 'rice', 'dumbbell'].map((symbol, id) => ({ id, symbol, face: 'down' }));

export default function MatchCardExample() {
  const [cards, setCards] = useState(deal);
  const flip = id => setCards(cs => {
    if (cs.filter(c => c.face === 'up').length === 2) return cs;
    let next = cs.map(c => c.id === id ? { ...c, face: 'up' } : c);
    const up = next.filter(c => c.face === 'up');
    if (up.length === 2) {
      if (up[0].symbol === up[1].symbol) next = next.map(c => c.face === 'up' ? { ...c, face: 'matched' } : c);
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
}

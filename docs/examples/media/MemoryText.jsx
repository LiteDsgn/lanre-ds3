'use client';
import { MemoryText } from '@ds/media/MemoryText';

export default function MemoryTextExample() {
  return (
    <MemoryText size="md" style={{ maxWidth: 420 }}>
      <p>Fixture text: the first time we cooked together you insisted the rice needed “just five more minutes” four times in a row.</p>
      <p>It was perfect, obviously.</p>
    </MemoryText>
  );
}

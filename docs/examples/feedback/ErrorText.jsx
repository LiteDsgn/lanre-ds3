'use client';
import { useState } from 'react';
import { ErrorText } from '@ds/feedback/ErrorText';
import { Button } from '@ds/buttons/Button';
import { Row } from '@stories/kit';

export default function ErrorTextExample() {
  const [error, setError] = useState('That link has expired. Ask for a new one.');
  return (
    <Row gap={14}>
      <ErrorText>{error}</ErrorText>
      <Button size="sm" variant="ghost" onClick={() => setError(e => (e ? '' : 'That link has expired. Ask for a new one.'))}>{error ? 'Clear it' : 'Bring it back'}</Button>
    </Row>
  );
}

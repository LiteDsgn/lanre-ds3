'use client';
import { OutlineText } from '@ds/text/OutlineText';
import { Row, Col } from '@stories/kit';

export default function OutlineTextExample() {
  return (
    <Col gap={14}>
      <Row gap={22} align="baseline">
        <OutlineText size="xl">Daily Reward</OutlineText>
        <OutlineText size="lg">Level 12</OutlineText>
        <OutlineText size="md">Complete</OutlineText>
        <OutlineText size="sm">Quests</OutlineText>
        <OutlineText size="xs">Locked</OutlineText>
      </Row>
      <Row gap={22} align="baseline">
        <OutlineText size={40} stroke="blue">7</OutlineText>
        <OutlineText size={40} stroke="stone">8</OutlineText>
        <OutlineText size={40} stroke="green">9</OutlineText>
        <OutlineText size="lg" color="gold" stroke="gold">x2 Boost</OutlineText>
        <OutlineText size="lg" color="blue" stroke="blue">Splash</OutlineText>
        <OutlineText size="lg" color="cream" stroke="wood">Sign</OutlineText>
        <OutlineText size="md" uppercase={false} stroke="coral">Nice!</OutlineText>
      </Row>
    </Col>
  );
}

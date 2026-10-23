'use client';
import { Badge } from '@ds/feedback/Badge';
import { IconButton } from '@ds/buttons/IconButton';
import { GameIcon } from '@ds/icons/GameIcon';
import { Row } from '@stories/kit';

export default function BadgeExample() {
  return (
    <Row gap={14}>
      <Badge /><Badge count={3} /><Badge count={12} tone="blue" /><Badge count="NEW" tone="gold" /><Badge count="!" tone="teal" size="sm" /><Badge count={99} tone="green" pulse />
      <span style={{ width: 20 }} />
      <div style={{ position: 'relative' }}>
        <IconButton variant="primary" shape="square"><GameIcon kind="quest" outline={false} shadow={false} /></IconButton>
        <Badge count={3} style={{ position: 'absolute', top: -6, right: -6 }} />
      </div>
    </Row>
  );
}

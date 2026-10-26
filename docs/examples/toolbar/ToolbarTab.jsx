'use client';
import { Toolbar } from '@ds/toolbar/Toolbar';
import { ToolbarTab } from '@ds/toolbar/ToolbarTab';
import { Screen } from '@stories/kit';

export default function ToolbarTabExample() {
  return (
    <Screen width="100%" height={180} style={{ background: 'var(--bg-meadow)' }}>
      <Toolbar contained>
        <ToolbarTab icon="users-three" label="Your people" onClick={() => {}} />
        <ToolbarTab icon="list" weight="bold" label="Menu" onClick={() => {}} />
      </Toolbar>
    </Screen>
  );
}

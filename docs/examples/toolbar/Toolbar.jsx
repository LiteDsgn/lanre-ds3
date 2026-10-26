'use client';
import { Toolbar } from '@ds/toolbar/Toolbar';
import { ToolbarTab } from '@ds/toolbar/ToolbarTab';
import { ToolbarNext } from '@ds/toolbar/ToolbarNext';
import { Screen } from '@stories/kit';

export default function ToolbarExample() {
  return (
    <Screen width="100%" height={240} style={{ background: 'var(--bg-meadow)' }}>
      <Toolbar contained>
        <ToolbarTab icon="users-three" label="Your people" onClick={() => {}} />
        <ToolbarNext aria-label="Next, level 7" onClick={() => {}}>7</ToolbarNext>
        <ToolbarTab icon="list" weight="bold" label="Menu" onClick={() => {}} />
      </Toolbar>
    </Screen>
  );
}

'use client';
import { useState } from 'react';
import { SegmentedTabs } from '@ds/buttons/SegmentedTabs';

const ITEMS = [{ id: 'people', label: 'People · 3 of 8' }, { id: 'keepsakes', label: 'Keepsakes · 2' }];

export default function SegmentedTabsExample() {
  const [tab, setTab] = useState('people');
  return <SegmentedTabs label="Collection" items={ITEMS} value={tab} onChange={setTab} />;
}

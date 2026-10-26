import React, { useState } from 'react';
import { SegmentedTabs } from '../../../components/buttons/SegmentedTabs';
import argTypes from '../../../components/buttons/SegmentedTabs.d.ts?argtypes';
import notes from '../../../components/buttons/SegmentedTabs.prompt.md?raw';

const TWO = [{ id: 'people', label: 'People · 3 of 8' }, { id: 'keepsakes', label: 'Keepsakes · 2' }];
const THREE = [{ id: 'a', label: 'One' }, { id: 'b', label: 'Two' }, { id: 'c', label: 'Three' }];

export default {
  title: 'Components/Buttons/SegmentedTabs',
  component: SegmentedTabs,
  argTypes,
  args: { label: 'Collection', items: TWO, value: 'people' },
  parameters: { docs: { description: { component: notes } } },
};

export const Playground = {};

export const Switching = {
  render: function Render() {
    const [tab, setTab] = useState('people');
    return <SegmentedTabs label="Collection" items={TWO} value={tab} onChange={setTab} />;
  },
};

export const ThreeTabs = { name: 'Three tabs', args: { label: 'Three', items: THREE, value: 'b' } };

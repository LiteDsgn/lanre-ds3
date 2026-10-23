'use client';
import { useState } from 'react';
import { PackageStepper } from '@ds/levels/PackageStepper';

const items = [{ type: 'text' }, { type: 'photo' }, { type: 'audio' }, { type: 'video' }];

export default function PackageStepperExample() {
  const [current, setCurrent] = useState(2);
  const [seen, setSeen] = useState([0, 1]);
  const select = i => { setSeen(s => [...new Set([...s, current])]); setCurrent(i); };
  return <PackageStepper items={items} current={current} seen={seen} onSelect={select} onDark />;
}

'use client';
import { Heading } from '@ds/text/Heading';

export default function HeadingExample() {
  return (
    <div data-world="small_chops" style={{ background: 'var(--world-bg)', padding: 24, borderRadius: 12 }}>
      <Heading eyebrow="Step 2 of 4" title="Pick a spot on the road" lede="Choose where your memory should live." />
    </div>
  );
}

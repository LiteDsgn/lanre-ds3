'use client';
import { WorldGate } from '@ds/map/WorldGate';

// The gate positions itself from its caller, like on the map, so each one gets a patch of ground to stand on.
const Ground = ({ children }) => <div style={{ position: 'relative', width: 300, height: 250, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--bg-meadow)' }}>{children}</div>;

export default function WorldGateExample() {
  return (
    <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
      <Ground><WorldGate world="small_chops" detail="4 memories" onNote={() => {}} style={{ left: 150, top: 235, width: 240 }} /></Ground>
      <Ground><WorldGate world="japan" detail="Surprises only" style={{ left: 150, top: 180, width: 240 }} /></Ground>
    </div>
  );
}

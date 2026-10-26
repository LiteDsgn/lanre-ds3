'use client';
import { useState } from 'react';
import { Modal } from '@ds/panels/Modal';
import { Panel } from '@ds/panels/Panel';
import { Button } from '@ds/buttons/Button';
import { MemoryText } from '@ds/media/MemoryText';
import { Row } from '@stories/kit';

export default function ModalExample() {
  const [open, setOpen] = useState(null);
  const done = () => setOpen(null);
  return (
    <Row>
      <Button variant="confirm" typeface="ui" onClick={() => setOpen('settings')}>Open settings</Button>
      <Button variant="ghost" typeface="ui" onClick={() => setOpen('note')}>Open a world note</Button>
      {open === 'settings' && (
        <Modal label="Settings" onClose={done}>
          {close => (
            <Panel title="Settings" width={320} onClose={close} footer={<Button variant="confirm" onClick={close}>OK</Button>}>
              <div style={{ fontWeight: 600, color: 'var(--ink-700)', textAlign: 'center' }}>Escape, the ×, or OK closes it. Tab stays inside.</div>
            </Panel>
          )}
        </Modal>
      )}
      {open === 'note' && (
        <Modal label="A note from the author" tone="world" world="small_chops" onClose={done}>
          {close => (
            <Panel title="A Note" accent="teal" width={340} onClose={close} footer={<Button variant="confirm" onClick={close}>OK</Button>}>
              <MemoryText size="sm" ornament={false}><p>Fixture note: the author&apos;s real words go here.</p></MemoryText>
            </Panel>
          )}
        </Modal>
      )}
    </Row>
  );
}

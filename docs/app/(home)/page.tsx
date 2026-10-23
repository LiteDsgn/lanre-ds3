import Link from 'next/link';
import { OutlineText } from '@ds/text/OutlineText';
import { LevelNode } from '@ds/map/LevelNode';
import { CurrencyPill } from '@ds/hud/CurrencyPill';
import { Gemstone } from '@ds/identity/Gemstone';
import { storybookUrl } from '@/lib/shared';

const link = 'inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="lanre-preview flex flex-col items-center gap-6 px-6 py-20 text-center" style={{ background: 'var(--bg-meadow)' }}>
        <div className="flex items-end gap-5">
          <LevelNode number={1} state="complete" stars={3} />
          <LevelNode number={2} state="current" />
          <LevelNode number={3} state="locked" />
        </div>
        <OutlineText as="h1" size="xl">Lanre</OutlineText>
        <p className="max-w-xl text-lg font-semibold" style={{ color: 'var(--ink-900)' }}>
          A bright, chunky design system for casual exploration games, and the one behind Lanre&apos;s Birthday Adventure.
        </p>
        <div className="flex items-center gap-4">
          <CurrencyPill kind="coin" value="39" size="sm" />
          <Gemstone gem="emerald" tier={2} size={40} decorative />
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-3 px-6 py-10">
        <Link href="/docs" className={`${link} bg-fd-primary text-fd-primary-foreground hover:opacity-90`}>Read the docs</Link>
        <a href={storybookUrl} target="_blank" rel="noreferrer" className={`${link} border border-fd-border hover:bg-fd-accent`}>Open Storybook</a>
        <Link href="/docs/components/buttons/button" className={`${link} border border-fd-border hover:bg-fd-accent`}>Browse components</Link>
      </section>
    </main>
  );
}

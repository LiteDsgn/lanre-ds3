import type { CSSProperties, ReactNode } from 'react';
import tokens from '@/.generated/tokens.json';

/* Specimens built from tokens/*.css (via lib/generate.mjs), so these pages always show the current values.
   Everything renders inside .lanre-preview, where the tokens exist. */

type Token = { name: string; value: string; group: string; note: string };
type Block = { selector: string; tokens: Token[] };
const data = tokens as Record<string, Block[]>;

const rootTokens = (file: string) => data[file].find(b => b.selector === ':root')?.tokens ?? [];
const mono: CSSProperties = { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 12 };

function Frame({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="not-prose lanre-preview my-6 rounded-xl border border-fd-border" style={{ background: 'var(--cream-50)', padding: 20, overflowX: 'auto', ...style }}>
      {children}
    </div>
  );
}

function Swatch({ value, size = 56, radius = 'var(--radius-sm)' }: { value: string; size?: number; radius?: string }) {
  return <div style={{ width: size, height: size, borderRadius: radius, background: value, boxShadow: 'inset 0 0 0 1px oklch(0 0 0 / 0.08)' }} />;
}

/** Every base ramp in colors.css, one row per group, with the group comment as its caption. */
export function ColorRamps() {
  const groups = new Map<string, Token[]>();
  for (const t of rootTokens('colors')) {
    if (t.group === 'Semantic aliases' || !t.group) continue;
    groups.set(t.group, [...(groups.get(t.group) ?? []), t]);
  }
  return (
    <Frame>
      <div style={{ display: 'grid', gap: 18 }}>
        {[...groups].map(([group, ramp]) => {
          const [title, caption] = group.split(/:\s*/, 2);
          return (
            <div key={group} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, textTransform: 'uppercase', color: 'var(--ink-900)' }}>{title}</div>
                <div style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink-500)' }}>{caption}</div>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {ramp.map(t => (
                  <div key={t.name} style={{ display: 'grid', gap: 4, justifyItems: 'start' }}>
                    <Swatch value={`var(${t.name})`} />
                    <code style={{ ...mono, color: 'var(--ink-700)' }}>{t.name.replace(/^--[a-z]+-?/, '') || t.name}</code>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}

function sample(t: Token): ReactNode {
  const v = `var(${t.name})`;
  if (/^--(shadow|glow|highlight|focus-ring)/.test(t.name)) return <div style={{ width: 64, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--cream-100)', boxShadow: v }} />;
  if (/^--radius/.test(t.name)) return <div style={{ width: 56, height: 40, borderRadius: v, background: 'var(--gold-500)', boxShadow: '0 4px 0 var(--gold-700)' }} />;
  if (/^--(space|layout-gutter)/.test(t.name)) return <div style={{ width: v, height: 14, borderRadius: 4, background: 'var(--blue-500)' }} />;
  if (/^--bevel/.test(t.name)) return <div style={{ width: 56, height: 28, borderRadius: 'var(--radius-sm)', background: 'var(--gold-500)', boxShadow: `0 ${v} 0 var(--gold-700)` }} />;
  if (/^--text-(display|title|body|label|caption|memory|letter)/.test(t.name)) {
    const display = t.name.startsWith('--text-display');
    return <span style={{ fontSize: v, lineHeight: 1.1, fontFamily: display ? 'var(--font-display)' : 'var(--font-ui)', fontWeight: display ? 400 : 700, textTransform: display ? 'uppercase' : 'none', color: 'var(--ink-900)', whiteSpace: 'nowrap' }}>{display ? 'Level 23' : 'Pick your daily gift'}</span>;
  }
  if (/oklch|#[0-9a-f]{3,8}\b|gradient|var\(--(green|blue|gold|coral|teal|berry|wood|stone|cream|ink|white)/i.test(t.value)) return <Swatch value={v} size={36} />;
  return null;
}

/** A table of tokens from one token file, optionally narrowed by name prefix, with a live sample where one makes sense. */
export function TokenTable({ file, prefix, exclude }: { file: 'colors' | 'typography' | 'spacing' | 'effects' | 'gems'; prefix?: string | string[]; exclude?: string }) {
  const prefixes = prefix ? [prefix].flat() : null;
  const rows = rootTokens(file).filter(t => (!prefixes || prefixes.some(p => t.name.startsWith(p))) && (!exclude || !t.name.startsWith(exclude)));
  return (
    <Frame style={{ padding: 0 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ textAlign: 'left', color: 'var(--ink-500)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <th style={{ padding: '10px 16px' }}>Token</th><th style={{ padding: '10px 16px' }}>Value</th><th style={{ padding: '10px 16px' }}>Sample</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(t => (
            <tr key={t.name} style={{ borderTop: '1px solid var(--cream-200)', verticalAlign: 'middle' }}>
              <td style={{ padding: '10px 16px' }}>
                <code style={{ ...mono, color: 'var(--ink-900)', fontWeight: 700 }}>{t.name}</code>
                {t.note && <div style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink-500)', marginTop: 2 }}>{t.note}</div>}
              </td>
              <td style={{ padding: '10px 16px', maxWidth: 280 }}><code style={{ ...mono, color: 'var(--ink-700)', wordBreak: 'break-word' }}>{t.value}</code></td>
              <td style={{ padding: '10px 16px' }}>{sample(t)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Frame>
  );
}

/** Each world's ground and accents, rendered inside its own data-world scope. */
export function WorldGrounds() {
  const worlds = data.worlds.filter(b => b.selector.startsWith('[data-world='));
  const chip = (v: string, label: string) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 12, color: '#fff', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)' }}>
      <Swatch value={v} size={18} radius="999px" />{label}
    </span>
  );
  return (
    <div className="not-prose lanre-preview my-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
      {worlds.map(b => {
        const id = b.selector.match(/"([^"]+)"/)?.[1];
        const name = b.tokens.find(t => t.name === '--world-name')?.value.replace(/"/g, '');
        return (
          <div key={id} data-world={id} style={{ background: 'var(--world-bg)', borderRadius: 'var(--radius-lg)', padding: 16, minHeight: 150, display: 'grid', alignContent: 'space-between', gap: 10 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, textTransform: 'uppercase', color: '#fff', WebkitTextStroke: '0.16em var(--world-stroke)', paintOrder: 'stroke fill' }}>{name}</div>
              <code style={{ ...mono, color: '#fff', textShadow: '0 1px 0 oklch(0 0 0 / 0.4)' }}>data-world=&quot;{id}&quot;</code>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {chip('var(--world-accent)', 'Accent')}{chip('var(--world-path)', 'Path')}{chip('var(--world-stroke)', 'Stroke')}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Creates a docs page for every component listed below that doesn't have one yet:
   live example (docs/examples/<group>/<Name>.jsx), usage notes included from its .prompt.md,
   props table from its .d.ts and a link to its Storybook docs. Existing pages are left alone
   (they're meant to be edited), unless you pass --force. Sidebar meta.json files are only added to:
   a page or group this run creates is appended, so hand-made order and extra pages stay.
   Usage: npm run component-pages -w docs [-- --force] */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeGenerated } from '../lib/generate.mjs';

const docsDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(docsDir, '..');
const force = process.argv.includes('--force');

// Mirrors the Storybook sidebar: section folder → [Storybook prefix, title, groups: folder → [title, components]]
const SECTIONS = {
  components: ['Components', 'Components', {
    buttons: ['Buttons', ['Button', 'IconButton', 'SegmentedTabs']],
    hud: ['HUD', ['CurrencyPill', 'ProgressBar', 'TimerChip', 'Countdown', 'HudBar', 'HudChip']],
    panels: ['Panels', ['Panel', 'Modal']],
    map: ['Map', ['LevelNode', 'StarRating', 'Tile']],
    rewards: ['Rewards', ['RewardCard', 'ItemCell', 'ShopRow']],
    forms: ['Forms', ['Switch', 'Slider']],
    feedback: ['Feedback', ['Badge', 'Tag', 'Toast', 'SoundToggle', 'Sticker', 'Notice', 'ErrorText', 'SavePill', 'SaveAlert', 'LoadingScreen']],
    effects: ['Effects', ['Confetti', 'Sparkles', 'Sunburst']],
    text: ['Text', ['OutlineText', 'Heading']],
    icons: ['Icons', ['GameIcon']],
  }],
  'adventure-components': ['Adventure', 'Adventure components', {
    identity: ['Identity', ['Gemstone', 'Avatar', 'PersonTile', 'AvatarButton']],
    levels: ['Levels', ['ChoiceButton']],
    map: ['Map', ['WorldGate', 'DiscoveryMarker', 'PortraitMedallion']],
    toolbar: ['Toolbar', ['Toolbar', 'ToolbarTab', 'ToolbarNext', 'FastTravelDock']],
    viewer: ['Viewer', ['RoadsideViewer', 'ViewerKeys', 'ViewerKnob', 'WhoButton', 'ClueTab', 'ClueCard', 'RevealTray']],
    media: ['Media', ['MemoryText', 'Words', 'Album', 'Cassette', 'Film', 'Unavailable']],
    games: ['Games', ['MatchCard']],
    contributor: ['Contributor', ['StepBar', 'TextField', 'WorldChip', 'WorldOption', 'WorldSign', 'WorldSigns', 'RadioCard', 'UploadTile', 'RecorderPanel', 'AudioRecorder']],
    quiz: ['Quiz', ['LeaderboardRow']],
  }],
};
const SURFACE = { panels: ' surface="dusk" padding="44px 28px 28px"', forms: ' surface="sky"', contributor: ' surface="sky"', quiz: ' surface="cream"' };

const slug = name => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const yaml = s => JSON.stringify(s.replace(/\s+/g, ' ').trim());

writeGenerated(repoRoot, docsDir);
const props = JSON.parse(readFileSync(path.join(docsDir, '.generated/props.json'), 'utf8'));
const write = (file, text) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, text); };
const addToMeta = (file, title, page) => {
  const meta = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : { title, pages: [] };
  if (!meta.pages.includes(page)) write(file, JSON.stringify({ ...meta, pages: [...meta.pages, page] }, null, 2) + '\n');
};
let created = 0;

for (const [section, [storybookPrefix, sectionTitle, groups]] of Object.entries(SECTIONS)) {
  const sectionDir = path.join(docsDir, 'content/docs', section);
  for (const [group, [groupTitle, names]] of Object.entries(groups)) {
    for (const name of names) {
      const key = `${group}/${name}`;
      if (!props[key]) throw new Error(`No components/${key}.d.ts`);
      if (!existsSync(path.join(docsDir, 'examples', `${key}.jsx`))) throw new Error(`No docs/examples/${key}.jsx`);
      const file = path.join(sectionDir, group, `${slug(name)}.mdx`);
      if (existsSync(file) && !force) continue;
      write(file, `---
title: ${name}
description: ${yaml(props[key].summary)}
---

import Example from '@/examples/${key}';

<Preview${SURFACE[group] ?? ''}>
  <Example />
</Preview>

## Usage

<include>../../../../../components/${key}.prompt.md</include>

## Props

<PropsTable component="${key}" />

<StorybookLink title="${storybookPrefix}/${groupTitle}/${name}" />
`);
      addToMeta(path.join(sectionDir, group, 'meta.json'), groupTitle, slug(name));
      addToMeta(path.join(sectionDir, 'meta.json'), sectionTitle, group);
      created++;
    }
  }
}
console.log(`component-pages: ${created} page(s) written`);

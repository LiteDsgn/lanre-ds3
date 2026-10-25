/* Vite plugin: `import argTypes from '<path>/Name.d.ts?argtypes'` turns a component's .d.ts (the
   design system's source of truth for props) into Storybook argTypes. JSDoc becomes the description,
   string-literal unions become select/radio controls, nodes, styles and callbacks stay table-only. */
import { readProps } from '../tools/read-props.js';

const QUERY = '?argtypes';

function controlFor({ name, kind, options }) {
  switch (kind) {
    case 'enum': return { control: options.length > 5 ? 'select' : 'inline-radio', options };
    case 'string': return { control: 'text' };
    case 'number': return { control: 'number' };
    case 'boolean': return { control: 'boolean' };
    case 'object': return { control: 'object' };
    default: return { control: name === 'children' && kind === 'node' ? 'text' : false };
  }
}

export function argTypesFromDts(file) {
  const argTypes = {};
  for (const prop of readProps(file).props) {
    argTypes[prop.name] = {
      description: prop.description,
      type: { name: 'other', value: '', required: prop.required },
      table: { type: { summary: prop.type } },
      ...controlFor(prop),
    };
  }
  return argTypes;
}

export default function dtsArgTypes() {
  return {
    name: 'lanre:dts-argtypes',
    enforce: 'pre',
    async resolveId(source, importer) {
      if (!source.endsWith(QUERY)) return null;
      const resolved = await this.resolve(source.slice(0, -QUERY.length), importer, { skipSelf: true });
      return resolved && '\0' + resolved.id + QUERY;
    },
    load(id) {
      if (!id.startsWith('\0') || !id.endsWith(QUERY)) return null;
      const file = id.slice(1, -QUERY.length);
      this.addWatchFile(file);
      return 'export default ' + JSON.stringify(argTypesFromDts(file)) + ';';
    },
  };
}

import { TypeTable, type TypeNode } from 'fumadocs-ui/components/type-table';
import props from '@/.generated/props.json';

type PropsData = Record<string, {
  summary: string;
  defaults: Record<string, string>;
  props: { name: string; description: string; type: string; required: boolean }[];
}>;

/* Own props of a component, read from its .d.ts (and defaults from its .jsx) by lib/generate.mjs.
   `component` is its path under components/, e.g. "buttons/Button". */
export function PropsTable({ component }: { component: string }) {
  const data = (props as PropsData)[component];
  if (!data) throw new Error(`PropsTable: no props found for "${component}". Is there a components/${component}.d.ts?`);
  const type: Record<string, TypeNode> = {};
  for (const prop of data.props) {
    type[prop.name] = {
      type: prop.type,
      description: prop.description || undefined,
      required: prop.required,
      default: data.defaults[prop.name],
    };
  }
  return <TypeTable type={type} />;
}

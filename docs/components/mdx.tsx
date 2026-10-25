import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Preview, StorybookLink } from './preview';
import { PropsTable } from './props-table';
import { ColorRamps, TokenTable, WorldGrounds } from './tokens';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Preview,
    StorybookLink,
    PropsTable,
    ColorRamps,
    TokenTable,
    WorldGrounds,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}

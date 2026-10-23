/* Vite plugin: `import argTypes from '<path>/Name.d.ts?argtypes'` turns a component's .d.ts (the
   design system's source of truth for props) into Storybook argTypes. JSDoc becomes the description,
   string-literal unions become select/radio controls, nodes, styles and callbacks stay table-only. */
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const QUERY = '?argtypes';

function controlFor(node, name, aliases) {
  if (ts.isTypeReferenceNode(node) && aliases[node.typeName.getText()]) return controlFor(aliases[node.typeName.getText()], name, aliases);
  if (ts.isParenthesizedTypeNode(node)) return controlFor(node.type, name, aliases);
  if (ts.isFunctionTypeNode(node)) return { control: false };
  if (ts.isUnionTypeNode(node)) {
    const parts = node.types.map(t => ts.isTypeReferenceNode(t) && aliases[t.typeName.getText()] ? aliases[t.typeName.getText()] : t);
    const literals = parts.filter(t => ts.isLiteralTypeNode(t) && ts.isStringLiteral(t.literal)).map(t => t.literal.text);
    if (literals.length) return { control: literals.length > 5 ? 'select' : 'inline-radio', options: literals };
    if (parts.some(t => t.kind === ts.SyntaxKind.StringKeyword)) return { control: 'text' };
    if (parts.some(t => t.kind === ts.SyntaxKind.NumberKeyword)) return { control: 'number' };
    return { control: false };
  }
  if (node.kind === ts.SyntaxKind.BooleanKeyword) return { control: 'boolean' };
  if (node.kind === ts.SyntaxKind.NumberKeyword) return { control: 'number' };
  if (node.kind === ts.SyntaxKind.StringKeyword) return { control: 'text' };
  if (ts.isArrayTypeNode(node) || ts.isTypeLiteralNode(node)) return { control: 'object' };
  return { control: name === 'children' ? 'text' : false };
}

export function argTypesFromDts(file) {
  const sf = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
  const interfaces = {}, aliases = {};
  let propsName;
  sf.forEachChild(node => {
    if (ts.isInterfaceDeclaration(node)) interfaces[node.name.text] = node;
    if (ts.isTypeAliasDeclaration(node)) aliases[node.name.text] = node.type;
    if (ts.isFunctionDeclaration(node) && !propsName) {
      const param = node.parameters[0];
      if (param?.type && ts.isTypeReferenceNode(param.type)) propsName = param.type.typeName.getText();
    }
  });
  const iface = interfaces[propsName] || Object.values(interfaces).find(i => i.name.text.endsWith('Props'));
  const argTypes = {};
  for (const member of iface?.members || []) {
    if (!ts.isPropertySignature(member) || !member.type) continue;
    const name = member.name.getText();
    const description = ts.getJSDocCommentsAndTags(member)
      .map(doc => ts.getTextOfJSDocComment(doc.comment) || '')
      .filter(Boolean).join('\n');
    argTypes[name] = {
      description,
      type: { name: 'other', value: '', required: !member.questionToken },
      table: { type: { summary: member.type.getText(sf).replace(/\s+/g, ' ') } },
      ...controlFor(member.type, name, aliases),
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

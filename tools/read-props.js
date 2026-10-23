/* Reads a component's props from its .d.ts, the design system's source of truth for props, and its
   defaults from the .jsx. Shared by Storybook (.storybook/dts-argtypes.js) and the docs props tables. */
import { readFileSync } from 'node:fs';
import ts from 'typescript';

/* kind: enum (string-literal union, see options) · string · number · boolean · object · function · node */
function kindOf(node, aliases) {
  if (ts.isTypeReferenceNode(node) && aliases[node.typeName.getText()]) return kindOf(aliases[node.typeName.getText()], aliases);
  if (ts.isParenthesizedTypeNode(node)) return kindOf(node.type, aliases);
  if (ts.isFunctionTypeNode(node)) return { kind: 'function' };
  if (ts.isUnionTypeNode(node)) {
    const parts = node.types.map(t => ts.isTypeReferenceNode(t) && aliases[t.typeName.getText()] ? aliases[t.typeName.getText()] : t);
    const options = parts.filter(t => ts.isLiteralTypeNode(t) && ts.isStringLiteral(t.literal)).map(t => t.literal.text);
    if (options.length) return { kind: 'enum', options };
    if (parts.some(t => t.kind === ts.SyntaxKind.StringKeyword)) return { kind: 'string' };
    if (parts.some(t => t.kind === ts.SyntaxKind.NumberKeyword)) return { kind: 'number' };
    return { kind: 'node' };
  }
  if (node.kind === ts.SyntaxKind.BooleanKeyword) return { kind: 'boolean' };
  if (node.kind === ts.SyntaxKind.NumberKeyword) return { kind: 'number' };
  if (node.kind === ts.SyntaxKind.StringKeyword) return { kind: 'string' };
  if (ts.isArrayTypeNode(node) || ts.isTypeLiteralNode(node)) return { kind: 'object' };
  return { kind: 'node' };
}

const jsDocText = node => ts.getJSDocCommentsAndTags(node).map(doc => ts.getTextOfJSDocComment(doc.comment) || '').filter(Boolean).join('\n');

/* Returns { summary, props: [{ name, description, type, required, kind, options? }] }, own props only. */
export function readProps(dtsFile) {
  const sf = ts.createSourceFile(dtsFile, readFileSync(dtsFile, 'utf8'), ts.ScriptTarget.Latest, true);
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
  const props = [];
  for (const member of iface?.members || []) {
    if (!ts.isPropertySignature(member) || !member.type) continue;
    props.push({
      name: member.name.getText(),
      description: jsDocText(member),
      type: member.type.getText(sf).replace(/\s+/g, ' '),
      required: !member.questionToken,
      ...kindOf(member.type, aliases),
    });
  }
  return { summary: iface ? jsDocText(iface) : '', props };
}

/* Default values from `export function Name({ a = 1, b = 'x', ...rest })`, as source text. */
export function readDefaults(jsxFile, name) {
  const src = readFileSync(jsxFile, 'utf8');
  const start = src.indexOf(`export function ${name}(`);
  if (start === -1) return {};
  const open = src.indexOf('{', start);
  let depth = 0, end = open, quote = null;
  for (; end < src.length; end++) {
    const c = src[end];
    if (quote) { if (c === quote && src[end - 1] !== '\\') quote = null; continue; }
    if (c === "'" || c === '"' || c === '`') quote = c;
    else if ('{[('.includes(c)) depth++;
    else if ('}])'.includes(c) && --depth === 0) break;
  }
  const defaults = {};
  let part = '', level = 0;
  for (const c of src.slice(open + 1, end) + ',') {
    if ('{[('.includes(c)) level++;
    if ('}])'.includes(c)) level--;
    if (c === ',' && level === 0) {
      const m = part.trim().match(/^([A-Za-z_$][\w$]*)\s*=\s*([\s\S]+)$/);
      if (m) defaults[m[1]] = m[2].trim();
      part = '';
    } else part += c;
  }
  return defaults;
}

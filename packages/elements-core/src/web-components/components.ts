import { Docs } from '../components/Docs';
import { SidebarLayout } from '../components/Layout';
import { createElementClass } from './createElementClass';

// @ts-ignore
export const SidebarLayoutElements = createElementClass(SidebarLayout, {
  sidebar: { type: 'object', defaultValue: null },
  maxContentWidth: { type: 'number' },
  sidebarWidth: { type: 'number' },
  children: { type: 'object', defaultValue: null },
});

export const DocsElements = createElementClass(Docs, {
  // @ts-ignore
  nodeType: { type: 'string' },
  // @ts-ignore
  nodeData: { type: 'string' },
  useNodeForRefResolving: { type: 'boolean', defaultValue: false },
  refResolver: { type: 'function' },
  maxRefDepth: { type: 'number' },
  nodeTitle: { type: 'string' },
});

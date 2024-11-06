import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { glob } from "glob";
import { kebabCase } from 'scule'

// const script = fileURLToPath(import.meta.url);
const cwd = process.cwd();

const files = await glob('src/plugins/components/**/index.ts', {
  ignore: ['src/plugins/components/index.ts'],
});

for (const file of files) {
  const dir = dirname(file);
  const folder = dir.split('/').pop();
  const out = join(cwd, 'src/css', `${folder}.css`);
  const mod = await import(join('../..', dir, 'index.ts')).then((mod) => mod.default);

  // mock functions
  const components: any[] = [];  
  function addComponents(input: any) {
    components.push(input);
  }
  function theme(key: string) {
    key = key.replace('nui.', '');
    return mod.config.theme.nui[key];
  }

  // run the script
  mod.handler({ addComponents, theme });

  let css = '';

  css += `/* generated using "pnpm jiti scripts/generate-utilities.ts" */\n`;
  css += `/* @utility nui-${folder} */\n\n`;
  // css += `@layer components {\n`;

  for (const component of components) { 
    css += toUtilities(component);
  }

  // css += `}\n`;

  console.log(out);
  await writeFile(out, css);
}

function toCSS(component: any, level = 0, addSelector = true) {
  let css = '';
  for (const [selector, rules] of Object.entries(component)) {
    if (addSelector) {
      css += `${'  '.repeat(level)}${selector} {\n`;
    }

    let hasRules = false;
    for (const [rule, value] of Object.entries(rules as any)) {
      if (typeof value === 'object') {
        if (Object.keys(value as any).length === 0) {
          css += `${'  '.repeat(level + (addSelector ? 1 : 0))}${rule};\n`;
          hasRules = true;
        } else {
          if (hasRules) {
            css += `\n`;
          }

          css += toCSS({ [rule]: value }, level + (addSelector ? 1 : 0));
          hasRules = true;
        }
      } else {
        css += `${'  '.repeat(level + (addSelector ? 1 : 0))}${kebabCase(rule)}: ${value};\n`;
      }
    }

    if (addSelector) {
      css += `${'  '.repeat(level)}}\n`;
    }
  }
  return css;
}



function toUtilities(component: any, level = 0) {
  let css = '';
  for (const [selector, rules] of Object.entries(component)) {
    if (selector.includes(':') || selector.includes('(') || selector.includes(':') || selector.includes(' ') || selector.includes('[')) {
      console.warn(`Skipping invalid selector: ${selector}`);
      css += toCSS({ [selector]: rules }, level);
      continue;
    }

    css += `${'  '.repeat(level)}@utility ${selector.split('.')[1]} {\n`;

    let hasRules = false;
    for (const [rule, value] of Object.entries(rules as any)) {
      if (typeof value === 'object') {
        if (Object.keys(value as any).length === 0) {
          css += `${'  '.repeat(level + 1)}${rule};\n`;
          hasRules = true;
        } else {
          if (rule.includes(':') || rule.includes('(') || rule.includes(':') || rule.includes(' ') || rule.includes('[')) {
            if (hasRules) {
              css += `\n`;
            }

            css += toCSS({ [rule]: value }, level + 1);
            hasRules = true;
          }
        }
      } else {
        css += `${'  '.repeat(level + 1)}${kebabCase(rule)}: ${value};\n`;
      }
    }

    css += `${'  '.repeat(level)}}\n`;
  }

  
  for (const [selector, rules] of Object.entries(component)) {

    let hasRules = false;
    for (const [rule, value] of Object.entries(rules as any)) {
      if (typeof value === 'object') {
        if (Object.keys(value as any).length === 0) {
          // css += `${'  '.repeat(level + 1)}${rule};\n`;
          // hasRules = true;
        } else {
          if (rule.includes(':') || rule.includes('(') || rule.includes(':') || rule.includes(' ') || rule.includes('[')) {
            continue;
          }
          // css += toUtilities({ [rule]: value }, level + 1, false);
          css += `${'  '.repeat(level)}@utility ${rule.split('.')[1]} {\n`;
          css += toCSS({ [rule]: value }, level + 1, false);
          css += `${'  '.repeat(level)}}\n`;
        }
      } else {
        // css += `${'  '.repeat(level + 1)}${kebabCase(rule)}: ${value};\n`;
      }
    }

  }
  return css;
}
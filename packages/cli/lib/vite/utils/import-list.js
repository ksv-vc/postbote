import * as t from "@babel/types";
import path from "path";
import { template, generate } from "./babel.js";
import { importPath } from "../../paths.js";

/**
 * This file was partially influenced by ladle.
 * @link https://github.com/tajo/ladle/blob/main/packages/ladle/lib/cli/vite-plugin/generate/get-story-imports.js
 */

/**
 * @param {import('../../../shared/types.js')} previewEntries
 */
export const getPreviewComponentImports = previewEntries => {
  let imports = `import { lazy, createElement, Fragment } from "react";\n`;
  imports += `import { renderToStaticMarkup } from "react-dom/server";`;
  imports += `import mjml2html from "mjml-browser";`;
  const lazyImport = template(`
    const %%component%% = lazy(() =>
      import(%%source%%).then((mod) => {
        const Component = createElement(mod.default.preview);
        const staticMarkup = renderToStaticMarkup(Component);
        const { html } = mjml2html(staticMarkup);

        return {
          default: ({ as }) => createElement(as, {
            initialContent: html
          })
        };
      })
    );
  `);

  Object.keys(previewEntries).forEach(entry => {
    const { fileId, filePath } = previewEntries[entry];
    const ast = lazyImport({
      source: t.stringLiteral(path.join(importPath, filePath)),
      component: t.identifier(fileId),
    });
    imports += `\n${generate(ast).code}`;
  });

  return imports;
};

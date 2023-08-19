import * as t from "@babel/types";
import path from "path";
import { generate } from "./babel.js";
import { importPath } from "../../paths.js";
import { template } from "./component-templates/react-email.js";

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

  Object.keys(previewEntries).forEach(entry => {
    const { fileId, filePath } = previewEntries[entry];
    const ast = template({
      source: t.stringLiteral(path.join(importPath, filePath)),
      component: t.identifier(fileId),
    });

    imports += `\n${generate(ast).code}`;
  });

  return imports;
};

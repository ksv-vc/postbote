import * as t from "@babel/types";
import { generate } from "./babel.js";

/**
 * @param {import('../../../shared/types.js')} previewEntries
 */
export const getListOfPreviews = previewEntries => {
  return generate(
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier("previews"),
          t.objectExpression(
            Object.entries(previewEntries).map(([entry, { fileId }]) => {
              return t.objectProperty(
                t.stringLiteral(entry),
                t.objectExpression([
                  t.objectProperty(
                    t.identifier("fileId"),
                    t.stringLiteral(fileId),
                  ),
                  t.objectProperty(
                    t.identifier("component"),
                    t.identifier(fileId),
                  ),
                ]),
              );
            }),
          ),
        ),
      ]),
    ),
  ).code;
};

import globby from "globby";
import { log } from "../logger.js";
import { getPreviewData } from "./utils/previews.js";
import { getListOfPreviews } from "./utils/preview-list.js";
import { getPreviewComponentImports } from "./utils/import-list.js";

export default function previewsModulePlugin() {
  const virtualModuleId = "virtual:postbote-previews";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "previews-virtual-module-plugin", // required, will show up in warnings and errors
    /**
     * @param {string} id
     */
    resolveId(id) {
      if (id === virtualModuleId) {
        log(`resolving ${id}`);
        return resolvedVirtualModuleId;
      }
    },
    /**
     * @param {string} id
     */
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        log(`transforming ${id}`);
        try {
          const previews = await getPreviewData(
            await globby("**/*.preview.{t,j}s{,x}"),
          );
          const template = `
            ${getPreviewComponentImports(previews)}
            ${getListOfPreviews(previews)}
          `;
          return template;
        } catch (e) {
          return `export const previews = []`;
        }
      }
    },
  };
}

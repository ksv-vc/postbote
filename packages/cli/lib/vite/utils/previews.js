import path from "path";
import ReactDOMServer from "react-dom/server";
import { log } from "../../logger.js";
import { camelize } from "./camelize.js";

/**
 * @param {string[]} entries
 */
export const getPreviewData = async entries => {
  const previewData = {};

  for (let entry of entries) {
    log("Parsing entry: " + entry);

    previewData[entry] = {
      fileId: getFileId(entry),
      filePath: entry,
    };
  }

  return previewData;
};

/**
 * @param {string} entry
 */
export const getFileId = filename => {
  const pathParts = filename.split("/");
  const pathPart = pathParts[pathParts.length - 1].split(".")[0];

  return camelize(pathPart);
};

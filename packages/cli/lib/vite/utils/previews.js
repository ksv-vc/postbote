import path from "path";
import ReactDOMServer from "react-dom/server";
import { log } from "../../logger.js";

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
  return pathParts[pathParts.length - 1].split(".")[0];
};

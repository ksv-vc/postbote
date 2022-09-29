import { ComponentType } from "react";

export type FileId = string;

export type PreviewEntry = {
  [key: string]: {
    fileId: FileId;
    filePath: string;
    renderedSource: string;
  };
};

export type PreviewEntryList = {
  [key: string]: {
    fileId: FileId;
    component: React.ComponentType<{ as?: string | ComponentType }>;
  };
};

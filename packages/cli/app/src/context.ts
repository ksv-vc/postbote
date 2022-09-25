import { previews } from "virtual:postbote-previews";
import { createContext, useContext } from "react";

export const PreviewContext = createContext(previews);
export const usePreviewContext = () => useContext(PreviewContext);

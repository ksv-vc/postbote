import { createRoot } from "react-dom/client";
import { App } from "./app";
import { previews } from "virtual:postbote-previews";
import { PreviewContext } from "./context";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);
root.render(
  <PreviewContext.Provider value={previews}>
    <App />
  </PreviewContext.Provider>,
);

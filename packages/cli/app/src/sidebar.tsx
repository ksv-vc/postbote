import React from "react";
import { usePreviewContext } from "./context";

export const Sidebar = () => {
  const previews = usePreviewContext();

  return (
    <aside className="pb-sidebar">
      <h3 className="pb-title pb-sidebar-title">Postbote</h3>
      {Object.keys(previews).map(previewId => (
        <a key={previewId} href={`?previewId=${previewId}`}>{previewId}</a>
      ))}
    </aside>
  );
};

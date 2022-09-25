import { createElement } from "react";
import Frame from "react-frame-component";
import { Sidebar } from "./sidebar";
import { previews } from "virtual:postbote-previews";
import { parse } from "query-string";

export const App = () => {
  const { previewId } = parse(window.location.search);
  const preview = previews[previewId as keyof typeof previews];

  return (
    <>
      <Sidebar />
      {Object.keys(previews).length === 0 ? (
        <div className="pb-empty-state">No previews available.</div>
      ) : (
        <>
          {!preview && (
            <div className="pb-empty-state">Please select a preview first.</div>
          )}
          {preview && (
            <Frame className="pb-iframe">
              {createElement(preview.component)}
            </Frame>
          )}
        </>
      )}
    </>
  );
};

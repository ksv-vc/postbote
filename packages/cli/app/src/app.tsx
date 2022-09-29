import { createElement, useState } from "react";
import Frame from "react-frame-component";
import { Sidebar } from "./sidebar";
import { previews } from "virtual:postbote-previews";
import { parse } from "query-string";
import { styled } from "@stitches/react";

export const App = () => {
  const { previewId } = parse(window.location.search);
  const preview = previews[previewId as keyof typeof previews];

  const [breakpoint, setBreakpoint] = useState<
    "flexible" | "tablet" | "mobile"
  >("flexible");

  let width: string | number = "100%";

  switch (breakpoint) {
    case "tablet":
      width = 1024;
      break;
    case "mobile":
      width = 380;
      break;
  }

  return (
    <>
      <Sidebar />
      {Object.keys(previews).length === 0 ? (
        <div className="pb-empty-state">No previews available.</div>
      ) : (
        <Preview>
          <TitleBar>
            <div>
              <TitleBarItem>Test</TitleBarItem>
            </div>
            <div>
              <TitleBarItem onClick={() => setBreakpoint("flexible")}>
                Flexible
              </TitleBarItem>
              <TitleBarItem onClick={() => setBreakpoint("tablet")}>
                720px
              </TitleBarItem>
              <TitleBarItem onClick={() => setBreakpoint("mobile")}>
                320px
              </TitleBarItem>
            </div>
            <div>
              <TitleBarItem>Test</TitleBarItem>
            </div>
          </TitleBar>
          {!preview && (
            <div className="pb-empty-state">Please select a preview first.</div>
          )}
          {preview && (
            <FrameContainer css={{ width }}>
              {createElement(preview.component, { as: Frame })}
            </FrameContainer>
          )}
        </Preview>
      )}
    </>
  );
};

const Preview = styled("section", {
  width: "100%",

  display: "grid",
  gridTemplateRows: "min-content auto",
});

const TitleBar = styled("nav", {
  padding: "12px 20px",
  background: "white",
  boxShadow: "inset 0 -1px 0 0 #eee",

  display: "flex",
  justifyContent: "space-between",

  "&>div": {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
});

const TitleBarItem = styled("div", {
  display: "inline-block",
  height: 32,
  backgroundColor: "#eee",
  padding: "4px 12px",
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "24px",
});

const FrameContainer = styled("div", {
  willChange: "width",
  margin: "0 auto",
  backgroundColor: "white",
  transition: "width 280ms ease",

  "&>iframe": {
    border: 0,
    width: "100%",
    height: "100%",
  },
});

import { styled } from "@stitches/react";
import { parse } from "query-string";
import { usePreviewContext } from "./context";

export const Sidebar = () => {
  const previews = usePreviewContext();
  const { previewId: activePreviewId } = parse(window.location.search);

  return (
    <Container>
      <Title>Postbote</Title>
      <Links>
        <LinkTitle>Previews</LinkTitle>
        {Object.entries(previews).map(([previewId, { fileId }]) => (
          <Link
            key={previewId}
            active={activePreviewId === previewId}
            href={`?previewId=${previewId}`}
          >
            {fileId}
          </Link>
        ))}
      </Links>
    </Container>
  );
};

const Container = styled("aside", {
  backgroundColor: "white",
  boxShadow: "inset -1px 0 0 #eee",
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,

  display: "grid",
  gridTemplateRows: "min-content auto",
});

const Title = styled("h2", {
  fontSize: 16,
  lineHeight: "24px",
  margin: 0,
  fontWeight: 600,

  padding: "16px 20px",
  boxShadow: "inset 0 -1px 0 0 #eee",
});

const Links = styled("div", {
  padding: 20,
  minHeight: 1,

  display: "flex",
  flexDirection: "column",
  rowGap: 4,
});

const LinkTitle = styled("h3", {
  margin: 0,
  marginBottom: 8,
  fontSize: 11,
  textTransform: "uppercase",
  color: "#999",
});

const Link = styled("a", {
  display: "block",
  padding: 12,
  borderRadius: 12,
  fontSize: 14,

  textDecoration: "none",
  color: "inherit",
  fontWeight: 500,

  "&:hover": {
    backgroundColor: "#eee",
  },

  variants: {
    active: {
      true: { backgroundColor: "#eee" },
      false: { backgroundColor: "transparent" },
    },
  },
});

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { styled } from "@stitches/react";
import EmailPreview from "../components/EmailPreview";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Container>
      <Header>
        <Logo>
          <img
            src="/img/logo.png"
            srcSet="/img/logo.png 1x, /img/logo@2x.png 2x, /img/logo@3x.png 3x"
          />
          <div>
            <Title>Postbote</Title>
            <Subtitle>for React</Subtitle>
          </div>
        </Logo>

        <Button href="/docs/intro">Documentation</Button>
      </Header>

      <EmailPreview />

      <Headline>
        What is <Code>`postbote`</Code>?
      </Headline>
      <Paragraph>
        Postbote features a whole range of tools for easier development of email
        templates.
      </Paragraph>

      <Paragraph>
        We have taken over the development of <Code>`mjml-react`</Code>, since
        it was deprecated, and will continue to offer the new stack on top of
        mjml.
      </Paragraph>

      <br />

      <Headline>Motivation</Headline>
      <Paragraph>
        As a head of development, I was constantly in charge of developing
        emails for clients, when they wanted to include transactional emails in
        their products. As a fellow developer (I suppose you are) you might know
        the feeling, when you are being told to develop a new email layout. This
        project aims to help with this, by creating (maybe) data-driven email
        templating that can be used freely in Node.js applications, but that can
        also be just as easily exported for usage in a Ruby on Rails, Python, or
        other project.
      </Paragraph>

      <Footer>
        Copyright &copy; 2022 <a href="https://ksv.vc/">KS Ventures GmbH</a> –
        <a href="https://ksv.vc/imprint">Imprint</a>
      </Footer>
    </Container>
  );
}

const Container = styled("div", {
  letterSpacing: "-0.03em",
  maxWidth: "580px",
  width: "96%",
  margin: "0 auto",
  padding: "16px 0",
});

const Header = styled("header", {
  padding: "42px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Logo = styled("section", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "8px",
  alignItems: "center",
});

const Title = styled("h1", { margin: 0, fontSize: 16, fontWeight: 700 });

const Subtitle = styled("h2", {
  margin: 0,
  fontSize: 14,
  opacity: 0.5,
  fontWeight: "normal",
});

const Headline = styled("h3", {
  fontSize: 20,
  lineHeight: "24px",
  margin: 0,
});

const Code = styled("pre", { display: "inline", padding: 4 });

const Paragraph = styled("p", {
  fontSize: 16,
  color: "rgb(0 0 0 / 80%)",
  margin: "8px 0",
});

const Footer = styled("footer", {
  borderTop: "1px solid #eee",
  marginTop: 32,
  paddingTop: 32,
  paddingBottom: 20,
  fontSize: 14,
});

const Button = styled(Link, {
  borderRadius: 4,
  padding: "4px 12px",
  transition: "background-color 120ms ease",

  "&:hover": {
    backgroundColor: "#eee",
  },
});

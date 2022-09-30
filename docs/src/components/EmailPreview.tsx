import { styled } from "@stitches/react";
import React from "react";

export default function EmailPreview() {
  return (
    <Container>
      <Frame>
        <Header>
          <Title>Your new email companion</Title>
          <Info>
            <Avatar>P</Avatar>
            <div>
              <Sender>Postbote Core Team</Sender>
              <SenderInfo>
                <b>To:</b> [redacted]
              </SenderInfo>
              <SenderInfo>
                <b>Reply-To:</b> core@postbote.dev
              </SenderInfo>
            </div>
          </Info>
        </Header>

        <Email>
          <Title>Your new company</Title>
          <Content>
            <b>Hello [redacted],</b>
            <br />
            happy to have you here. To verify your email, please click the link
            below on the button, or copy the link in a new window in your
            browser.
          </Content>
        </Email>
      </Frame>
    </Container>
  );
}

const Container = styled("figure", {
  backgroundColor: "rgb(234, 230, 235)",
  padding: 32,
  paddingBottom: 0,
  height: 294,
  borderRadius: 12,
  margin: 0,
  marginBottom: 40,
  overflow: "hidden",
});

const Frame = styled("div", {
  borderRadius: "8px 8px 0 0",
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgb(0 0 0 / 20%)",
});

const Header = styled("header", {
  padding: 24,
});

const Title = styled("h4", {
  fontSize: 18,
  margin: 0,
});

const Info = styled("div", {
  marginTop: 12,
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "12px",
});

const Avatar = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 0px 0px 1px",
  gap: "10px",

  width: 40,
  height: 40,
  fontWeight: 700,
  color: "white",

  background: "linear-gradient(180deg, #A3AAB6 0%, #858A95 100%)",
  borderRadius: 100,
});

const Sender = styled("div", {
  fontSize: 15,
  color: "black",
  fontWeight: 500,
});

const SenderInfo = styled("div", {
  fontSize: 14,
  color: "rgb(0 0 0 / 50%)",

  "&>b": {
    fontWeight: "normal",
    color: "rgb(0 0 0 / 100%)",
  },
});

const Email = styled("div", {
  backgroundColor: "#f6f6f6",
  borderTop: "1px solid #eee",
  padding: 24,
});

const Content = styled("p", {
  fontSize: 14,
  marginTop: 12,
});

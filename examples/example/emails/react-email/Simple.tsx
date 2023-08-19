import {
  Html,
  Head,
  Body,
  Font,
  Text,
  Container,
} from "@react-email/components";

type ExampleProps = {
  name: string;
  headline?: string;
  body: string;
};

export const Simple = ({ name, headline, body }: ExampleProps) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          webFont={{
            url: "https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.19",
            format: "woff2",
          }}
          fallbackFontFamily="Helvetica"
        />
      </Head>
      <Body>
        <Container style={{ width: 600 }}>
          {headline && (
            <Text
              style={{
                fontFamily: "Inter",
                padding: "24px 0 8px",
                fontSize: 24,
              }}
            >
              {headline}
            </Text>
          )}
          <Text
            style={{
              fontFamily: "Inter",
              padding: "16px 0 16px",
              fontSize: 15,
              lineHeight: "24px",
            }}
          >
            Hello {name},<br />
            {body}
          </Text>
          <Text
            style={{
              fontFamily: "Inter",
              padding: "16px 0",
              fontSize: 15,
              lineHeight: "24px",
            }}
          >
            Best, Postbote!
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

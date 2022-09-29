import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlFont,
  MjmlHead,
} from "@postbote/mjml-react";

type ExampleProps = {
  name: string;
  headline?: string;
  body: string;
};

export const Simple = ({ name, headline, body }: ExampleProps) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      </MjmlHead>
      <MjmlBody width={600}>
        <MjmlSection padding="0 24px 0" cssClass="smooth">
          <MjmlColumn>
            {headline && (
              <MjmlText fontFamily="Inter" padding="24px 0 8px" fontSize={24}>
                {headline}
              </MjmlText>
            )}
            <MjmlText
              fontFamily="Inter"
              padding="16px 0 16px"
              fontSize={15}
              lineHeight={24}
            >
              Hello {name},<br />
              {body}
            </MjmlText>
            <MjmlText
              fontFamily="Inter"
              padding="16px 0"
              fontSize={15}
              lineHeight={24}
            >
              Best, Postbote!
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

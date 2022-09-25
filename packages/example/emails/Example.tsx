import { ReactElement } from "react";
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
} from "@postbote/mjml-react";

type ExampleProps = {
  name: string;
  headline?: string;
  body: ReactElement;
  bulletedList?: ReactElement;
  ctaText?: string;
};

export const Example = ({ name, headline, body }: ExampleProps) => {
  return (
    <Mjml>
      <MjmlBody width={600}>
        <MjmlSection padding="0 24px 0" cssClass="smooth">
          <MjmlColumn>
            {headline && (
              <MjmlText padding="24px 0 8px" fontSize={24} cssClass="paragraph">
                {headline}
              </MjmlText>
            )}
            <MjmlText padding="16px 0 16px" fontSize={15} cssClass="paragraph">
              Hello {name},
            </MjmlText>
            <MjmlText cssClass="paragraph" padding="0" fontSize={15}>
              <>{body}</>
            </MjmlText>
            <MjmlText padding="16px 0" fontSize={15} cssClass="paragraph">
              ♥,
              <br />
              Mailing
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

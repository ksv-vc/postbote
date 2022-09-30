import { renderToString } from "react-dom/server";
import {
  Mjml,
  MjmlText,
  MjmlClass,
  MjmlAll,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlAttributes,
  MjmlHead,
} from "../lib";

test("renders properly without attributes", () => {
  expect(renderToString(<MjmlAttributes />)).toEqual(
    "<mj-attributes></mj-attributes>",
  );
});

test("renders example from docs", () => {
  expect(
    renderToString(
      <Mjml>
        <MjmlHead>
          <MjmlAttributes>
            <MjmlText padding="0" />
            <MjmlClass name="blue" color="blue" />
            <MjmlClass name="big" fontSize="20px" />
            <MjmlAll fontFamily="Arial" />
          </MjmlAttributes>
        </MjmlHead>
        <MjmlBody>
          <MjmlSection>
            <MjmlColumn>
              <MjmlText className="blue big">Hello World!</MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>,
    ),
  ).toEqual(
    `<mjml><mj-head><mj-attributes><mj-text padding="0"></mj-text><mj-class name="blue" color="blue"></mj-class><mj-class name="big" font-size="20px"></mj-class><mj-all font-family="Arial"></mj-all></mj-attributes></mj-head><mj-body><mj-section><mj-column><mj-text mj-class="blue big">Hello World!</mj-text></mj-column></mj-section></mj-body></mjml>`,
  );
});

test("renders example from docs with `cssClass`", () => {
  expect(
    renderToString(
      <Mjml>
        <MjmlHead>
          <MjmlAttributes>
            <MjmlText padding="0" />
            <MjmlClass name="blue" color="blue" />
            <MjmlClass name="big" fontSize="20px" />
            <MjmlAll fontFamily="Arial" />
          </MjmlAttributes>
        </MjmlHead>
        <MjmlBody>
          <MjmlSection>
            <MjmlColumn>
              <MjmlText cssClass="blue big">Hello World!</MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlBody>
      </Mjml>,
    ),
  ).toEqual(
    `<mjml><mj-head><mj-attributes><mj-text padding="0"></mj-text><mj-class name="blue" color="blue"></mj-class><mj-class name="big" font-size="20px"></mj-class><mj-all font-family="Arial"></mj-all></mj-attributes></mj-head><mj-body><mj-section><mj-column><mj-text mj-class="blue big">Hello World!</mj-text></mj-column></mj-section></mj-body></mjml>`,
  );
});

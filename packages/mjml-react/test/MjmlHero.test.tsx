import { renderToString } from "react-dom/server";
import { Mjml, MjmlBody, MjmlButton, MjmlHero, MjmlText } from "../lib";

test("renders example from docs (fixed-height)", () => {
  expect(
    renderToString(
      <Mjml>
        <MjmlBody>
          <MjmlHero
            mode="fixed-height"
            height="469px"
            backgroundWidth="600px"
            backgroundHeight="469px"
            backgroundUrl="https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg"
            backgroundColor="#2a3448"
            padding="100px 0px"
          >
            <MjmlText
              padding="20px"
              color="#ffffff"
              fontFamily="Helvetica"
              align="center"
              fontSize="45px"
              lineHeight="45px"
              fontWeight={900}
            >
              GO TO SPACE
            </MjmlText>
            <MjmlButton href="https://mjml.io/" align="center">
              ORDER YOUR TICKET NOW
            </MjmlButton>
          </MjmlHero>
        </MjmlBody>
      </Mjml>,
    ),
  ).toEqual(
    `<mjml><mj-body><mj-hero mode="fixed-height" height="469px" background-width="600px" background-height="469px" background-url="https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg" background-color="#2a3448" padding="100px 0px"><mj-text padding="20px" color="#ffffff" font-family="Helvetica" align="center" font-size="45px" line-height="45px" font-weight="900">GO TO SPACE</mj-text><mj-button href="https://mjml.io/" align="center">ORDER YOUR TICKET NOW</mj-button></mj-hero></mj-body></mjml>`,
  );
});

test("renders example from docs (fluid-height)", () => {
  expect(
    renderToString(
      <Mjml>
        <MjmlBody>
          <MjmlHero
            mode="fluid-height"
            height="469px"
            backgroundWidth="600px"
            backgroundHeight="469px"
            backgroundUrl="https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg"
            backgroundColor="#2a3448"
            padding="100px 0px"
          >
            <MjmlText
              padding="20px"
              color="#ffffff"
              fontFamily="Helvetica"
              align="center"
              fontSize="45px"
              lineHeight="45px"
              fontWeight={900}
            >
              GO TO SPACE
            </MjmlText>
            <MjmlButton href="https://mjml.io/" align="center">
              ORDER YOUR TICKET NOW
            </MjmlButton>
          </MjmlHero>
        </MjmlBody>
      </Mjml>,
    ),
  ).toEqual(
    `<mjml><mj-body><mj-hero mode="fluid-height" height="469px" background-width="600px" background-height="469px" background-url="https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg" background-color="#2a3448" padding="100px 0px"><mj-text padding="20px" color="#ffffff" font-family="Helvetica" align="center" font-size="45px" line-height="45px" font-weight="900">GO TO SPACE</mj-text><mj-button href="https://mjml.io/" align="center">ORDER YOUR TICKET NOW</mj-button></mj-hero></mj-body></mjml>`,
  );
});

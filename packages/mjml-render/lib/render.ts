import ReactDOM from "react-dom/server";
import mjml2html from "mjml";
import type { ReactElement } from 'react';
import type { MJMLParseResult, MJMLParsingOptions } from "mjml";

export default function render(
  mjmlContent: ReactElement<any>,
  options: Partial<MJMLParsingOptions> = {},
): MJMLParseResult {
  const defaults: MJMLParsingOptions = {
    keepComments: false,
    beautify: false,
    validationLevel: "strict",
  };

  const staticMarkup = ReactDOM.renderToStaticMarkup(mjmlContent);

  return mjml2html(staticMarkup, {
    ...defaults,
    ...options,
    minify: undefined,
  });
}

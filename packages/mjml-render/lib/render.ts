import { renderToStaticMarkup } from "react-dom/server";
import mjml2html from "mjml";
import type { ReactElement } from "react";
import type { MJMLParseResults, MJMLParsingOptions } from "mjml-core";

export default function render(
  mjmlContent: ReactElement<any>,
  options: Partial<MJMLParsingOptions> = {},
): MJMLParseResults {
  const defaults: MJMLParsingOptions = {
    keepComments: false,
    beautify: false,
    validationLevel: "strict",
  };

  const staticMarkup = renderToStaticMarkup(mjmlContent);

  return mjml2html(staticMarkup, {
    ...defaults,
    ...options,
    minify: undefined,
  });
}

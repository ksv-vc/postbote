import { template as templateBuilder } from "../babel.js";

export const template = templateBuilder(`
  const %%component%% = lazy(() =>
    import(%%source%%).then(async (mod) => {
      const Component = createElement(mod.default.preview);
      const markup = renderToStaticMarkup(Component);

      const { html } =
        mod.default.type === 'react-email' ?
          { html: markup } :
          (await import("mjml-browser").then(mod => mod.default))(markup);

      return {
        default: ({ as }) => createElement(as, {
          initialContent: html
        })
      };
    })
  );
`);

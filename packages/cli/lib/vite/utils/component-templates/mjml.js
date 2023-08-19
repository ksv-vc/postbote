import { template as templateBuilder } from "../babel.js";

export const template = templateBuilder(`
  const %%component%% = lazy(() =>
    import(%%source%%).then((mod) => {
      const Component = createElement(mod.default.preview);
      const staticMarkup = renderToStaticMarkup(Component);
      const { html } = mjml2html(staticMarkup);

      return {
        default: ({ as }) => createElement(as, {
          initialContent: html
        })
      };
    })
  );
`);

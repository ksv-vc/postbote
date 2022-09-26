<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/banner-root-dark.png">
  <img alt="Postbote" src="./assets/banner-root.png">
</picture>

## What is `postbote`?

Postbote features a whole range of tools for easier development of email
templates.

We have taken over the development of `mjml-react`, since it was
deprecated, and will continue to offer the new stack on top of mjml.

## Motivation

As a head of development, I (Nick Schmidt) was constantly in charge of
developing emails for clients, when they wanted to include transactional emails
in their products. As a fellow developer (I suppose you are) you might know the
feeling, when you are being told to develop a new email layout. This project
aims to help with this, by creating (maybe) data-driven email templating that
can be used freely in Node.js applications, but that can also be just as easily
exported for usage in a Ruby on Rails, Python, or other project.

## Features

|                 | Feature |
| --------------- | :--- |
| :battery:       | Easy layouting with `@postbote/mjml-react` (predefined tags for React) |
| :tada:          | Render function optimized for isomorphic usage |
| :balloon:       | No important dependencies in your project (other than React) |
| :nut_and_bolt:  | Easy configuration through CLI, config file, or programatically |
| :clap:          | First-level mono-repo support |
| :electric_plug: | **[Planned](https://github.com/ksv-vc/postbote/issues/10):** Renderer for other frameworks (React not necessary) |
| :wrench:        | **[Planned](https://github.com/ksv-a/postbote/issues/9):** Easily extensible through addons (support other templating than mjml) |

## Development

Installing dependencies requires pnpm@7 (while it might work with a lower version, we have developed `postbote` with this version).

```
$ pnpm install
```

To start developing, it might be the best solution to just fire up the `dev` tasks through turbo for the `example-app` (CLI doesn't need to be built, since it is written in ESM).

```
$ pnpm dev --filter=example-app
```

## Authors

- Nick Schmidt ([@iduuck](https://github.com/iduuck))

## Disclaimer

While developing, we had a major inspiration from [`ladle`](https://ladle.dev/) (very nice storybook alternative). We couldn't mark every file as "inspired by".

## License

[MIT license](/LICENSE.md)

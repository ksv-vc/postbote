/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    { type: "doc", id: "why-postbote", label: "Why Postbote?" },
    { type: "doc", id: "intro", label: "Getting started" },
    {
      type: "category",
      label: "Packages",
      collapsible: false,
      items: [
        "packages/cli",
        "packages/eslint-config",
        "packages/example",
        "packages/mjml-react",
        "packages/mjml-render",
        "packages/tsconfig",
      ],
    },
    {
      type: "category",
      label: "Components",
      items: [{ type: "doc", id: "components/mjml" }],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;

import React from "react";
import ComponentCreator from "@docusaurus/ComponentCreator";

export default [
  {
    path: "/__docusaurus/debug",
    component: ComponentCreator("/__docusaurus/debug", "08e"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/config",
    component: ComponentCreator("/__docusaurus/debug/config", "188"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/content",
    component: ComponentCreator("/__docusaurus/debug/content", "597"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/globalData",
    component: ComponentCreator("/__docusaurus/debug/globalData", "8a2"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/metadata",
    component: ComponentCreator("/__docusaurus/debug/metadata", "149"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/registry",
    component: ComponentCreator("/__docusaurus/debug/registry", "f3b"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/routes",
    component: ComponentCreator("/__docusaurus/debug/routes", "76a"),
    exact: true,
  },
  {
    path: "/docs",
    component: ComponentCreator("/docs", "229"),
    routes: [
      {
        path: "/docs/components/mjml",
        component: ComponentCreator("/docs/components/mjml", "52d"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/intro",
        component: ComponentCreator("/docs/intro", "aed"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/packages/cli",
        component: ComponentCreator("/docs/packages/cli", "459"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/packages/eslint-config",
        component: ComponentCreator("/docs/packages/eslint-config", "805"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/packages/example",
        component: ComponentCreator("/docs/packages/example", "c30"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/packages/mjml-react",
        component: ComponentCreator("/docs/packages/mjml-react", "e09"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/packages/mjml-render",
        component: ComponentCreator("/docs/packages/mjml-render", "bf9"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/packages/tsconfig",
        component: ComponentCreator("/docs/packages/tsconfig", "48b"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-basics/congratulations",
        component: ComponentCreator(
          "/docs/tutorial-basics/congratulations",
          "7ef",
        ),
        exact: true,
      },
      {
        path: "/docs/tutorial-basics/create-a-blog-post",
        component: ComponentCreator(
          "/docs/tutorial-basics/create-a-blog-post",
          "2c8",
        ),
        exact: true,
      },
      {
        path: "/docs/tutorial-basics/create-a-document",
        component: ComponentCreator(
          "/docs/tutorial-basics/create-a-document",
          "f0d",
        ),
        exact: true,
      },
      {
        path: "/docs/tutorial-basics/create-a-page",
        component: ComponentCreator(
          "/docs/tutorial-basics/create-a-page",
          "ca5",
        ),
        exact: true,
      },
      {
        path: "/docs/tutorial-basics/deploy-your-site",
        component: ComponentCreator(
          "/docs/tutorial-basics/deploy-your-site",
          "508",
        ),
        exact: true,
      },
      {
        path: "/docs/tutorial-basics/markdown-features",
        component: ComponentCreator(
          "/docs/tutorial-basics/markdown-features",
          "f90",
        ),
        exact: true,
      },
      {
        path: "/docs/why-postbote",
        component: ComponentCreator("/docs/why-postbote", "aa2"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
    ],
  },
  {
    path: "*",
    component: ComponentCreator("*"),
  },
];

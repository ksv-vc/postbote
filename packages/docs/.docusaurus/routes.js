import React from "react";
import ComponentCreator from "@docusaurus/ComponentCreator";

export default [
  {
    path: "/__docusaurus/debug",
    component: ComponentCreator("/__docusaurus/debug", "69a"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/config",
    component: ComponentCreator("/__docusaurus/debug/config", "649"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/content",
    component: ComponentCreator("/__docusaurus/debug/content", "540"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/globalData",
    component: ComponentCreator("/__docusaurus/debug/globalData", "718"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/metadata",
    component: ComponentCreator("/__docusaurus/debug/metadata", "82e"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/registry",
    component: ComponentCreator("/__docusaurus/debug/registry", "2ad"),
    exact: true,
  },
  {
    path: "/__docusaurus/debug/routes",
    component: ComponentCreator("/__docusaurus/debug/routes", "4c5"),
    exact: true,
  },
  {
    path: "/markdown-page",
    component: ComponentCreator("/markdown-page", "b1e"),
    exact: true,
  },
  {
    path: "/docs",
    component: ComponentCreator("/docs", "211"),
    routes: [
      {
        path: "/docs/category/tutorial---basics",
        component: ComponentCreator("/docs/category/tutorial---basics", "d44"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/category/tutorial---extras",
        component: ComponentCreator("/docs/category/tutorial---extras", "f09"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/getting-started",
        component: ComponentCreator("/docs/getting-started", "a24"),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-basics/congratulations",
        component: ComponentCreator(
          "/docs/tutorial-basics/congratulations",
          "793",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-basics/create-a-blog-post",
        component: ComponentCreator(
          "/docs/tutorial-basics/create-a-blog-post",
          "68e",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-basics/create-a-document",
        component: ComponentCreator(
          "/docs/tutorial-basics/create-a-document",
          "c2d",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-basics/create-a-page",
        component: ComponentCreator(
          "/docs/tutorial-basics/create-a-page",
          "f44",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-basics/deploy-your-site",
        component: ComponentCreator(
          "/docs/tutorial-basics/deploy-your-site",
          "e46",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-basics/markdown-features",
        component: ComponentCreator(
          "/docs/tutorial-basics/markdown-features",
          "4b7",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-extras/manage-docs-versions",
        component: ComponentCreator(
          "/docs/tutorial-extras/manage-docs-versions",
          "fdd",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
      },
      {
        path: "/docs/tutorial-extras/translate-your-site",
        component: ComponentCreator(
          "/docs/tutorial-extras/translate-your-site",
          "2d7",
        ),
        exact: true,
        sidebar: "tutorialSidebar",
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
    path: "/",
    component: ComponentCreator("/", "6fc"),
    exact: true,
  },
  {
    path: "*",
    component: ComponentCreator("*"),
  },
];

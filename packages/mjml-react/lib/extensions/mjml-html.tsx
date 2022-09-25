import { ComponentType } from "react";
import { MjmlRaw } from "..";

type MjmlHtmlProps = {
  tag?: ComponentType<{ dangerouslySetInnerHTML: { __html: string } }>;
  html: string;
};

export function MjmlHtml({ tag: Tag = MjmlRaw, html, ...props }: MjmlHtmlProps) {
  return (
    <Tag
      {...props}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}

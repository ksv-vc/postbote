import type { ComponentType, PropsWithChildren } from "react";
import { handleMjmlProps } from "./utils";

export default function createMjmlElement(
  Tag: string,
): ComponentType<PropsWithChildren<any>> {
  const element: ComponentType<any> = ({
    children,
    ...props
  }: PropsWithChildren<any>) => {
    // TODO: Fix the attributes type.
    // @ts-expect-error
    return <Tag {...handleMjmlProps(props)}>{children}</Tag>;
  };

  element.displayName = Tag;

  return element;
}

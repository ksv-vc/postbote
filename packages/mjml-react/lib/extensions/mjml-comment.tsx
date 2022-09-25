import { MjmlRaw } from "..";
import { handleMjmlProps } from "../utils";

type MjmlCommentProps = {
  children: string;
  [key: string]: any;
};

export function MjmlComment({ children, ...rest }: MjmlCommentProps) {
  if (children?.trim().length) {
    return (
      <MjmlRaw
        {...handleMjmlProps(rest)}
        dangerouslySetInnerHTML={{ __html: `<!--${children}-->` }}
      />
    );
  }
  return null;
}

import { MjmlRaw } from "..";

type MjmlCommentProps = {
  children: string;
  [key: string]: any;
};

export function MjmlComment({ children, ...rest }: MjmlCommentProps) {
  if (children?.trim().length) {
    return <MjmlRaw {...rest}>{`<!--${children}-->`}</MjmlRaw>;
  }
  return null;
}

import { MjmlComment } from "./mjml-comment";

type MjmlConditionalCommentProps = {
  children: string;
  condition: string;
};

export function MjmlConditionalComment({
  children,
  condition = "if gte mso 9",
  ...props
}: MjmlConditionalCommentProps) {
  if (children?.trim().length) {
    return (
      <MjmlComment {...props}>
        {`[${condition}]>${children}<![endif]`}
      </MjmlComment>
    );
  }

  return null;
}

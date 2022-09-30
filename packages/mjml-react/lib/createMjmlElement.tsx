import { handleMjmlProps } from "./utils";

type SharedProps = {
  dangerouslySetInnerHTML?: { __html: string };
};

export default function createMjmlElement<
  OptionalProps extends Record<string, any>,
  RequiredProps extends Record<string, any> = {},
>(Tag: string) {
  return (props: Partial<OptionalProps> & RequiredProps & SharedProps) => (
    <Tag
      {...(handleMjmlProps<RequiredProps & Partial<OptionalProps>>(
        props,
      ) as any)}
    />
  );
}

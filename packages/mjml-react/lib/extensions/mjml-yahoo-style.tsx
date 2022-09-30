import { MjmlRaw } from "..";

type MjmlYahooStyleProps = {
  children: string;
};

export function MjmlYahooStyle({ children, ...props }: MjmlYahooStyleProps) {
  if (children?.trim().length) {
    return (
      <MjmlRaw {...props}>{`
        <style>@media screen yahoo {${children}}</style>
      `}</MjmlRaw>
    );
  }

  return null;
}

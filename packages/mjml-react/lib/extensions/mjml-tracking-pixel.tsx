import { MjmlRaw } from "..";

type MjmlTrackingPixelProps = {
  src: string;
};

const trackingPixelStyle = {
  display: "table",
  height: "1px!important",
  width: "1px!important",
  border: "0!important",
  margin: "0!important",
  padding: "0!important",
};

export function MjmlTrackingPixel({ src, ...props }: MjmlTrackingPixelProps) {
  return (
    <MjmlRaw {...props}>
      <img
        src={src}
        style={trackingPixelStyle}
        width={1}
        height={1}
        // @ts-expect-error: Mandatory attribute for pixel.
        border={0}
      />
    </MjmlRaw>
  );
}

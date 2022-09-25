import debug from "debug";

export const log = debug(
  "postbote:" + typeof document === "undefined" ? "server" : "client",
);

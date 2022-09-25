import btraverse from "@babel/traverse";
import btemplate from "@babel/template";
import bgenerate from "@babel/generator";

export const traverse =
  typeof btraverse === "function" ? btraverse : btraverse.default;
export const template =
  typeof btemplate === "function" ? btemplate : btemplate.default;
export const generate =
  typeof bgenerate === "function" ? bgenerate : bgenerate.default;

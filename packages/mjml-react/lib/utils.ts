import type { KebabCasedProperties } from "type-fest";
import Color from "color";

type Handler = (
  name: string,
  value?: string | null,
) => string | undefined | null;

const handlers: Record<string, Handler> = {
  inline: boolToString,
  "full-width": boolToString,
  width: numberToPx,
  height: numberToPx,
  "border-radius": numberToPx,
  "border-width": numberToPx,
  "background-size": numberToPx,
  padding: numberToPx,
  "padding-top": numberToPx,
  "padding-right": numberToPx,
  "padding-bottom": numberToPx,
  "padding-left": numberToPx,
  "font-size": numberToPx,
  "letter-spacing": numberToPx,
  "line-height": numberToPx,
  "icon-padding": numberToPx,
  "text-padding": numberToPx,
  color: handleColor,
  "border-color": handleColor,
  "background-color": handleColor,
  "container-background-color": handleColor,
  "inner-background-color": handleColor,
};

export function handleMjmlProps<P extends Record<string, unknown>>(
  props: P,
): KebabCasedProperties<P> {
  const transformProp = {
    className: () => "mj-class",
    cssClass: () => "mj-class",
  };

  return Object.keys(props).reduce((acc, curr) => {
    const keyTransform =
      // @ts-expect-error
      curr in transformProp ? transformProp[curr] : kebabCase;
    const mjmlProp = keyTransform(curr);

    if (typeof props[curr] === "string") {
      return {
        ...acc,
        [mjmlProp]: handleMjmlProp(mjmlProp, props[curr] as string),
      };
    }

    return { ...acc, [mjmlProp]: props[curr] };
  }, {} as KebabCasedProperties<P>);
}

function handleMjmlProp(name: string, value: string) {
  if (typeof value === "undefined" || value === null) {
    return undefined;
  }
  const handler = handlers[name];
  return handler ? handler(name, value) : value;
}

function kebabCase(previousString: string) {
  return previousString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function boolToString(name: string, value?: string | null) {
  return value ? name : undefined;
}

function numberToPx(_name: string, value?: string | null) {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
}

function handleColor(_name: string, value?: string | null) {
  if (value) {
    const color = parseColor(value);
    if (color) {
      if (value[0] === "#" && value.length === 9) {
        const alpha = color.alpha();
        return color.rgb().alpha(alpha).toString();
      }
      return value;
    }
  }
  return "";
}

function parseColor(value: string) {
  try {
    return new Color(value);
  } catch (e) {}
  return null;
}

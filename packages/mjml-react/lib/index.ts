import { PropsWithChildren } from "react";
import createMjmlElement from "./createMjmlElement";

export { createMjmlElement };

type Matrix<E extends string | number> =
  | E
  | `${E} ${E}`
  | `${E} ${E} ${E}`
  | `${E} ${E} ${E} ${E}`;

/**
 * Helpers for `em` values.
 */
type Em = number | `${number}` | `${number}em`;
type EmMatrix = Matrix<Em>;

/**
 * Helpers for `%` values.
 */
type Percentage = number | `${number}` | `${number}%`;
type PercentageMatrix = Matrix<Percentage>;

/**
 * Helpers for `px` values.
 */
type Pixel = number | `${number}` | `${number}px`;
type PixelMatrix = Matrix<Pixel>;

type HorizontalAlignment = "left" | "center" | "right";
type VerticalAlignment = "top" | "bottom" | "middle";

/**
 * Helper for abbreviation and convenience purposes only.
 */
type WithChildren<P = {}> = PropsWithChildren<P>;

type ClassNameAttributes = {
  cssClass: string;
  className: string;
};

interface GenericAttributes<DetailedBorder = false>
  extends ClassNameAttributes,
    BorderAttributes<DetailedBorder> {
  fontFamily: string;
}

type BorderAttributes<DetailedBorder = false> = {
  border: string;
  borderBottom: DetailedBorder extends true ? string : never;
  borderLeft: DetailedBorder extends true ? string : never;
  borderRight: DetailedBorder extends true ? string : never;
  borderTop: DetailedBorder extends true ? string : never;
};

type PaddingAttributes = {
  padding: PixelMatrix | EmMatrix;
  paddingLeft: Pixel;
  paddingBottom: Pixel;
  paddingRight: Pixel;
  paddingTop: Pixel;
};

/**
 * Components
 * @link: https://documentation.mjml.io/#components
 */
export const Mjml = createMjmlElement<
  { lang: string; dir: string; owa: string },
  WithChildren
>("mjml");
export const MjmlHead = createMjmlElement<{}, WithChildren>("mj-head");
export const MjmlBody = createMjmlElement<
  {
    backgroundColor: string;
    className: string;
    width: Pixel;
  },
  WithChildren
>("mj-body");

// This is a noop for telling the user to use components, and not mj-include.
export const MjmlInclude = () => {
  console.warn(
    "You are trying to use `mj-include` element. Please use other components for this use case.",
  );
  return null;
};

/**
 * Standard Head components
 * @link: https://documentation.mjml.io/#standard-head-components
 */
export const MjmlAttributes = createMjmlElement<{}, WithChildren>(
  "mj-attributes",
);
export const MjmlAll = createMjmlElement<{
  [key: string]: any;
}>("mj-all");
export const MjmlClass = createMjmlElement<
  {
    [key: string]: any;
  },
  {
    name: string;
  }
>("mj-class");
export const MjmlBreakpoint = createMjmlElement<
  {},
  {
    width: Pixel;
  }
>("mj-breakpoint");
export const MjmlFont = createMjmlElement<{}, { href: string; name: string }>(
  "mj-font",
);
export const MjmlHtmlAttributes = createMjmlElement<{}>("mj-html-attributes");
export const MjmlSelector = createMjmlElement<{}, { path: string }>(
  "mj-selector",
);
export const MjmlHtmlAttribute = createMjmlElement<
  {},
  WithChildren<{ name: string }>
>("mj-html-attribute");
export const MjmlPreview = createMjmlElement<{}, { children: string }>(
  "mj-preview",
);
export const MjmlStyle = createMjmlElement<
  {
    inline: "inline";
  },
  {
    children: string;
  }
>("mj-style");
export const MjmlTitle = createMjmlElement<{}, { children: string }>(
  "mj-title",
);

/**
 * Standard Body components
 * @link: https://documentation.mjml.io/#standard-body-components
 */
export const MjmlAccordion = createMjmlElement<
  GenericAttributes &
    PaddingAttributes & {
      containerBackgroundColor: string;
      iconAlign: string;
      iconHeight: Pixel;
      iconPosition: "left" | "right";
      iconUnwrappedAlt: string;
      iconUnwrappedUrl: string;
      iconWidth: Pixel;
      iconWrappedAlt: string;
      iconWrappedUrl: string;
    },
  WithChildren
>("mj-accordion");
export const MjmlAccordionElement = createMjmlElement<
  GenericAttributes & {
    backgroundColor: string;
    iconAlign: string;
    iconHeight: Pixel;
    iconPosition: "left" | "right";
    iconUnwrappedAlt: string;
    iconUnwrappedUrl: string;
    iconWidth: Pixel;
    iconWrappedAlt: string;
    iconWrappedUrl: string;
  },
  WithChildren
>("mj-accordion-element");
export const MjmlAccordionTitle = createMjmlElement<
  PaddingAttributes &
    Omit<GenericAttributes, "border"> & {
      backgroundColor: string;
      color: string;
      fontSize: Pixel;
    },
  { children: string }
>("mj-accordion-title");
export const MjmlAccordionText = createMjmlElement<
  PaddingAttributes &
    Omit<GenericAttributes, "border"> & {
      baiwkgroundColor: string;
      color: string;
      fontSize: Pixel;
      fontWeight: number | string;
      letterSpacing: Pixel | Em;
      lineHeight: Pixel;
    },
  WithChildren
>("mj-accordion-text");
export const MjmlButton = createMjmlElement<
  GenericAttributes<true> &
    PaddingAttributes & {
      align: HorizontalAlignment;
      backgroundColor: string;
      borderRadius: Pixel;
      color: string;
      containerBackgroundColor: string;
      fontSize: string;
      fontStyle: "normal" | "italic" | "oblique";
      fontWeight: number | string;
      height: Pixel;
      href: string;
      innerPadding: Pixel | Em;
      lineHeight: Pixel;
      rel: string;
      target: string;
      textAlign: HorizontalAlignment;
      textDecoration: "underline" | "overline" | "none";
      textTransform: "capitalize" | "uppercase" | "lowercase";
      title: string;
      verticalAlign: VerticalAlignment;
      width: Pixel | Em | Percentage;
    },
  WithChildren
>("mj-button");
export const MjmlCarousel = createMjmlElement<
  GenericAttributes & {
    align: HorizontalAlignment;
    containerBackgroundColor: string;
    borderRadius: PixelMatrix;
    iconWidth: Pixel;
    leftIcon: string;
    rightIcon: string;
    tbBorder: string;
    tbBorderRadius: PixelMatrix;
    tbHoverBorderColor: string;
    tbSelectedBorderColor: string;
    tbWidth: string;
    thumbnails: "visible" | "hidden";
  },
  WithChildren
>("mj-carousel");
export const MjmlCarouselImage = createMjmlElement<{
  alt: string;
  href: string;
  rel: string;
  target: string;
  title: string;
  src: string;
  thumbnailsSrc: string;
  borderRadius: PixelMatrix | PercentageMatrix;
  tbBorder: string;
  tbBorderRadius: string;
}>("mj-carousel-image");
export const MjmlColumn = createMjmlElement<
  GenericAttributes<true> &
    PaddingAttributes & {
      backgroundColor: string;
      borderRadius: PixelMatrix | PercentageMatrix;
      direction: "ltr" | "rtl";
      innerBackgroundColor: string;
      innerBorder: string;
      innerBorderBottom: string;
      innerBorderLeft: string;
      innerBorderRadius: string;
      innerBorderRight: string;
      innerBorderTop: string;
      padding: PixelMatrix | PercentageMatrix;
      verticalAlign: VerticalAlignment;
    },
  WithChildren
>("mj-column");
export const MjmlDivider = createMjmlElement<
  GenericAttributes &
    PaddingAttributes & {
      borderColor: string;
      borderStyle: "dashed" | "dotted" | "solid";
      borderWidth: Pixel;
      containerBackgroundColor: string;
      width: Pixel | Percentage;
      align: HorizontalAlignment;
    }
>("mj-divider");
export const MjmlGroup = createMjmlElement<
  Pick<GenericAttributes, "cssClass" | "className"> & {
    width: Pixel | Percentage;
    verticalAlign: VerticalAlignment;
    backgroundColor: string;
    direction: "ltr" | "rtl";
  },
  WithChildren
>("mj-group");
export const MjmlHero = createMjmlElement<
  PaddingAttributes & {
    backgroundColor: string;
    backgroundHeight: Pixel;
    backgroundPosition: `${"top" | "center" | "bottom"} ${
      | "left"
      | "center"
      | "right"}`;
    backgroundUrl: string;
    backgroundWidth: Pixel;
    borderRadius: Pixel;
    height: Pixel;
    mode: "fluid-height" | "fixed-height";
    verticalAlign: VerticalAlignment;
  },
  WithChildren
>("mj-hero");
export const MjmlImage = createMjmlElement<
  PaddingAttributes &
    BorderAttributes<true> &
    Pick<GenericAttributes, "cssClass" | "className"> & {
      align: HorizontalAlignment;
      alt: string;
      borderRadius: Pixel;
      containerBackgroundColor: string;
      fluidOnMobile: "true" | "false";
      height: Pixel;
      href: string;
      name: string;
      rel: string;
      sizes: string;
      src: string;
      srcset: string;
      target: string;
      title: string;
      usemap: string;
      width: Pixel;
    }
>("mj-image");
export const MjmlNavbar = createMjmlElement<
  Pick<GenericAttributes, "cssClass" | "className"> & {
    align: HorizontalAlignment;
    baseUrl: string;
    hamburger: string;
    icoAlign: HorizontalAlignment;
    icoClose: string;
    icoColor: string;
    icoFontFamily: string;
    icoFontSize: Pixel;
    icoLineHeight: Pixel;
    icoOpen: string;
    icoPadding: PixelMatrix;
    icoPaddingBottom: Pixel;
    icoPaddingLeft: Pixel;
    icoPaddingRight: Pixel;
    icoPaddingTop: Pixel;
    icoTextDecoration: string;
    icoTextTransform: string;
  },
  WithChildren
>("mj-navbar");
export const MjmlNavbarLink = createMjmlElement<
  GenericAttributes<false> &
    PaddingAttributes & {
      color: string;
      fontSize: string;
      fontStyle: "normal" | "italic" | "oblique";
      fontWeight: number;
      href: string;
      letterSpacing: Pixel | Em;
      lineHeight: Pixel;
      rel: string;
      target: string;
      textDecoration: string;
      textTransform: string;
    }
>("mj-navbar-link");
export const MjmlRaw = createMjmlElement<
  { position: "file-start" },
  { children: string }
>("mj-raw");
export const MjmlSection = createMjmlElement<
  PaddingAttributes &
    ClassNameAttributes &
    BorderAttributes<true> & {
      backgroundColor: string;
      backgroundPosition: string;
      backgroundPositionX: Percentage | string;
      backgroundPositionY: Percentage | string;
      backgroundRepeat: string;
      backgroundSize: Pixel | Percentage | "cover" | "contain";
      backgroundUrl: string;
      borderRadius: Pixel;
      direction: "ltr" | "rtl";
      fullWidth: string;
      textAlign: HorizontalAlignment;
    },
  WithChildren
>("mj-section");
export const MjmlSocial = createMjmlElement<
  ClassNameAttributes &
    PaddingAttributes & {
      align: HorizontalAlignment;
      borderRadius: Pixel;
      containerBackgroundColor: string;
      fontFamily: GenericAttributes["fontFamily"];
      fontSize: Pixel;
      fontStyle: "normal" | "italic" | "oblique";
      fontWeight: number;
      iconSize: Percentage | Pixel;
      innerPadding: Pixel;
      lineHeight: Pixel;
      mode: "vertical" | "horizontal";
      iconPadding: PixelMatrix;
      textPadding: PixelMatrix;
      textDecoration: "underline" | "overline" | "none";
    },
  PropsWithChildren<{}>
>("mj-social");
export const MjmlSocialElement = createMjmlElement<
  PaddingAttributes &
    ClassNameAttributes & {
      align: HorizontalAlignment;
      alt: string;
      backgroundColor: string;
      borderRadius: Pixel;
      color: string;
      fontFamily: GenericAttributes["fontFamily"];
      fontSize: Pixel;
      fontStyle: "normal" | "italic" | "oblique";
      fontWeight: number;
      href: string;
      iconHeight: Percentage | Pixel;
      iconSize: Percentage | Pixel;
      name: string;
      iconPadding: PixelMatrix;
      textPadding: PixelMatrix;
      sizes: string;
      src: string;
      srcset: string;
      rel: string;
      target: string;
      title: string;
      textDecoration: "underline" | "overline" | "none";
      verticalAlign: VerticalAlignment;
      children: string;
    }
>("mj-social-element");
export const MjmlSpacer = createMjmlElement<
  ClassNameAttributes &
    PaddingAttributes & {
      containerBackgroundColor: string;
      height: Pixel | Em;
    }
>("mj-spacer");
export const MjmlTable = createMjmlElement<
  ClassNameAttributes &
    BorderAttributes<false> &
    PaddingAttributes & {
      align: HorizontalAlignment;
      cellpadding: Pixel;
      cellspacing: Pixel;
      color: string;
      containerBackgroundColor: string;
      fontFamily: string;
      fontSize: Pixel;
      lineHeight: Pixel | Percentage;
      role: string;
      tableLayout: "auto" | "fixed" | "initial" | "inherit";
      width: Pixel | Percentage;
    },
  WithChildren
>("mj-table");
export const MjmlText = createMjmlElement<
  ClassNameAttributes &
    PaddingAttributes & {
      color: string;
      fontFamily: GenericAttributes["fontFamily"];
      fontSize: Pixel;
      fontStyle: "normal" | "italic" | "oblique";
      fontWeight: number;
      lineHeight: Pixel;
      letterSpacing: Pixel | Em;
      height: Pixel;
      textDecoration: "underline" | "overline" | "line-through" | "none";
      textTransform: "uppercase" | "lowercase" | "capitalize";
      align: "left" | "right" | "center" | "justify";
      containerBackgroundColor: string;
      children: string;
    }
>("mj-text");
export const MjmlWrapper = createMjmlElement<
  BorderAttributes<true> &
    ClassNameAttributes &
    PaddingAttributes & {
      backgroundColor: string;
      backgroundPosition: string;
      backgroundPositionX: Percentage | string;
      backgroundPositionY: Percentage | string;
      backgroundRepeat: string;
      backgroundSize: Pixel | Percentage | "cover" | "contain";
      backgroundUrl: string;
      borderRadius: Pixel;
      fullWidth: string;
      textAlign: HorizontalAlignment;
    },
  WithChildren
>("mj-wrapper");

import {
  FTScenik,
  FTScenikMono,
  FTScenikText,
  monoFonts,
  systemFonts,
} from "./fonts";

const fonts = {
  body: `${FTScenikText.style.fontFamily}, ${systemFonts}`,
  heading: `${FTScenik.style.fontFamily}, ${systemFonts}`,
  monospace: `${FTScenikMono.style.fontFamily}, ${monoFonts}`,
};

const fontSizes = {
  displayLarge: 51.96,
  displayMedium: 46.19,
  displaySmall: 41.06,
  displayXSmall: 36.49,
  headingXXLarge: 32.44,
  headingXLarge: 28.83,
  headingLarge: 25.63,
  headingMedium: 22.78,
  headingSmall: 20.25,
  headingXSmall: 18,
  labelLarge: 18,
  labelMedium: 16,
  labelSmall: 14,
  labelXSmall: 12,
  bodyLarge: 18,
  bodyMedium: 16,
  bodySmall: 14.22,
  bodyXSmall: 12.64,
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
};

const lineHeights = {
  body: "calc(1em + 0.5rem)",
  heading: 1.125,
};

export type TextStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontStyle?: string;
  letterSpacing: number;
};

export enum TypescaleKey {
  displayLarge = "displayLarge",
  displayMedium = "displayMedium",
  displaySmall = "displaySmall",
  displayXSmall = "displayXSmall",
  headingXXLarge = "headingXXLarge",
  headingXLarge = "headingXLarge",
  headingLarge = "headingLarge",
  headingMedium = "headingMedium",
  headingSmall = "headingSmall",
  headingXSmall = "headingXSmall",
  labelLarge = "labelLarge",
  labelMedium = "labelMedium",
  labelSmall = "labelSmall",
  labelXSmall = "labelXSmall",
  bodyLarge = "bodyLarge",
  bodyMedium = "bodyMedium",
  bodySmall = "bodySmall",
  bodyXSmall = "bodyXSmall",
}

const textStyles = {
  displayLarge: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displayLarge,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  displayMedium: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displayMedium,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  displaySmall: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displaySmall,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  displayXSmall: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.displayXSmall,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  headingXXLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingXXLarge,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  headingXLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingXLarge,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  headingLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingLarge,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  headingMedium: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingMedium,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  headingSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingSmall,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  headingXSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.headingXSmall,
    lineHeight: lineHeights.heading,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  },
  labelLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelLarge,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  labelMedium: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelMedium,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  labelSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelSmall,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  labelXSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.labelXSmall,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.medium,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodyLarge,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
  bodyMedium: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodyMedium,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
  bodySmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodySmall,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
  bodyXSmall: {
    fontFamily: fonts.body,
    fontSize: fontSizes.bodyXSmall,
    lineHeight: lineHeights.body,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
  default: {
    fontFamily: fonts.body,
    fontWeight: fontWeights.regular,
    letterSpacing: 0,
  },
};

export { fontSizes, fontWeights, fonts, lineHeights, textStyles };

export type LineHeights = typeof lineHeights;
export type FontWeights = typeof fontWeights;
export type FontSizes = typeof fontSizes;
export type TextStyles = typeof textStyles;

export interface FontFamilies {
  body: string;
  heading: string;
  monospace: string;
}

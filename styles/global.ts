import { createGlobalStyle, css } from "styled-components";

import { reset } from "./reset";
import { theme } from "./theme";

const styles = css`
  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  html {
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #f6efe8;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    color: ${theme.colors.neutral[10]};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.light};
    font-variation-settings: "wght" 350, "wdth" 500, "slnt" 0;
    font-feature-settings: "ss05" 1;
    line-height: ${theme.lineHeights.body};
    margin-block-end: 0;
    margin-block-start: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    line-height: ${theme.lineHeights.heading};
    font-variation-settings: "wght" 450,"wdth" 100,"slnt" 0;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  h1 {
    ${theme.textStyles.displaySmall}
  }

  h2 {
    ${theme.textStyles.displayMedium}
  }

  h3 {
    ${theme.textStyles.displaySmall}
  }

  h4 {
    ${theme.textStyles.headingXXLarge}
  }

  h5 {
    ${theme.textStyles.headingLarge}
  }

  h6 {
    ${theme.textStyles.headingSmall}
  }

  p {
    ${theme.textStyles.bodySmall};
    margin-block-end: 0;
    margin-block-start: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${styles};
`;

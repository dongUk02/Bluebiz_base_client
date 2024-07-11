import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html h1, html h2, html h3, html h4, html h5, html h6, html a, html p, html li, input, textarea, span, div, html, body, html a, [class^='ant-'] {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  .ag-theme-balham {
    --ag-font-size: 13px;
  }
`;
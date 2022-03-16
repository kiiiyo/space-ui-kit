import { injectGlobal } from '@emotion/css'

export function applyGlobalStyle() {
  injectGlobal`
    /* Memo: */
    /* https://github.com/hankchizljaw/modern-css-reset/blob/master/dist/reset.min.css */
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    html {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      font-family: sans-serif;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      scroll-behavior: smooth;
    }
    body {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
      background: #fff;
    }
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }
    img,
    picture {
      display: block;
      max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Scaffold */
    html,
    body {
      padding: 0;
      margin: 0;
      font-feature-settings: 'palt' 1;
    }
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul,
    ol,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }
    ul,
    ol {
      padding: 0;
      list-style: none;
    }
    /* stylelint-disable-next-line no-descending-specificity */
    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    #root{
      width: 100%;
      height: 100%;
    }
  `
}

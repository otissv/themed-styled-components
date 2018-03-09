import { injectGlobal } from 'styled-components'
import normalizeStyled from 'styled-normalize'

export function globalStyles({ colors, font, spacing, inject }) {
  return injectGlobal`
    ${normalizeStyled}
  
    html {
      line-height: ${font.lineHeight};
      text-rendering: optimizeLegibility;
    }
    
    html,
    body,
    pre {
      background: ${colors.background};
      color: ${colors.foreground};
      letter-spacing: 1px !important;
    }

    body {
      padding: 0;
      background: ${colors.background};
    }

    body,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    button {
      font-family: ${font.serif};
      ${font.smooth};
      letter-spacing: ${font.letterSpacing};
    }

    body,
    p,
    a,
    button {
      font-size: ${font.default};
    }
    

    * {
      box-sizing: border-box;
    }

    ::selection {
      background: ${colors.primary};
      color: #ffffff;
    }

    code,
    pre code {
      font-size: ${font.small};
      font-family: ${font.code};
      line-height: 1.3;
    }

    a, area, button, input, label, select, summary, textarea {
      touch-action: manipulation;
    }

    ${inject}
  `
}

import merge from 'lodash/fp/merge'

export function font(props) {
  return {
    color: props.colors.foreground,
    letterSpacing: '1px',
    smooth: `
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    `,

    // family
    code:
      "'Source Code Pro', 'Consolas', 'Inconsolata', 'Source Code Pro', 'Monaco', monospace !important",
    serif: "'Montserrat', sans-serif",
    sans: '',

    // size
    xsmall: '11px',
    small: '13px',
    default: '15px',
    large: '20px',
    xlarge: '24px',

    // height
    lineHeight: 1.5
  }

  return merge(props.font)(defaults)
}

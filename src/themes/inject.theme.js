import { scrollbar as scrollbarTheme } from './scrollbar.theme'

export function inject({ colors, spacing }) {
  const scrollbar = scrollbarTheme({ colors, spacing })

  return `*::-webkit-scrollbar {
    width: ${scrollbar.width};
    height: ${scrollbar.height};
  }
  *::-webkit-scrollbar-corner {
    background-color: ${scrollbar.corner.backgroundColor};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${scrollbar.thumb.backgroundColor};
    outline:  ${scrollbar.thumb.outline.none};
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${scrollbar.thumb.hover.backgroundColor};
  }
`
}

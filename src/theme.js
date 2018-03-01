import { accordion } from './themes/accordion.theme'
import { border } from './themes/border.theme'
import { button } from './themes/button.theme'
import { buttonSquared } from './themes/buttonSquared.theme'
import { checkbox } from './themes/checkbox.theme'
import { close } from './themes/close.theme'
import { font } from './themes/font.theme'
import { form } from './themes/form.theme'
import { input } from './themes/input.theme'
import { list } from './themes/list.theme'
import { logo } from './themes/logo.theme'
import { modal } from './themes/modal.theme'
import { nav } from './themes/nav.theme'

import { select } from './themes/select.theme'
import { sidebar } from './themes/sidebar.theme'
import { statusbar } from './themes/statusbar.theme'
import { row } from './themes/row.theme'
import { tabs } from './themes/tabs.theme'
import { textarea } from './themes/textarea.theme'
import { toolbar } from './themes/toolbar.theme'
import { inject } from './themes/inject.theme'

// shared
import { animation as Animation } from './themes/animation.theme'
import { border as Border } from './themes/border.theme'
import { clearfix as Clearfix } from './themes/clearfix.theme'
import { depth as Depth } from './themes/depth.theme'
import { font as Font } from './themes/font.theme'
import { globalStyles as Global } from './themes/global.theme'
import { media as Media } from './themes/media.theme'
import { scrollbar as Scrollbar } from './themes/scrollbar.theme'
import { spacing as Spacing } from './themes/spacing.theme'

const defaults = {
  animation: {},
  border: {},
  clearfix: {},
  depth: {},
  font: {},
  media: {},
  scrollbar: {},
  spacing: {},
  extend: () => {}
}

export function theme(props = defaults) {
  const {
    animation,
    border,
    clearfix,
    depth,
    font,
    media,
    scrollbar,
    spacing,
    extend
  } = props

  return function(colors = {}) {
    const _animation = Animation(animation || {})
    const _border = Border({ ...border, colors })
    const _depth = Depth(depth || {})
    const _font = Font({ colors, ...font })
    const _media = Media(media || {})
    const _spacing = Spacing(spacing || {})
    const _scrollbar = Scrollbar({ colors, spacing: _spacing, ...scrollbar })

    const base = {
      animation: _animation,
      border: _border,
      clearfix: Clearfix(),
      colors,
      depth: _depth,
      font: _font,
      media: _media,
      scrollbar: _spacing,
      spacing: _spacing
    }

    Global({
      ...base,
      inject: inject(base)
    })

    return {
      ...base,
      accordion: accordion(base),
      button: button(base),
      buttonSquared: buttonSquared(base),
      checkbox: checkbox(base),
      close: close(base),
      form: form(base),
      input: input(base),
      list: list(base),
      logo: logo(base),
      modal: modal(base),
      nav: nav(base),
      select: select(base),
      sidebar: sidebar(base),
      statusbar: statusbar(base),
      row: row(base),
      tabs: tabs(base),
      textarea: textarea(base),
      toolbar: toolbar(base),
      ...extend(base)
    }
  }
}

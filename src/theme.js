import { accordion } from './Accordion/accordion.theme'
import { button } from './Button/button.theme'
import { buttonGroup } from './ButtonGroup/buttonGroup.theme'
import { card } from './Card/card.theme'
import { checkbox } from './Checkbox/checkbox.theme'
import { close } from './Close/close.theme'
import { form } from './Form/form.theme'
import { iconButton } from './IconButton/iconButton.theme'
import { input } from './Input/input.theme'
import { link } from './Link/link.theme'
import { list } from './List/list.theme'
import { logo } from './Logo/logo.theme'
import { modal } from './Modal/modal.theme'
import { nav } from './Nav/nav.theme'
import { row } from './Row/row.theme'
import { select } from './Select/select.theme'
import { sidebar } from './Sidebar/sidebar.theme'
import { statusbar } from './Statusbar/statusbar.theme'
import { svg } from './Svg/svg.theme'
import { tabs } from './Tabs/tabs.theme'
import { text } from './Text/text.theme'
import { textarea } from './Textarea/textarea.theme'
import { toolbar } from './Toolbar/toolbar.theme'

// shared
import { animation as Animation } from './base/animation.theme'
import { border as Border } from './base/border.theme'
import { clearfix as Clearfix } from './base/clearfix.theme'
import { depth as Depth } from './base/depth.theme'
import { font as Font } from './base/font.theme'
import { globalStyles as Global } from './base/global.theme'
import { inject } from './base/inject.theme'
import { media as Media } from './base/media.theme'
import { scrollbar as Scrollbar } from './base/scrollbar.theme'
import { spacing as Spacing } from './base/spacing.theme'

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

export function theme(props = {}) {
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
  } = { ...defaults, ...props }

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
      buttonGroup: buttonGroup(base),
      card: card(base),
      checkbox: checkbox(base),
      close: close(base),
      form: form(base),
      iconButton: iconButton(base),
      input: input(base),
      link: link(base),
      list: list(base),
      logo: logo(base),
      modal: modal(base),
      nav: nav(base),
      row: row(base),
      select: select(base),
      sidebar: sidebar(base),
      statusbar: statusbar(base),
      svg: svg(base),
      tabs: tabs(base),
      text: text(base),
      textarea: textarea(base),
      toolbar: toolbar(base),
      ...extend(base)
    }
  }
}

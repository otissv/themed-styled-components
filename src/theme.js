// shared
import { animation as Animation } from './base/animation.theme'
import { border as Border } from './base/border.theme'
import { clearfix as Clearfix } from './base/clearfix.theme'
import { columns as Columns } from './base/columns.theme'
import { depth as Depth } from './base/depth.theme'
import { font as Font } from './base/font.theme'
import { globalStyles as Global } from './base/global.theme'
import { media as Media } from './base/media.theme'
import { radius as Radius } from './base/radius.theme'
import { scrollbar as Scrollbar } from './base/scrollbar.theme'
import { spacing as Spacing } from './base/spacing.theme'
import { widths as Widths } from './base/widths.theme'
import { accordion } from './Accordion/accordion.theme'
import { button } from './Button/button.theme'
import { buttonGroup } from './ButtonGroup/buttonGroup.theme'
import { card } from './Card/card.theme'
import { checkbox } from './Checkbox/checkbox.theme'
import { close } from './Close/close.theme'
import { floatLabel } from './FloatLabel/floatLabel.theme'
import { form } from './Form/form.theme'
import { icon } from './Icon/icon.theme'
import { iconButton } from './IconButton/iconButton.theme'
import { inject } from './base/inject.theme'
import { input } from './Input/input.theme'
import { list } from './List/list.theme'
import { login } from './Login/login.theme'
import { modal } from './Modal/modal.theme'
import { nav } from './Nav/nav.theme'
import { row } from './Row/row.theme'
import { select } from './Select/select.theme'
import { shared } from './shared'
import { sidebar } from './Sidebar/sidebar.theme'
import { statusbar } from './Statusbar/statusbar.theme'
import { tabs } from './Tabs/tabs.theme'
import { text } from './Text/text.theme'
import { textarea } from './Textarea/textarea.theme'
import { toolbar } from './Toolbar/toolbar.theme'

const defaults = {
  animation: {},
  border: {},
  clearfix: {},
  depth: {},
  font: {},
  media: {},
  scrollbar: {},
  spacing: {},
  widths: {},
  columns: {},
  radius: {},
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
    widths,
    columns,
    radius,
    extend
  } = { ...defaults, ...props }

  return function(colors = {}) {
    const _animation = Animation({ animation } || {})
    const _border = Border({ ...border, colors })
    const _depth = Depth({ depth } || {})
    const _font = Font({ colors, font })
    const _media = Media({ media } || {})
    const _spacing = Spacing({ spacing } || {})
    const _scrollbar = Scrollbar({ colors, spacing: _spacing, ...scrollbar })
    const _radius = Radius({ radius } || {})
    const _widths = Widths({ widths } || {})
    const _columns = Columns({ columns } || {})
    const _clearfix = Clearfix({ clearfix } || {})

    const base = {
      animation: _animation,
      border: _border,
      clearfix: _clearfix,
      colors,
      depth: _depth,
      font: _font,
      media: _media,
      scrollbar: _spacing,
      spacing: _spacing,
      widths: _widths,
      radius: _radius,
      columns: _columns
    }

    Global({
      ...base,
      inject: inject(base, shared(base))
    })

    return {
      ...base,
      accordion: accordion(base, shared(base)),
      button: button(base, shared(base)),
      buttonGroup: buttonGroup(base, shared(base)),
      card: card(base, shared(base)),
      checkbox: checkbox(base, shared(base)),
      close: close(base, shared(base)),
      floatLabel: floatLabel(base, shared(base)),
      form: form(base, shared(base)),
      icon: icon(base, shared(base)),
      iconButton: iconButton(base, shared(base)),
      input: input(base, shared(base)),
      list: list(base, shared(base)),
      login: login(base, shared(base)),
      modal: modal(base, shared(base)),
      nav: nav(base, shared(base)),
      row: row(base, shared(base)),
      select: select(base, shared(base)),
      sidebar: sidebar(base, shared(base)),
      statusbar: statusbar(base, shared(base)),
      tabs: tabs(base, shared(base)),
      text: text(base, shared(base)),
      textarea: textarea(base, shared(base)),
      toolbar: toolbar(base, shared(base)),
      ...extend(base, shared(base))
    }
  }
}

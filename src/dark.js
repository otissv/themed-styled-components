const foreground = '#f1f1f1'
const background = '#343b45'

const foregroundInvert = '#000000'
const backgroundInvert = '#f1f1f1'

const primary = '#E10098'
const primary2 = '#d8eafc'
const secondary = '#515151'
const tertiary = '#1d1d1d'

const error = '#f0506e'
const error2 = '#fef4f6'
const info = '#1e87f0'
const info2 = '#d8eafc'
const success = '#32d296'
const success2 = '#edfbf6'
const warning = '#faa05a'
const warning2 = '#fff6ee'

export const dark = {
  // Default
  foreground,
  foregroundInvert,
  background,
  backgroundInvert,
  primary,
  secondary,
  tertiary,

  border: foreground,
  borderSecondary: secondary,
  borderPrimary: primary,

  activeBackground: secondary,
  activeForeground: background,
  focusBackground: secondary,
  focusForeground: background,
  hoverBackground: secondary,
  hoverForeground: background,
  visitedBackground: secondary,
  visitedForeground: background,

  // error
  error,
  error2,
  bordererror: error,
  activeBackgrounderror: error2,
  activeForegrounderror: error,
  focusBackgrounderror: error2,
  focusForegrounderror: error,
  hoverBackgrounderror: error2,
  hoverForegrounderror: error,
  visitedBackgrounderror: error2,
  visitedForegrounderror: error,

  // Info
  info,
  info2,
  borderInfo: info,
  activeBackgroundInfo: info2,
  activeForegroundInfo: info,
  focusBackgroundInfo: info2,
  focusForegroundInfo: info,
  hoverBackgroundInfo: info2,
  hoverForegroundInfo: info,
  visitedBackgroundInfo: info2,
  visitedForegroundInfo: info,

  // Success
  success,
  success2,
  borderSuccess: success,
  activeBackgroundSuccess: success2,
  activeForegroundSuccess: success,
  focusBackgroundSuccess: success2,
  focusForegroundSuccess: success,
  hoverBackgroundSuccess: success2,
  hoverForegroundSuccess: success,
  visitedBackgroundSuccess: success2,
  visitedForegroundSuccess: success,

  // Warning
  warning,
  warning2,
  borderWarning: warning,
  activeBackgroundWarning: warning2,
  activeForegroundWarning: warning,
  focusBackgroundWarning: warning2,
  focusForegroundWarning: warning,
  hoverBackgroundWarning: warning2,
  hoverForegroundWarning: warning,
  visitedBackgroundWarning: warning2,
  visitedForegroundWarning: warning
}

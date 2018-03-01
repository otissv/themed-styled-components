import { datauri } from '../datauri'

export function checkbox({ animation, border, colors, spacing }) {
  return {
    display: 'inline-block',
    height: '16px',
    width: '16px',
    overflow: 'hidden',
    margin: `-4px ${spacing.small} 0 0`,
    verticalAlign: 'middle',
    webkitAppearance: 'none',
    backgroundColor: colors.background,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    border: border.thin,
    transition: animation.easeInOutMedium,
    transitionProperty: 'background-color, border',
    outline: 'none',
    padding: 0,
    borderRadius: 0,
    color: colors.foreground,
    notDisabled: {
      cursor: 'pointer'
    },
    hover: {
      background: colors.secondary
    },
    focus: {
      background: colors.secondary
    },
    indeterminate: {
      backgroundColor: colors.foreground,
      color: colors.background
    },
    checked: {
      backgroundColor: colors.foreground,
      color: colors.background,
      backgroundImage: datauri.check
    }
  }
}

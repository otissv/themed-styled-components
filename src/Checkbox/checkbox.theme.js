import { datauri } from '../datauri'
import { Label } from 'glamorous'

export function checkbox({ animation, border, colors, font, spacing }) {
  return {
    display: 'inline-block',
    height: '30px',
    width: '30px',
    overflow: 'hidden',
    margin: `-4px ${spacing.small} 0 0`,
    verticalAlign: 'middle',
    '-webkitAppearance': 'none',
    backgroundColor: colors.background,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    border: border.thinSecondary,
    transition: animation.easeInOutMedium,
    transitionProperty: 'background-color, border',
    outline: 'none',
    padding: 0,
    borderRadius: 0,
    color: colors.foreground,
    '&:not(:disabled)': {
      cursor: 'pointer'
    },
    '&:hover': {
      backgroundColor: colors.secondary2
    },
    '&:focus': {
      backgroundColor: colors.secondary2
    },
    '&:indeterminate': {
      backgroundColor: colors.foreground,
      color: colors.background,
      backgroundImage: datauri.check
    },
    '&:checked': {
      backgroundColor: colors.foreground,
      color: colors.background,
      backgroundImage: datauri.check
    },
    accent: {
      backgroundColor: colors.background,
      border: border.thinAccent,
      '&:hover': {
        backgroundColor: colors.accent2
      },
      '&:focus': {
        backgroundColor: colors.accent2
      },
      '&:indeterminate': {
        backgroundColor: colors.accent,
        color: colors.background,
        backgroundImage: datauri.check
      },
      '&:checked': {
        backgroundColor: colors.accent,
        color: colors.background,
        backgroundImage: datauri.check
      }
    },
    primary: {
      backgroundColor: colors.background,
      border: border.thinPrimary,
      '&:hover': {
        backgroundColor: colors.secondary2
      },
      '&:focus': {
        backgroundColor: colors.secondary2
      },
      '&:indeterminate': {
        backgroundColor: colors.primary,
        color: colors.background,
        backgroundImage: datauri.check
      },
      '&:checked': {
        backgroundColor: colors.primary,
        color: colors.background,
        backgroundImage: datauri.check
      }
    },

    danger: {
      backgroundColor: colors.background,
      border: border.thinDanger,
      '&:hover': {
        backgroundColor: colors.danger2
      },
      '&:focus': {
        backgroundColor: colors.danger2
      },
      '&:indeterminate': {
        backgroundColor: colors.danger,
        color: colors.background,
        backgroundImage: datauri.check
      },
      '&:checked': {
        backgroundColor: colors.danger,
        color: colors.background,
        backgroundImage: datauri.check
      }
    },
    small: {
      height: '15px',
      width: '15px'
    },
    large: {
      height: '40px',
      width: '40px'
    },
    label: {
      marginBottom: spacing.small,
      fontSize: 'inherit',
      small: {
        fontSize: font.small
      },
      large: {
        fontSize: font.large
      }
    }
  }
}

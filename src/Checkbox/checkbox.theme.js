import { datauri } from '../datauri'

export function checkbox({ animation, border, colors, font, spacing }) {
  return {
    '-webkitAppearance': 'none',
    backgroundColor: colors.background,
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    border: border.thinSecondary,
    borderRadius: 0,
    color: colors.foreground,
    display: 'inline-block',
    height: '30px',
    margin: `-4px ${spacing.small} 0 0`,
    outline: 'none',
    overflow: 'hidden',
    padding: 0,
    transition: animation.easeMedium(),
    transitionProperty: 'background-color, border',
    verticalAlign: 'middle',
    width: '30px',

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
        backgroundImage: datauri.check,
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.accent,
        backgroundImage: datauri.check,
        color: colors.background
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
        backgroundImage: datauri.check,
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.danger,
        backgroundImage: datauri.check,
        color: colors.background
      }
    },

    primary: {
      backgroundColor: colors.background,
      border: border.thinPrimary,
      '&:hover': {
        backgroundColor: colors.primary2
      },
      '&:focus': {
        backgroundColor: colors.primary2
      },
      '&:indeterminate': {
        backgroundColor: colors.primary,
        backgroundImage: datauri.check,
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.primary,
        backgroundImage: datauri.check,
        color: colors.background
      }
    },

    success: {
      backgroundColor: colors.background,
      border: border.thinSuccess,
      '&:hover': {
        backgroundColor: colors.success2
      },
      '&:focus': {
        backgroundColor: colors.success2
      },
      '&:indeterminate': {
        backgroundColor: colors.success,
        backgroundImage: datauri.check,
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.success,
        backgroundImage: datauri.check,
        color: colors.background
      }
    },

    warning: {
      backgroundColor: colors.background,
      border: border.thinWarning,
      '&:hover': {
        backgroundColor: colors.warning2
      },
      '&:focus': {
        backgroundColor: colors.warning2
      },
      '&:indeterminate': {
        backgroundColor: colors.warning,
        backgroundImage: datauri.check,
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.warning,
        backgroundImage: datauri.check,
        color: colors.background
      }
    },

    /* =====================================
    * Size 
    * =================================== */

    large: {
      height: '40px',
      width: '40px'
    },
    small: {
      height: '15px',
      width: '15px'
    },

    /* =====================================
    * Checkbox Label 
    * =================================== */
    label: {
      marginBottom: spacing.small,
      fontSize: 'inherit',

      //Size
      large: {
        fontSize: font.large
      },
      small: {
        fontSize: font.small
      }
    }
  }
}

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
    height: '40px',
    margin: `-4px ${spacing.small} 0 0`,
    outline: 'none',
    overflow: 'hidden',
    padding: 0,
    transition: animation.easeMedium(),
    transitionProperty: 'background-color, border',
    verticalAlign: 'middle',
    width: '40px',

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
      color: colors.background
    },
    '&:checked': {
      backgroundColor: colors.foreground,
      color: colors.background
    },

    /*===============================================
    * Context
    * ============================================ */
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
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.accent,
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
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.danger,
        color: colors.background
      }
    },
    muted: {
      backgroundColor: colors.background,
      border: border.thinMuted,
      '&:hover': {
        backgroundColor: colors.muted2
      },
      '&:focus': {
        backgroundColor: colors.muted2
      },
      '&:indeterminate': {
        backgroundColor: colors.muted,
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.muted,
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
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.primary,
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
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.success,
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
        color: colors.background
      },
      '&:checked': {
        backgroundColor: colors.warning,
        color: colors.background
      }
    },

    /* =====================================
    * Checkbox Icon 
    * =================================== */
    icon: {
      display: 'none',
      position: 'absolute',
      alignItems: 'center',
      bottom: 0,
      color: '#fff',
      justifyContent: 'center',
      margin: '-4px 10px',
      pointerEvents: 'none',
      top: 0,
      transform: 'scale(1.5,1.5)',
      width: '40px',

      //context
      accent: {
        color: '#fff'
      },
      danger: {
        color: '#fff'
      },
      muted: {
        color: '#fff'
      },
      primary: {
        color: '#fff'
      },
      success: {
        color: '#fff'
      },
      warning: {
        color: '#fff'
      },

      // Size
      large: {
        transform: 'scale(2.2,2.2)',
        marginLeft: '23px',
        marginTop: '0px'
      },
      small: {
        transform: 'scale(0.7)',
        width: '15px',
        margin: '-6px -3px'
      },
      checked: {
        display: 'block'
      }
    },

    /* =====================================
    * Size 
    * =================================== */

    large: {
      height: '55px',
      width: '55px'
    },
    small: {
      height: '15px',
      width: '15px'
    },

    /* =====================================
    * Checkbox Label 
    * =================================== */
    label: {
      position: 'relative',
      marginBottom: spacing.small,
      fontSize: 'inherit',

      // Context
      accent: {
        color: colors.accent
      },
      danger: {
        color: colors.danger
      },
      muted: {
        color: colors.muted
      },
      primary: {
        color: colors.primary
      },
      success: {
        color: colors.success
      },
      warning: {
        color: colors.warning
      },

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

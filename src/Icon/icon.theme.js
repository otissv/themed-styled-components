export function icon({ animation, colors }) {
  return {
    display: 'inline-block',
    color: colors.foreground,
    fill: 'currentcolor',
    height: 'auto',
    transition: animation.easeMedium(),

    '&:hover': {
      color: colors.secondary
    },

    /* =====================================
    * Context 
    * =================================== */
    accent: {
      color: colors.accent,
      '&:hover': {
        color: colors.accent2
      }
    },
    danger: {
      color: colors.danger,
      '&:hover': {
        color: colors.danger2
      }
    },
    primary: {
      color: colors.primary,
      '&:hover': {
        color: colors.primary2
      }
    },
    success: {
      color: colors.success,
      '&:hover': {
        color: colors.success2
      }
    },
    warning: {
      color: colors.warning,
      '&:hover': {
        color: colors.warning2
      }
    },

    /* =====================================
    * Size 
    * =================================== */

    large: {
      height: '24px',
      width: '24px'
    },

    small: {
      height: '13px',
      width: '13px'
    }
  }
}

export function close({ animation, colors }) {
  return {
    float: 'right',
    border: 'none',
    background: 'none',
    outline: 'none',
    transition: animation.easeMedium(),

    /* =====================================
    * Context 
    * =================================== */
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
    }
  }
}

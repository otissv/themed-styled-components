export function svg({ animation, colors }) {
  return {
    display: 'inline-block',
    fill: colors.foreground,
    height: '16px',
    transition: animation.easeMedium(),
    width: '16px',

    '&:hover': {
      fill: colors.foreground
    },

    /* =====================================
    * Context 
    * =================================== */
    accent: {
      fill: colors.accent
    },
    danger: {
      fill: colors.danger
    },
    primary: {
      fill: colors.primary
    },
    success: {
      fill: colors.success
    },
    warning: {
      fill: colors.warning
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

export function link({ animation, colors }) {
  return {
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
    primary: {
      color: colors.primary
    },
    waring: {
      color: colors.waring
    },
    success: {
      color: colors.success
    }
  }
}

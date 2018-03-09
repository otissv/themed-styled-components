export function row({ animation, colors, spacing }) {
  return {
    display: 'flex',
    margin: spacing.medium,
    transition: animation.easeMedium(),

    /* =====================================
    * Container 
    * =================================== */

    container: {
      maxWidth: '990px'
    },

    /* =====================================
    * Context 
    * =================================== */
    accent: {
      backGroundColor: colors.accent
    },
    danger: {
      backGroundColor: colors.primary
    },
    primary: {
      backGroundColor: colors.primary
    },
    success: {
      backGroundColor: colors.primary
    },
    waring: {
      backGroundColor: colors.primary
    }
  }
}

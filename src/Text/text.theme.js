export function text({ animation, border, colors, font, spacing }) {
  return {
    transition: animation.easeMedium(),

    /* =====================================
    * Bold 
    * =================================== */
    bold: {
      fontWeight: 'bold'
    },

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
      color: colors.secondary
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

    /* =====================================
    * Size 
    * =================================== */
    large: {
      fontSize: font.large,
      lineHeight: '24px',
      fontWeight: 400
    },
    small: {
      fontSize: font.xsmall,
      lineHeight: '16px'
    },

    /* =====================================
    * Modify
    * =================================== */
    lead: {
      fontSize: font.xlarge,
      lineHeight: 1.5,
      fontWeight: 300
    },
    meta: {
      fontSize: font.default,
      color: colors.secondary,
      lineHeight: 1.4
    },

    /* =====================================
    * Text Wrap 
    * =================================== */
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    break: {
      wordWrap: 'break-word',
      hyphens: 'auto'
    },
    nowrap: {
      whiteSpace: 'nowrap'
    },

    /* =====================================
    * Type 
    * =================================== */

    code: {
      background: colors.secondary,
      color: colors.primary,
      padding: '0 4px',
      whiteSpace: 'nowrap'
    },
    q: {
      fontStyle: 'italic',
      '&:before': {
        content: ' open-quote'
      },
      '&:after': {
        content: ' close-quote'
      }
    },
    sm: {
      fontSize: '80%'
    },
    strong: {
      fontWeight: 700
    }

    /* =====================================
    * Align 
    * =================================== */

    /* =====================================
    * Vertical 
    * =================================== */

    /* =====================================
    * Wrap 
    * =================================== */
  }
}

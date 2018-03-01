export function border({ colors }) {
  return {
    none: 0,
    rounded: '3px',
    circle: '100%',

    // thick
    thick: `2px solid ${colors.foreground}`,
    thickInvert: `2px solid ${colors.background}`,
    thickSize: '2px',
    thickStyle: 'solid',
    thickTransparent: `1px solid rgba(0, 0, 0, 0);`,

    // thin
    thin: `1px solid ${colors.foreground}`,
    thinInvert: `1px solid ${colors.background}`,
    thinSize: '1px',
    thinStyle: 'solid',
    thinTransparent: `1px solid rgba(0, 0, 0, 0);`,

    // primary
    thickPrimary: `2px solid ${colors.primary}`,
    thinPrimary: `1px solid ${colors.primary}`,

    // secondary
    thickSecondary: `2px solid ${colors.secondary}`,
    thinSecondary: `1px solid ${colors.secondary}`,

    // tertiary
    thickTertiary: `2px solid ${colors.tertiary}`,
    thinTertiary: `1px solid ${colors.tertiary}`
  };
}

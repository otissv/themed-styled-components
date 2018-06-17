import merge from 'lodash/fp/merge'
export function scrollbar(props) {
  const { colors, spacing } = props

  const defaults = {
    width: spacing.xsmall,
    height: spacing.xsmall,
    backgroundColor: colors.background,
    corner: {
      backgroundColor: colors.background
    },
    thumb: {
      backgroundColor: colors.tertiary,
      outline: 'none',
      hover: {
        backgroundColor: colors.tertiary
      }
    }
  }

  return merge(props.scrollbar)(defaults)
}

import merge from 'lodash/fp/merge'
export function widths(props) {
  const defaults = {
    large: '300px',
    medium: '200px',
    small: '130px',
    xlarge: '500px',
    xsmall: '40px'
  }

  return merge(props.widths)(defaults)
}

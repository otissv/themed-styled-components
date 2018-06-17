import merge from 'lodash/fp/merge'
export function spacing(props) {
  const defaults = {
    xsmall: '5px',
    small: '10px',
    medium: '20px',
    large: '30px',
    xlarge: '60px'
  }

  return merge(props.spacing)(defaults)
}

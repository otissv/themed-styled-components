import merge from 'lodash/fp/merge'

export function radius(props) {
  const defaults = {
    rounded: '3px',
    circle: '100%'
  }

  return merge(props.radius)(defaults)
}

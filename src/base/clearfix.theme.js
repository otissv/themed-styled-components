import merge from 'lodash/fp/merge'

export function clearfix(props) {
  const defaults = {
    before: `
      content: "";
      display: table-cell;
    `,
    after: `
      content: "";
      display: table;
      clear: both;
    `
  }

  return merge(defaults, props.clearfix)
}

function styleProp({ prop, style }) {
  return Object.keys(prop).reduce(
    (prev, key) => ({ ...prev, [key]: { [style]: prop[key] } }),
    {}
  )
}

export function shared({ radius, widths, columns }) {
  return {
    columns: styleProp({ prop: columns, style: 'width' }),
    radius: styleProp({ prop: radius, style: 'borderRadius' }),
    widths: styleProp({ prop: widths, style: 'width' })
  }
}

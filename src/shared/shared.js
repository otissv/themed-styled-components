function styleProp({ prop, style }) {
  return Object.keys(prop).reduce(
    (prev, key) => ({ ...prev, [key]: { [style]: prop[key] } }),
    {}
  )
}

// function spacingPositions(prop) {

//   // padding='top: small, left: large'

//   const positions = [top, left, bottom, right,  remove, removeTop and removeBottom]

//   return
// }

export function shared({ columns, radius, spacing, widths }) {
  return {
    // padding: ,
    // margin: styleProp({ prop: spacing, style: 'margin' }),
    columns: styleProp({ prop: columns, style: 'width' }),
    radius: styleProp({ prop: radius, style: 'borderRadius' }),
    widths: styleProp({ prop: widths, style: 'width' }),
  }
}

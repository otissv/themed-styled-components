export function buttonGroup({
  animation,
  border,
  colors,
  depth,
  font,
  spacing
}) {
  return {
    display: 'inline-flex',
    position: 'relative',
    transition: animation.easeMedium(),
    verticalAlign: 'middle',

    /* =====================================
    * Stretch 
    * =================================== */
    stretch: {
      display: 'flex'
    }
  }
}

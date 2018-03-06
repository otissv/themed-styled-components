export function makeStyles(theme, fn) {
  return Object.keys(theme).reduce((previous, key) => {
    const style = fn(key)

    return `${previous} 
        ${style.split(':')[1] === ' [object Object];' ? '' : style};`
  }, ``)
}

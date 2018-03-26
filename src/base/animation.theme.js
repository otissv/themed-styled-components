export function animation({ animation = {} }) {
  const xslow = animation.xslow || '3s'
  const slow = animation.slow || '0.5s'
  const medium = animation.medium || '0.3s'
  const fast = animation.fast || '0.1s'

  return {
    xslow,
    slow,
    medium,
    fast,

    //ease
    easeFast: (property = 'all', delay) =>
      `${property} ${fast} ease ${delay || ''}`,
    easeMedium: (property = 'all', delay) =>
      `${property} ${medium} ease ${delay || ''}`,
    easeSlow: (property = 'all', delay) =>
      `${property} ${slow} ease ${delay || ''}`,
    easeXslow: (property = 'all', delay) =>
      `${property} ${xslow} ease ${delay || ''}`,

    //easIn
    easeInFast: (property = 'all', delay) =>
      `${property} ${fast} ease-in-out ${delay || ''}`,
    easeInMedium: (property = 'all', delay) =>
      `${property} ${medium} ease-in-out ${delay || ''}`,
    easeInSlow: (property = 'all', delay) =>
      `${property} ${slow} ease-in-out ${delay || ''}`,
    easeInXslow: (property = 'all', delay) =>
      `${property} ${xslow} ease-in-out ${delay || ''}`,

    //easeInOut
    easeInOutFast: (property = 'all', delay) =>
      `${property} ${fast} ease-in-out ${delay || ''}`,
    easeInOutMedium: (property = 'all', delay) =>
      `${property} ${medium} ease-in-out ${delay || ''}`,
    easeInOutSlow: (property = 'all', delay) =>
      `${property} ${slow} ease-in-out ${delay || ''}`,
    easeInOutXslow: (property = 'all', delay) =>
      `${property} ${xslow} ease-in-out ${delay || ''}`
  }
}
// property duration timing-function delay;

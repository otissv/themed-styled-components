export function keysToUniqueList(list) {
  const objKeysList = list.map(obj => Object.keys(obj))[0]

  return [...new Set(objKeysList)]
}

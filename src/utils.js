export function isIgnoredField({ key, items = [] }) {
  const ignore = ['defaults', 'submit', '__typename', ...items]
  return ignore.includes(key)
}

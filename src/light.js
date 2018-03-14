import { makeColorScheme } from './utils/makeColorScheme.util'

export const light = makeColorScheme({
  foreground: '#666',
  background: '#fff',
  transparent: '#00ffff00',

  foregroundInvert: '#fff',
  backgroundInvert: '#666',

  accent2: '#E10098',
  accent: '#E10098',
  danger2: '#ee395b',
  danger: '#f0506e',
  error2: '#fef4f6',
  error: '#f0506e',
  muted2: '#d2d2d2',
  muted: '#777',
  primary2: '#0f7ae5',
  primary: '#1e87f0',
  secondary2: '#999',
  secondary: '#e5e5e5',
  success2: '#edfbf6',
  success: '#32d296',
  tertiary2: '#515151',
  tertiary: '#515151',
  warning2: '#fff6ee',
  warning: '#faa05a'
})

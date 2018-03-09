import { generateMedia } from 'styled-media-query'

export function media(
  mega,
  huge,
  xlarge,
  large,
  medium,
  small,
  xsmall,
  mega1,
  huge1,
  xlarge1,
  large1,
  medium1,
  small1,
  xsmall1
) {
  const _mega = mega || '2560px'
  const _huge = huge || '1920px'
  const _xlarge = xlarge || '1440px'
  const _large = large || '1170px'
  const _medium = medium || '768px'
  const _small = small || '450px'
  const _xsmall = xsmall || '320px'

  const _mega1 = mega1 || '2561px'
  const _huge1 = huge1 || '1920px'
  const _xlarge1 = xlarge1 || '1441px'
  const _large1 = large1 || '1171px'
  const _medium1 = medium1 || '766px'
  const _small1 = small1 || '451px'
  const _xsmall1 = xsmall1 || '321px'

  return generateMedia({
    mega: _mega,
    huge: _huge,
    xlarge: _xlarge,
    large: _large,
    medium: _medium,
    small: _small,
    xsmall: _xsmall,

    mega1: _mega1,
    huge1: _huge1,
    xlarge1: _xlarge1,
    large1: _large1,
    medium1: _medium1,
    small1: _small1,
    xsmall1: _xsmall1
  })
}

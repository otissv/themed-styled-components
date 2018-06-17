import { generateMedia } from 'styled-media-query'
import merge from 'lodash/fp/merge'

export function media(props) {
  const mega = props.media.mega || '2560px'
  const huge = props.media.huge || '1920px'
  const xlarge = props.media.xlarge || '1440px'
  const large = props.media.large || '1170px'
  const medium = props.media.medium || '768px'
  const small = props.media.small || '450px'
  const xsmall = props.media.xsmall || '320px'

  const mega1 = props.media.mega1 || '2561px'
  const huge1 = props.media.huge1 || '1920px'
  const xlarge1 = props.media.xlarge1 || '1441px'
  const large1 = props.media.large1 || '1171px'
  const medium1 = props.media.medium1 || '766px'
  const small1 = props.media.small1 || '451px'
  const xsmall1 = props.media.xsmall1 || '321px'

  const defaults = generateMedia({
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
  })

  return merge(props.media)(defaults)
}

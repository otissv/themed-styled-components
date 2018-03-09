import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  getThemedValue,
  kebabCase,
  makeStyles,
  stateStyled
} from '../utils/theme.util'
import styled from 'styled-components'

function ignoreProps(ignore) {
  return function(props) {
    return Object.keys(props).reduce((previous, key) => {
      if (ignore.includes(key)) return previous
      return {
        ...previous,
        [key]: props[key]
      }
    }, {})
  }
}

const cleanProps = ignoreProps('type')

function styles(props) {
  const THEME = 'text'
  const theme = props.theme[THEME]

  return makeStyles(theme, key => {
    const THEME = 'text'
    const theme = props.theme[THEME]

    switch (key) {
      case 'color':
        return `color: ${getThemedValue({
          style: 'color',
          props,
          key: 'context',
          theme: THEME
        })};`
      case 'fontSize':
        return `font-size: ${getThemedValue({
          style: 'fontSize',
          props,
          key: 'size',
          theme: THEME
        })};`
      case 'fontWeight':
        return `font-weight: ${getThemedValue({
          style: 'fontWeight',
          props,
          key: 'bold',
          theme: THEME
        })};`
      case 'lineHeight':
        return `line-height: ${getThemedValue({
          style: 'lineHeight',
          props,
          key: 'size',
          theme: THEME
        })};`

      case '&:hover':
        return stateStyled({
          key,
          props,
          theme: THEME
        })
      case '&:active':
        return stateStyled({
          key,
          props,
          theme: THEME
        })
      case '&:focus':
        return stateStyled({
          key,
          props,
          theme: THEME
        })
      default:
        return `${key[0] === '-' ? '-' : ''}${kebabCase(key)}: ${theme[key]};`
    }
  })
}

function textWrapStyles(props) {
  if (!props.textWrap) return ''

  const THEME = `text.${props.textWrap}`
  const theme = props.theme[THEME]
  return makeStyles(theme, key => `${kebabCase(key)}: ${theme[key]};`)
}

function getStyles(props) {
  ;`${styles(props)} ${textWrapStyles(props)}`
}

const Link = styled.a`
  ${props => getStyles(props)} ${props => props.styled};
`

const Abbr = styled.abbr`
  ${props => getStyles(props)} ${props => props.styled};
`

const Code = styled.code`
  ${props => getStyles(props)} ${props => {
    const theme = props.theme.text.code
    return makeStyles(theme, key => `${kebabCase(key)}: ${theme[key]};`)
  }};

  ${props => props.styled};
`

const Del = styled.del`
  ${props => getStyles(props)} ${props => props.styled};
`

const Dfn = styled.dfn`
  ${props => getStyles(props)} ${props => props.styled};
`

const Em = styled.em`
  ${props => getStyles(props)} ${props => props.styled};
`

const H1 = styled.h1`
  ${props => getStyles(props)} ${props => props.styled};
`
const H2 = styled.h2`
  ${props => getStyles(props)} ${props => props.styled};
`

const H3 = styled.h3`
  ${props => getStyles(props)} ${props => props.styled};
`

const H4 = styled.h4`
  ${props => getStyles(props)} ${props => props.styled};
`

const H5 = styled.h5`
  ${props => getStyles(props)} ${props => props.styled};
`

const H6 = styled.h6`
  ${props => getStyles(props)} ${props => props.styled};
`

const Hr = styled.hr`
  ${props => props.styledText};
`

const Ins = styled.ins`
  ${props => getStyles(props)} ${props => props.styled};
`

const Q = styled.q`
  ${props => getStyles(props)} ${props => {
    const theme = props.theme.text.q
    return makeStyles(theme, key => `${kebabCase(key)}: ${theme[key]};`)
  }};
  ${props => getStyles(props)} ${props => props.styled};
`

const Mark = styled.mark`
  ${props => getStyles(props)} ${props => props.styled};
`

const P = styled.p`
  ${props => getStyles(props)} ${props => props.styled};
`

const Sm = styled.small`
  ${props => getStyles(props)} ${props => {
    const theme = props.theme.text.small
    return makeStyles(theme, key => `${kebabCase(key)}: ${theme[key]};`)
  }};
  ${props => getStyles(props)} ${props => props.styled};
`

const Span = styled.span`
  ${props => getStyles(props)} ${props => props.styled};
`

const Strong = styled.strong`
  ${props => getStyles(props)} ${props => props.styled};
`

class Text extends Component {
  static propTypes = {
    bold: PropTypes.bool,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'muted',
      'primary',
      'success',
      'warning'
    ]),
    heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    href: PropTypes.string,
    textWrap: PropTypes.oneOf(['truncate', 'break', 'nowrap']),
    size: PropTypes.oneOf(['small', 'large']),
    type: PropTypes.oneOf([
      'a',
      'abbr',
      'code',
      'del',
      'dfn',
      'em',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hr',
      'ins',
      'mark',
      'q',
      'p',
      'sm',
      'span',
      'strong'
    ])
  }

  render() {
    // Elements
    const type = {
      a: props => (
        <Link href={props.href} {...props}>
          {props.children}
        </Link>
      ),

      abbr: props => <Abbr {...props}>{props.children}</Abbr>,

      code: props => <Code {...props}>{props.children}</Code>,

      del: props => <Del {...props}>{props.children}</Del>,

      dfn: props => (
        <Dfn {...props} title={props.title}>
          {props.children}
        </Dfn>
      ),

      em: props => <Em {...props}>{props.children}</Em>,

      h1: props => <H1 {...props}>{props.children}</H1>,

      h2: props => <H2 {...props}>{props.children}</H2>,

      h3: props => <H3 {...props}>{props.children}</H3>,

      h4: props => <H4 {...props}>{props.children}</H4>,

      h5: props => <H5 {...props}>{props.children}</H5>,

      h6: props => <H6 {...props}>{props.children}</H6>,

      hr: props => <Hr {...props} />,

      ins: props => <Ins {...props}>{props.children}</Ins>,

      mark: props => <Mark {...props}>{props.children}</Mark>,

      q: props => <Q {...props}>{props.children}</Q>,

      p: props => <P {...props}>{props.children}</P>,

      sm: props => <Sm {...props}>{props.children}</Sm>,

      span: props => <Span {...props}>{props.children}</Span>,

      strong: props => <Strong {...props}>{props.children}</Strong>
    }

    const Component = type[this.props.type] || type['p']
    return <Component {...cleanProps(this.props)} />
  }
}

export const text = styled(Text)
// textAlign='left'	Aligns text to the left.
// textAlign='leftSmall'	Aligns text to the left only on small devices.
// textAlign='leftMedium'	Aligns text to the left on medium and small devices.
// textAlign='right'	Aligns text to the right.
// textAlign='center'	Centers text horizontally.
// textAlign='centerSmall'	Centers text horizontally only on small devices.
// textAlign='centerMedium'	Centers text horizontally on medium and small devices.
// textAlign='justify'

// textVertical='top'	Aligns text to the top.
// textVertical='middle'	Centers text vertically.
// textVertical='bottom'	Aligns text to the bottom.

// textWrap='truncate'	Prevents text from wrapping into multiple lines, truncating it instead.
// textWrap='break'	Breaks strings if their length exceeds the width of their container.
// textWrap='nowrap'	Breaks strings if their length exceeds the width of their container.

//   }
// }

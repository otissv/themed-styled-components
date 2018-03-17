import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

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

const cleanProps = ignoreProps(['element'])

function getStyles() {
  return function(props) {
    return `
    ${styles('text')(props)}
    ${styles('text', 'context')(props)}
    ${styles('text.bold', 'bold', true)(props)}
    ${sharedStyles('text')};

    `
  }
}

const Link = styled.a`
  ${getStyles()} ${props => props.styled};
`

const Abbr = styled.abbr`
  ${getStyles()} ${props => props.styled};
`

const Code = styled.code`
 ${getStyles()}
  ${styles('text', 'element', true)} ${props => props.styled};
`

const Del = styled.del`
  ${getStyles()} ${props => props.styled};
`

const Dfn = styled.dfn`
  ${getStyles()} ${props => props.styled};
`

const Em = styled.em`
  ${getStyles()} ${props => props.styled};
`

const H1 = styled.h1`
  ${getStyles()} ${props => props.styled};
`
const H2 = styled.h2`
  ${getStyles()} ${props => props.styled};
`

const H3 = styled.h3`
  ${getStyles()} ${props => props.styled};
`

const H4 = styled.h4`
  ${getStyles()} ${props => props.styled};
`

const H5 = styled.h5`
  ${getStyles()} ${props => props.styled};
`

const H6 = styled.h6`
  ${getStyles()} ${props => props.styled};
`

const Hr = styled.hr`
  ${getStyles()} ${props => props.styled};
`

const Ins = styled.ins`
  ${getStyles()} ${props => props.styled};
`

const Q = styled.q`
  ${getStyles()}
  ${styles('text.q', 'q', true)}
  ${props => props.styled};
`

const Mark = styled.mark`
  ${getStyles()} ${props => props.styled};
`

const P = styled.p`
  ${getStyles()} ${props => props.styled};
`

const Sm = styled.small`
${styles('text.sm', 'sm', true)}
  ${getStyles()} ${props => props.styled};
`

const Span = styled.span`
  ${getStyles()} ${props => props.styled};
`

const Strong = styled.strong`
  ${getStyles()} ${props => props.styled};
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
    element: PropTypes.oneOf([
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
    const element = {
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

    const Component = element[this.props.element] || element['p']
    return (
      <ThemeConsumer>
        {theme => <Component theme={theme} {...this.props} />}
      </ThemeConsumer>
    )
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

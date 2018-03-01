'use strict';

import { PureComponent } from 'react';
import styled from 'styled-components';
import { getThemeProp } from './utils';

function getTextConText(style, props) {
  return getThemeProp({
    theme: 'text',
    prop: 'size',
    props,
    style
  });
}

function getTextSize(style, props) {
  return getThemeProp({
    theme: 'text',
    prop: 'b',
    props,
    style
  });
}

const Link = styled.a`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Abbr = styled.abbr`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Code = styled.code`
color: getTextConText('color', props);
font-size: ${props => props.size || props.theme.text.fontSize}
font-weight: ${props => (props.bold && props.theme.text.bold) || null};
${props => props.styledText};
`;

const Del = styled.del`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Dfn = styled.dfn`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Em = styled.em`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const H1 = styled.h1`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;
const H2 = styled.h2`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const H3 = styled.h3`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const H4 = styled.h4`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const H5 = styled.h5`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const H6 = styled.h6`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Hr = styled.hr`
  ${props => props.styledText};
`;

const Ins = styled.ins`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Q = styled.q`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Mark = styled.mark`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const P = styled.p`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Small = styled.small`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Span = styled.span`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

const Strong = styled.Strong`
  color: getTextConText('color', props);
  font-size: ${props => props.size || props.theme.text.fontSize}
  font-weight: ${props => (props.bold && props.theme.text.bold) || null};
  ${props => props.styledText};
`;

export class Text extends PureComponent {
  render() {
    const { children, href, title } = this.props;

    // Elements
    const type = {
      a: (
        <Link href={props.href} {...this.props}>
          {children}
        </Link>
      ),

      abbr: <Abbr {...this.props}>{children}</Abbr>,

      code: <Code {...this.props}>{children}</Code>,

      del: <Del {...this.props}>{children}</Del>,

      dfn: (
        <Dfn {...this.props} title={props.title}>
          {children}
        </Dfn>
      ),

      em: <Em {...this.props}>{children}</Em>,

      h1: <H1 {...this.props}>{children}</H1>,

      h2: <H2 {...this.props}>{children}</H2>,

      h3: <H3 {...this.props}>{children}</H3>,

      h4: <H4 {...this.props}>{children}</H4>,

      h5: <H5 {...this.props}>{children}</H5>,

      h6: <H6 {...this.props}>{children}</H6>,

      hr: <Hr {...this.props} />,

      ins: <Ins {...this.props}>{children}</Ins>,

      mark: <Mark {...this.props}>{children}</Mark>,

      q: <Q {...this.props}>{children}</Q>,

      p: <P {...this.props}>{children}</P>,

      small: <Small {...this.props}>{children}</Small>,

      span: <Span {...this.props}>{children}</Span>,

      strong: <Strong {...this.props}>{children}</Strong>
    };

    // Return Component
    return type[props.type] || type['p'];
  }
}

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

// Text.propTypes = {
//   bold: React.PropTypes.bool,
//   className: React.PropTypes.string,
//   classes: React.PropTypes.array,
//   context: React.PropTypes.oneOf(['muted', 'primary', 'success', 'warning', 'danger', 'contrast']),
//   heading: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
//   href: React.PropTypes.string,
//   kitid: React.PropTypes.string,
//   size: React.PropTypes.oneOf(['small', 'large']),
//   type: React.PropTypes.oneOf([
//     'a',
//     'abbr',
//     'code',
//     'del',
//     'dfn',
//     'em',
//     'h1',
//     'h2',
//     'h3',
//     'h4',
//     'h5',
//     'h6',
//     'hr',
//     'ins',
//     'mark',
//     'q',
//     'p',
//     'small',
//     'span',
//     'strong'
//   ])
// };

//   }
// }

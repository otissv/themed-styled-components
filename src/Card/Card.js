import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../Theme/index'

const CardStyled = styled.div`
  ${styles('card')};
  ${styles('card.collapse', 'collapse', true)};
  ${styles('card', 'context')};
  ${styles('card', 'size')};
  ${sharedStyles('card')};

  ${props => props.styled};
`

class Card extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    children: PropTypes.func.isRequired,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning',
      'ghost'
    ]),
    collapse: PropTypes.bool,
    stretch: PropTypes.bool,
    theme: PropTypes.object
  }

  render() {
    const { children, cardFooter, cardHeaderProps, cardBodyProps } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme
          return (
            <CardStyled theme={_theme} {...this.props}>
              {children({
                theme: _theme,
                cardBodyProps: { theme: _theme, ...cardBodyProps },
                cardFooter: { theme: _theme, ...cardFooter },
                cardHeaderProps: { theme: _theme, ...cardHeaderProps }
              })}
            </CardStyled>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const card = styled(Card)

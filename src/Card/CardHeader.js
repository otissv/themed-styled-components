import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

const CardHeaderStyled = styled.div`
  ${styles('card.header')};
  ${styles('card.footer.collapse', 'collapse', true)};
  ${styles('card.header', 'context')};
  ${styles('card.header', 'size')};
  ${sharedStyles('card.header')};
  ${props => props.styled};
`

class CardHeader extends Component {
  static propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.any.isRequired,
    collapse: PropTypes.bool,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning'
    ]),
    pos: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['small', 'large']),
    theme: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <CardHeaderStyled theme={theme} {...this.props}>
            {children}
          </CardHeaderStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const cardHeader = styled(CardHeader)

import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

const CardFooterStyled = styled.div`
  ${styles('card.footer')};
  ${styles('card.footer.collapse', 'collapse', true)};
  ${styles('card.footer', 'context')};
  ${styles('card.footer', 'size')};
  ${sharedStyles('card.footer')};
  ${props => props.styled};
`

class CardFooter extends Component {
  static propTypes = {
    backgroundImage: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    children: PropTypes.any.isRequired,
    collapse: PropTypes.bool,
    context: PropTypes.oneOf([
      'accent',
      'danger',
      'primary',
      'success',
      'warning'
    ]),
    theme: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <CardFooterStyled theme={theme} {...this.props}>
            {children}
          </CardFooterStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const cardFooter = styled(CardFooter)

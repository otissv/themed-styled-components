import React, { Component } from 'react'
import { sharedStyles, styles } from '../utils/theme.util'

import PropTypes from 'prop-types'
import { ThemeConsumer } from '../ThemeContext'
import styled from 'styled-components'

const CardBodyStyled = styled.div`
  ${styles('card.body')};
  ${styles('card.footer.collapse', 'collapse', true)};
  ${styles('card.body', 'context')};
  ${styles('card.body', 'size')};
  ${sharedStyles('card.body')};
  ${props => props.styled};
`

class CardBody extends Component {
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
    size: PropTypes.oneOf(['small', 'large']),
    theme: PropTypes.object
  }

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <CardBodyStyled theme={theme} {...this.props}>
            {children}
          </CardBodyStyled>
        )}
      </ThemeConsumer>
    )
  }
}

export const cardBody = styled(CardBody)

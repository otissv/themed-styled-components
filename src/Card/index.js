import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'

const CardStyled = styled.div`
  ${styles('card')};
  ${styles('card.collapse', 'collapse', true)};
  ${styles('card', 'context')};
  ${styles('card', 'size')};
  ${sharedStyles('card')};

  ${props => props.styled};
`

const CardHeaderStyled = styled.div`
  ${styles('card.header')};
  ${styles('card.footer.collapse', 'collapse', true)};
  ${styles('card.header', 'context')};
  ${styles('card.header', 'size')};
  ${sharedStyles('card.header')};
  ${props => props.styled};
`
const CardBodyStyled = styled.div`
  ${styles('card.body')};
  ${styles('card.footer.collapse', 'collapse', true)};
  ${styles('card.body', 'context')};
  ${styles('card.body', 'size')};
  ${sharedStyles('card.body')};
  ${props => props.styled};
`

const CardFooterStyled = styled.div`
  ${styles('card.footer')};
  ${styles('card.footer.collapse', 'collapse', true)};
  ${styles('card.footer', 'context')};
  ${styles('card.footer', 'size')};
  ${sharedStyles('card.footer')};
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

    return <CardHeaderStyled {...this.props}>{children}</CardHeaderStyled>
  }
}

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
    theme: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    return <CardBodyStyled {...this.props}>{children}</CardBodyStyled>
  }
}

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

    return <CardFooterStyled {...this.props}>{children}</CardFooterStyled>
  }
}

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
    theme: PropTypes.object.isRequired
  }

  render() {
    const {
      children,
      theme,
      cardFooter,
      cardHeaderProps,
      cardBodyProps
    } = this.props

    return (
      <CardStyled {...this.props}>
        {children({
          theme,
          cardBodyProps: { theme, ...cardBodyProps },
          cardFooter: { theme, ...cardFooter },
          cardHeaderProps: { theme, ...cardHeaderProps }
        })}
      </CardStyled>
    )
  }
}

export const card = styled(Card)
export const cardHeader = styled(CardHeader)
export const cardBody = styled(CardBody)
export const cardFooter = styled(CardFooter)

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/fp/kebabCase'
import { stateStyled } from '../utils/stateStyled.util'
import { getThemedValue } from '../utils/getThemedValue.util'
import { makeStyles } from '../utils/makeStyles.util'

const CardStyled = styled.div`
  ${props => {
    const THEME = 'card'
    const theme = props.theme[THEME]
    return makeStyles(theme, key => {
      switch (key) {
        case 'backgroundColor':
          return `background-color: ${getThemedValue({
            style: 'backgroundColor',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'border':
          return `border: ${getThemedValue({
            style: 'border',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'color':
          return `color: ${getThemedValue({
            style: 'color',
            props,
            key: 'context',
            theme: THEME
          })};`
        case 'padding':
          return `padding: ${props.collapse ? 0 : getThemedValue({
                  style: 'padding',
                  props,
                  key: 'size',
                  theme: THEME
                })}`
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
          return `${kebabCase(key)}: ${theme[key]};`
      }
    })
  }};

  ${props => props.styled};
`

const CardHeaderStyled = styled.div`
  ${props => {
    const theme = props.theme.card && props.theme.card.header

    if (theme) {
      return makeStyles(theme, key => {
        switch (key) {
          case 'padding':
            return `padding: ${props.collapse ? 0 : getThemedValue({
                    style: 'padding',
                    props,
                    key: 'size',
                    theme: 'card.header'
                  })}`
          default:
            return `${
              key[0] === '-' ? '-' : ''
            }${kebabCase(key)}: ${theme[key]};`
        }
      })
    }
  }}};
  ${props => props.styled};
`

export class CardHeader extends PureComponent {
  static propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.any.isRequired,
    collapse: PropTypes.bool,
    pos: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['small', 'large']),
    theme: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    return <CardHeaderStyled {...this.props}>{children}</CardHeaderStyled>
  }
}

const CardBodyStyled = styled.div`
  ${props => {
    const theme = props.theme.card && props.theme.card.body
    if (theme) {
      return makeStyles(theme, key => {
        switch (key) {
          case 'padding':
            return `padding: ${props.collapse ? 0 : getThemedValue({
                    style: 'padding',
                    props,
                    key: 'size',
                    theme: 'card.header'
                  })}`
          default:
            return `${
              key[0] === '-' ? '-' : ''
            }${kebabCase(key)}: ${theme[key]};`
        }
      })
    }
  }}};
  ${props => props.styled};
`

export class CardBody extends PureComponent {
  static propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.any.isRequired,
    collapse: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large']),
    theme: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    return <CardBodyStyled {...this.props}>{children}</CardBodyStyled>
  }
}

const CardFooterStyled = styled.div`
  ${props => {
    const theme = props.theme.card && props.theme.card.footer
    if (theme) {
      return makeStyles(theme, key => {
        switch (key) {
          case 'padding':
            return `padding: ${props.collapse ? 0 : getThemedValue({
                    style: 'padding',
                    props,
                    key: 'size',
                    theme: 'card.header'
                  })}`
          default:
            return `${
              key[0] === '-' ? '-' : ''
            }${kebabCase(key)}: ${theme[key]};`
        }
      })
    }
  }}};
  ${props => props.styled};
`

export class CardFooter extends PureComponent {
  static propTypes = {
    backgroundImage: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    children: PropTypes.any.isRequired,
    collapse: PropTypes.bool,
    theme: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props

    return <CardFooterStyled {...this.props}>{children}</CardFooterStyled>
  }
}

export class Card extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['small', 'large']),
    children: PropTypes.func.isRequired,
    context: PropTypes.oneOf([
      'accent',
      'primary',
      'secondary',
      'danger',
      'ghost'
    ]),
    collapse: PropTypes.bool,
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

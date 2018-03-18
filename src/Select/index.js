import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

const SelectStyled = styled.div`
  ${styles('select')};
  ${sharedStyles('select')};
  ${props => props.styled};
`

const SelectContext = React.createContext({ value: '' })

class Select extends Component {
  static propTypes = {
    active: PropTypes.string,
    autocomplete: PropTypes.bool,
    children: PropTypes.func,
    multselect: PropTypes.bool,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onToggle: PropTypes.func,
    options: PropTypes.array,
    theme: PropTypes.object
  }

  static defaultProps = {
    active: '',
    autocomplete: false,
    multselect: false,
    opened: false,
    options: []
  }

  constructor(props) {
    super(props)
    this.state = {
      opened: props.opened,
      active: props.active,
      options: props.options
    }
  }

  componentDidMount() {
    if (this.props.children) {
      const children = this.props.children().props.children[1].props.children

      const options = children.map(child => ({
        value: child.props['value'],
        label: child.props['label']
      }))

      this.setState({ options })
    }
  }

  onToggle = event => {
    this.setState({ opened: !this.state.opened })
  }

  onChange = event => {
    // filter options

    if (this.props.autocomplete) {
      this.setState({ active: event.target.value })
    }
  }

  onSelect = event => {
    if (!this.props.multselect) {
      this.setState({ active: event.target.dataset.value, opened: false })
    }
  }

  getActiveOption = () => {
    const { active, options } = this.state
    return val => {
      const option = options.filter(o => o.value === active)[0]

      return option ? (val ? option[val] : option) : ''
    }
  }

  render() {
    const {
      autocomplete,
      children,
      multselect,
      onToggle,
      onChange,
      onSelect
    } = this.props

    return (
      <ThemeConsumer>
        {theme => {
          const _theme = this.props.theme || theme
          const context = {
            ...this.state,
            autocomplete,
            getActiveOption: this.getActiveOption(),
            multselect,
            onToggle: onToggle || this.onToggle,
            onChange: onChange || this.onChange,
            onSelect: onSelect || this.onSelect
          }
          return (
            <SelectContext.Provider value={context}>
              <SelectStyled theme={_theme} className="Select" {...this.props}>
                {children({ theme: _theme, ...context })}
              </SelectStyled>
            </SelectContext.Provider>
          )
        }}
      </ThemeConsumer>
    )
  }
}

export const select = styled(Select)
export const SelectConsumer = SelectContext.Consumer

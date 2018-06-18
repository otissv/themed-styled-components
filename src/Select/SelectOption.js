import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../Theme'
import { SelectConsumer } from './index'

const SelectOptionStyled = styled.div`
  ${styles('select.option')};
  ${sharedStyles('select.option')};
  ${props => props.styled};
`

class SelectOption extends Component {
  static propTypes = {
    children: PropTypes.any,
    getActiveOption: PropTypes.func,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    options: PropTypes.array,
    theme: PropTypes.object,
    value: PropTypes.string.isRequired
  }

  static defaultProps = {
    options: []
  }

  render() {
    const { children, value } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <SelectConsumer>
            {({ options, onSelect }) => (
              <SelectOptionStyled
                theme={theme}
                className="SelectOption"
                onClick={onSelect}
                data-value={value}
                {...this.props}
              />
            )}
          </SelectConsumer>
        )}
      </ThemeConsumer>
    )
  }
}

export const selectOption = styled(SelectOption)

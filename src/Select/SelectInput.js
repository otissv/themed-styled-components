import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'
import { SelectConsumer } from './index'
import { input } from '../Input'

const Input = input``
const SelectInputStyled = styled(Input)`
  ${styles('select.input')};
  ${sharedStyles('select.input')};
  ${props => props.styled};
`

class SelectInput extends Component {
  static propTypes = {
    active: PropTypes.string,
    children: PropTypes.func,
    onChange: PropTypes.func,
    onToggle: PropTypes.func,
    options: PropTypes.array,
    theme: PropTypes.object
  }

  static defaultProps = {
    active: '',
    options: [],
    readOnly: true
  }
  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <SelectConsumer>
            {({
              active,
              getActiveOption,
              onChange,
              onToggle,
              options,
              readOnly
            }) => {
              return (
                <SelectInputStyled
                  className="SelectInput"
                  icon="caret-down"
                  onChange={onChange}
                  onClick={onToggle}
                  pos="right"
                  readOnly={readOnly}
                  theme={theme}
                  value={getActiveOption('label')}
                  {...this.props}
                />
              )
            }}
          </SelectConsumer>
        )}
      </ThemeConsumer>
    )
  }
}

export const selectInput = styled(SelectInput)

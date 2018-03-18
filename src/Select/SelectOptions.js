import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { SelectConsumer } from './index'
import { ThemeConsumer } from '../ThemeContext'

const SelectOptionsStyled = styled.div`
  ${styles('select.options')};
  ${sharedStyles('select.options')};
  ${props => props.styled};
`

class SelectOptions extends Component {
  static propTypes = {
    children: PropTypes.array,
    opened: PropTypes.bool.isRequired,
    theme: PropTypes.object
  }

  static defaultProps = {
    opened: false
  }

  render() {
    const { children } = this.props

    return (
      <ThemeConsumer>
        {theme => (
          <SelectConsumer>
            {({ opened }) => (
              <SelectOptionsStyled
                theme={theme}
                className="SelectOptions"
                styled={
                  this.props.opened || opened
                    ? 'display: block;'
                    : 'display: none;'
                }
                {...this.props}
              />
            )}
          </SelectConsumer>
        )}
      </ThemeConsumer>
    )
  }
}

export const selectOptions = styled(SelectOptions)

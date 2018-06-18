import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../Theme'

const TextareaStyled = styled.textarea`
  ${styles('textarea')};
  ${styles('textarea', 'context')};
  ${styles('textarea.widths', 'widths')};
  ${styles('textarea.disabled', 'disabled', true)};
  ${sharedStyles('textarea')};
  ${props => props.styled}
}
`

function maybeModifier(initial) {
  return value => Boolean(initial && initial === value)
}

class Textarea extends Component {
  static propTypes = {
    active: PropTypes.bool,
    context: PropTypes.string,
    widths: PropTypes.string,
    disabled: PropTypes.func,
    elementRef: PropTypes.func,
    theme: PropTypes.object
  }

  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <TextareaStyled
            innerRef={this.props.elementRef}
            className="Textarea"
            theme={theme}
            {...this.props}
          />
        )}
      </ThemeConsumer>
    )
  }
}

export const textarea = styled(Textarea)

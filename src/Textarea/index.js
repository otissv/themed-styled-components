import React, { Component } from 'react'
import styled from 'styled-components'
import { styles, sharedStyles } from '../utils/theme.util'
import { ThemeConsumer } from '../ThemeContext'

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
  render() {
    return (
      <ThemeConsumer>
        {theme => (
          <TextareaStyled className="Textarea" theme={theme} {...this.props} />
        )}
      </ThemeConsumer>
    )
  }
}

export const textarea = styled(Textarea)

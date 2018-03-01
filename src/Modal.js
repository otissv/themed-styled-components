import React, { PureComponent } from 'react'
import autobind from 'class-autobind'
import styled from 'styled-components'
import { Button } from './Button'
import { Close } from './Close'

const Modal = styled.div`
  display: ${props => (props.opened ? props.theme.modal.display : 'none')};
  position: ${props => props.theme.modal.position};
  top: ${props => props.theme.modal.top};
  bottom: ${props => props.theme.modal.bottom};
  left: ${props => props.theme.modal.left};
  right: ${props => props.theme.modal.right};
  z-index: ${props => props.theme.modal.zIndex};
  background: ${props => props.theme.modal.background};
  overflow: ${props => props.theme.modal.overflow};
`

const Dialog = styled.div`
  background: ${props => props.theme.modal.dialog.background};
  max-width: ${props =>
    props.full
      ? props.theme.modal.dialog.maxWidthFull
      : props.theme.modal.dialog.maxWidth};
  margin: ${props =>
    props.full
      ? props.theme.modal.dialog.marginFull
      : props.theme.modal.dialog.margin};
  border: ${props => props.theme.modal.dialog.border};
  transition: ${props => props.theme.modal.dialog.transition};
  opacity: ${props => props.theme.modal.dialog.opacity};
  transform: ${props => props.theme.modal.dialog.transform};
  overflow: ${props => props.theme.modal.dialog.overflow};
  height: ${props =>
    props.full
      ? props.theme.modal.dialog.heightFull
      : props.theme.modal.dialog.height};

  &.opened {
    opacity: ${props => props.theme.modal.dialog.opened.opacity};
    transform: ${props => props.theme.modal.dialog.opened.transform};
  }
`

const DialogHeader = styled.div`
  padding: ${props => props.theme.modal.dialog.header.padding};
  border-bottom: ${props => props.theme.modal.dialog.header.borderBottom};
`

const DialogTitle = styled.h5`
  font-weight: ${props => props.theme.modal.dialog.title.fontWeight};
  font-size: ${props => props.theme.modal.dialog.title.fontSize};
  margin: ${props => props.theme.modal.dialog.title.margin};
  display: ${props => props.theme.modal.dialog.title.display};
`

const DialogBody = styled.div`
  padding: ${props => props.theme.modal.dialog.body.padding};
  overflow: ${props => props.theme.modal.dialog.body.overflow};
`

const DialogCancel = props => {
  const { body, onClose } = props
  return body ? (
    <Button className="Modal-cancel" onClick={onClose}>
      {body}
    </Button>
  ) : null
}

const DialogSubmit = props => {
  const { body, onSubmit, type } = props
  return body ? (
    <Button className="Modal-submit" type={type} primary onSubmit={onSubmit}>
      {body}
    </Button>
  ) : null
}

export class InputModal extends PureComponent {
  constructor(props) {
    super(...arguments)
    autobind(this)
  }

  handleOnClickCancel(event) {
    this.props.setVisibility(false)
  }

  handelOnModalClick(event) {
    const { modalClickClose, setVisibility } = this.props
    const isModal = event.target.id && event.target.id.split('-')[0] === 'modal'

    if (modalClickClose && isModal) {
      setVisibility(false)
    }
  }

  render() {
    const { cancel, children, full, header, id, opened, submit } = this.props

    return (
      <Modal
        className="Modal"
        opened={opened}
        id={`modal-${id}`}
        onClick={this.handelOnModalClick}
      >
        <Dialog
          className={opened ? 'Model-dialog opened' : 'Model-dialog'}
          id={`dialog-${id}`}
          full={full}
        >
          <DialogHeader className="Modal-header">
            <DialogTitle className="Modal-title">{header}</DialogTitle>
            <Close
              className="Modal-close"
              onClick={this.handleOnClickCancel}
              hover={true}
            />
          </DialogHeader>

          <DialogBody className="Modal-body">{children}</DialogBody>
        </Dialog>
      </Modal>
    )
  }
}

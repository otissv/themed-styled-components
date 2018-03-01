import React, { PureComponent } from 'react'
import autobind from 'class-autobind'
import styled from 'styled-components'
import dotIcon from './icons/iconsdot-single.svg'
import closeIcon from './icons/iconscross.svg'
import Isvg from 'react-inlinesvg'

const Close = styled.button`
  background: ${props => props.theme.tabs.item.background};
  border: ${props => props.theme.tabs.item.border};
  height: ${props => props.theme.tabs.item.height};
  outline: ${props => props.theme.tabs.item.outline};
  padding: ${props => props.theme.tabs.item.padding};
  position: ${props => props.theme.tabs.item.position};
  transform: ${props => props.theme.tabs.item.transform};
  width: ${props => props.theme.tabs.item.width};
  right: ${props => props.theme.tabs.item.right};
`

const Svg = styled(Isvg)`
  fill: ${props => props.theme.tabs.item.svg.fill};
  height: ${props => props.theme.tabs.item.svg.height};
  width: ${props => props.theme.tabs.item.svg.width};
  display: ${props => props.theme.tabs.item.svg.display};

  ${props => props.styledIcon};
`

class CloseTab extends PureComponent {
  render() {
    const { onClick, src } = this.props
    return (
      <Close onClick={onClick}>
        <Svg {...this.props} src={src} />
      </Close>
    )
  }
}

const TabItemStyled = styled.li`
  display: inline-block;
  position: relative;

  ${props => props.styledTabItem};
`

export class TabItem extends PureComponent {
  constructor(props) {
    super(props)
    autobind(this)

    this.state = {
      hover: false
    }
  }

  handleOnMouseEnter(event) {
    this.setState({ hover: true })
  }

  handleOnMouseLeave(event) {
    this.setState({ hover: false })
  }

  handleOnCloseClick() {
    const { kitid, handleOnCloseClick } = this.props
    handleOnCloseClick(kitid)
  }

  getIcon() {
    const { active, dirty, kitid } = this.props
    const hover = this.state.hover
    let icon = null

    if (dirty && hover) {
      icon = closeIcon
    } else if (dirty) {
      icon = dotIcon
    } else if (active || hover) {
      icon = closeIcon
    }

    return icon && kitid !== 'history' ? (
      <CloseTab src={icon} onClick={this.handleOnCloseClick} />
    ) : null
  }

  render() {
    const { children } = this.props

    return (
      <TabItemStyled
        className="Tab-item"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        {children}
        {this.getIcon()}
      </TabItemStyled>
    )
  }
}

import React, { PureComponent } from 'react'
import autobind from 'class-autobind'
import styled from 'styled-components'
import { SidebarButton } from './SidebarButton'
import { Svg } from '../Svg'

const Container = styled.div`
  background: ${props => props.theme.sidebar.background};
  margin-right: ${props => props.theme.sidebar.marginRight};
  width: ${props => props.theme.sidebar.width};
  padding-top: ${props => props.theme.sidebar.paddingTop};

  ${props => props.styledSidebar};
`

const Content = styled.div`
  display: flex;
  overflow-y: ${props => props.theme.sidebar.content.overflowY};
  height: ${props => props.theme.sidebar.content.height};
  padding-top: ${props => props.theme.sidebar.content.paddingTop};
  padding-right: ${props => props.theme.sidebar.content.paddingRight};
  padding-bottom: ${props => props.theme.sidebar.content.paddingBottom};
  padding-left: ${props => props.theme.sidebar.content.paddingLeft};

  ${props => props.styledSidebarContent};
`

const SidebarButtons = styled.div`
  position: ${props => props.theme.sidebar.buttons.position};
  z-index: ${props => props.theme.sidebar.buttons.zIndex};
  display: ${props => props.theme.sidebar.buttons.display};
`

export class Sidebar extends PureComponent {
  constructor(props) {
    super(props)
    autobind(this)
  }

  handleOnSidebarButtonClick(event) {
    const { buttonLeft, buttonRight } = this.props
    const kitid =
      event.target.dataset.kitid || event.currentTarget.dataset.kitid

    kitid === 'left' ? buttonLeft.onClick(kitid) : buttonRight.onClick(kitid)
  }

  render() {
    const {
      active,
      buttonLeft,
      buttonRight,
      styledSidebar,
      styledSidebarButtonLeft,
      styledSidebarButtonRight,
      styledSidebarContent
    } = this.props

    return (
      <Container className="Sidebar-container" styledSidebar={styledSidebar}>
        <SidebarButtons className="Sidebar-buttons-container">
          {buttonLeft ? (
            <SidebarButton
              styledSidebarButtonLeft={styledSidebarButtonLeft}
              className="Sidebar-button"
              title={buttonLeft.title}
              data-kitid="left"
              onClick={this.handleOnSidebarButtonClick}
              active={active === 'left'}
            >
              <Svg src={buttonLeft.icon} />
            </SidebarButton>
          ) : null}

          {buttonRight ? (
            <SidebarButton
              styledSidebarButtonRight={styledSidebarButtonRight}
              className="Sidebar-button"
              title={buttonRight.title}
              data-kitid="right"
              onClick={this.handleOnSidebarButtonClick}
              active={active === 'right'}
            >
              <Svg src={buttonRight.icon} />
            </SidebarButton>
          ) : null}
        </SidebarButtons>

        <Content
          className="Sidebar-content"
          styledSidebarContent={styledSidebarContent}
        >
          {(active === 'left' && buttonLeft && buttonLeft.component) ||
            (active === 'right' && buttonRight && buttonRight.component)}
          {this.props.children}
        </Content>
      </Container>
    )
  }
}

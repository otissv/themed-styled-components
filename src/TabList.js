import React, { PureComponent } from 'react';
import autobind from 'class-autobind';
import styled from 'styled-components';

const Container = styled.div`
  height: ${props => props.theme.tabs.list.container.height};
  position: ${props => props.theme.tabs.list.container.position};
`;

const TabListStyled = styled.ul`
  list-style: ${props => props.theme.tabs.list.listStyle};
  padding: ${props => props.theme.tabs.list.padding};
  margin: ${props => props.theme.tabs.list.margin};
  overflow-x: ${props => props.theme.tabs.list.overflowX};
  overflow-y: ${props => props.theme.tabs.list.overflowY};
  white-space: ${props => props.theme.tabs.list.whiteSpace};
  position: ${props => props.theme.tabs.list.position};
  right: ${props => props.theme.tabs.list.right};
  left: ${props => props.theme.tabs.list.left};

  &::-webkit-scrollbar {
    width: ${props => props.theme.tabs.list.scrollbar.width};
    height: ${props => props.theme.tabs.list.scrollbar.height};
  }

  ${props => props.styledTabList};
`;

export class TabList extends PureComponent {
  constructor(props) {
    super(...arguments);
    autobind(this);
  }

  handelOnWheel(event) {
    event.preventDefault();
    const tabList = event.currentTarget;
    tabList.scrollLeft -=
      event.nativeEvent.wheelDelta || -event.nativeEvent.detail;
  }

  render() {
    return (
      <Container className="Tab-list-container">
        <TabListStyled
          className="Tab-list"
          {...this.props}
          onWheel={this.handelOnWheel}
        />
      </Container>
    );
  }
}

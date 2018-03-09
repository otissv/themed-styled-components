import React, { Component } from 'react';
import styled from 'styled-components';

const TabPanelStyled = styled.div`
  display: ${props => props.theme.tabs.panel.display};
  flex: ${props => props.theme.tabs.panel.flex};
  ${props => props.styledTabPanel};
`;

export class TabPanel extends Component {
  render() {
    const { styledTabPanel, component } = this.props.item;
    const Component = component && component.element;
    const componentProps = (component && component.props) || {};

    return (
      <TabPanelStyled className="Tab-panel" styledTabPanel={styledTabPanel}>
        {Component ? <Component {...componentProps} /> : <div />}
      </TabPanelStyled>
    );
  }
}

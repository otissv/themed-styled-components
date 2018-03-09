import React, { Component } from 'react';
import autobind from 'class-autobind';
import styled from 'styled-components';

const Content = styled.div`
  color: ${props => props.theme.accordion.content.color};
  cursor: ${props => props.theme.accordion.content.cursor};
  float: ${props => props.theme.accordion.content.float};
  font-size: ${props => props.theme.accordion.content.fontSize};
  font-weight: ${props => props.theme.accordion.content.fontWeight};
  height: ${props => props.theme.accordion.content.height};
  letter-spacing: ${props => props.theme.accordion.content.letterSpacing};
  line-height: ${props => props.theme.accordion.content.lineHeight};
  margin-top: ${props => props.theme.accordion.content.marginTop};
  outline: ${props => props.theme.accordion.content.outline};
  padding: ${props => props.theme.accordion.content.padding};

  &:hover {
    background: ${props => props.theme.accordion.content.hover};
    border: ${props => props.theme.accordion.content.hover};
    color: ${props => props.theme.accordion.content.hover};
  }
`;

const AccordionButtonStyled = styled.button`
  background: ${props => props.theme.accordion.button.background};
  border: ${props => props.theme.accordion.button.border};
  color: ${props => props.theme.accordion.button.color};
  letter-spacing: ${props => props.theme.accordion.button.letterSpacing};
  line-height: ${props => props.theme.accordion.button.lineHeight};
  outline: ${props => props.theme.accordion.button.outline};
  padding-top: ${props => props.theme.accordion.button.paddingTop};
  padding-left: ${props => props.theme.accordion.button.paddingLeft};
  padding-bottom: ${props => props.theme.accordion.button.paddingBottom};
  padding-right: ${props => props.theme.accordion.button.paddingRight};
  position: r${props => props.theme.accordion.button.position};
  text-align: ${props => props.theme.accordion.button}.textAlign;
  width: ${props => props.theme.accordion.button.width};
  cursor: ${props => props.theme.accordion.button.cursor};

  &:hover {
    background: ${props =>
      props.hover
        ? props.theme.colors.secondary
        : props.theme.colors.background};
  }

  ${props => props.styledAccordionButton};
`;

const Indicator = styled.span`
  display: ${props => props.theme.accordion.button.indicator.display};
  font-size: ${props => props.theme.accordion.button.indicator.fontSize};
  width: ${props => props.theme.accordion.button.indicator.width};
`;

export class AccordionButton extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      hover: false
    };
  }

  handleOnMouseOver(event) {
    this.setState({ hover: true });
  }

  handleOnMouseLeave(event) {
    this.setState({ hover: false });
  }

  render() {
    const { children, kitid, onClick, opened } = this.props;
    return (
      <AccordionButtonStyled
        className="Accordion-button"
        {...this.props}
        data-kitid={kitid}
        hover={this.state.hover}
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
        onClick={onClick}
      >
        {opened ? <Indicator>-</Indicator> : <Indicator>+</Indicator>}
        {children}
        {this.state.hover ? (
          <Content onClick={onClick} title="Collection Details">
            ...
          </Content>
        ) : null}
      </AccordionButtonStyled>
    );
  }
}

import styled from 'styled-components';

const SidebarButton = styled.button`
  flex: ${props => props.theme.sidebar.button.flex};
  height: ${props => props.theme.sidebar.button.height};
  border: ${props => props.theme.sidebar.button.border};
  outline: ${props => props.theme.sidebar.button.outline};
  transition: ${props => props.theme.sidebar.button.transition};
  cursor: ${props => props.theme.sidebar.button.cursor};
  background: ${props =>
    props.active
      ? props.theme.sidebar.button.active.background
      : props.theme.sidebar.button.background};
  color: ${props => props.theme.sidebar.button.color};
  transition: ${props => props.theme.sidebar.button.transition};

  &:hover {
    background: ${props => props.theme.sidebar.button.hover.background};
  }
`;

exportSidebarButton;

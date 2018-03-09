import { Component } from 'react';
import styled from 'styled-components';

export const Td = styled.td`
  padding: ${props => (props.small ? '10px 12px' : '16px 12px')};
  vertical-align: ${props => (props.middle ? 'middle' : 'top')};

  ${props =>
    props.justify
      ? `&:first-child {
    padding-left: 0;
    }`
      : ''}
} }

  ${props => props.styledTd};
`;

export default function TableData({ item, index, kitid, props }) {
  return item.map((val, index) => (
    <Td {...props} key={index} data-kitid={`tabledata-[${index}, ${index}]-${kitid}`}>
      {val[1]}
    </Td>
  ));
}

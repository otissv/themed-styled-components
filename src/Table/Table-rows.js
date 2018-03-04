import React from 'react'
import styled from 'styled-components'
import { TableData } from './Table-data'
import sortIt from 'sort-it'
import { Td } from './Table-data'

export const Tr = styled.tr`
  border-top: ${props => (props.divider ? '1px solid #e5e5e5' : null)};
  border-bottom: ${props => (props.divider ? '1px solid #e5e5e5' : null)};
  transition: background-color 0.1s linear;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-bottom: 20px;

  &:nth-of-type(odd) {
    background: ${props => (props.striped ? '#f8f8f8' : null)};
  }

  ${props => props.styledTr};
`

// Convert object to array with index column position
function bodyToArray(body, columns) {
  return body.map(item => {
    return Object.keys(item).map(k => {
      const pos = columns
        .map(i => {
          return i.toLowerCase()
        })
        .indexOf(k.toLowerCase())

      return [k, item[k], pos]
    })
  })
}

// Sorts a collection of data
const sort = (data, criteria) => {
  if (!criteria) return data
  return sortIt(data, criteria)
}

const numbered = index => <Td>{index + 1}</Td>

export function TableRows(props, columns) {
  return bodyToArray(sort(props.body, props.sort), columns).map(
    (item, index) => {
      return (
        <Tr
          {...props}
          key={index}
          data-kitid={`tablerow-${index}-${props.kitid}`}
        >
          {props.numbered ? numbered(index) : null}
          {TableData({
            props,
            columns,
            item,
            index,
            kitid: props.kitid
          })}
        </Tr>
      )
    }
  )
}

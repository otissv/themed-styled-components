import { PureComponent } from 'react'
import styled from 'styled-components'
import { keysToUniqueList } from './keysToUniqueList'

const Thead = styled.thead`
  ${props => props.styledThead};
`

const Tr = styled.tr`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-bottom: 20px;
  ${props => props.styledThTr};
`

const Th = styled.th`
  padding: 16px 12px;
  text-align: left;
  vertical-align: bottom;
  font-size: 12px;
  font-weight: normal;
  color: #999;
  text-transform: uppercase;

  border-collapse: collapse;
  border-spacing: 0;

  margin-bottom: 20px;

  ${props =>
    props.justify
      ? `&:first-child {
    padding-left: 0;
    }`
      : ''};

  ${props => props.styledTh};
`

// Generate headings from head prop
function headFromProp(list) {
  return list.map((item, index) => <Th key={index}>{item}</Th>)
}

// Generate headings from collection keys
function headFromBodyKeys(list) {
  return keysToUniqueList(list).map((k, i) => <Th key={i}>{k}</Th>)
}

export class TableHead extends PureComponent {
  render() {
    const { body, head, numbered } = this.props
    return (
      <Thead>
        <Tr>
          {numbered ? <Th>{numbered}</Th> : null}
          {head === '*' ? headFromBodyKeys(body) : headFromProp(head)}
        </Tr>
      </Thead>
    )
  }
}

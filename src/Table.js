import { PureComponent } from 'react'
import styled from 'styled-components'
import { TableRows } from './Table-rows'
import { TableHead } from './Table-head'
import { keysToUniqueList } from './keysToUniqueList'

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-bottom: 20px;

  ${props => props.styledTable};
`

const Caption = styled.caption`
  font-size: 14px;
  text-align: left;
  color: #999;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-bottom: 20px;
  ${props => props.styledCation};
`

export class TableStyled extends PureComponent {
  render() {
    const { numbered, head, body, caption, children, overflow } = this.props
    const thead = head ? (
      <TableHead numbered={numbered} head={head} body={body} />
    ) : null
    const tbody = body ? (
      <tbody>
        {TableRows(this.props, head === '*' ? keysToUniqueList(body) : head)}
      </tbody>
    ) : null
    const tcaption = caption ? <Caption>{caption}</Caption> : null

    const table = (
      <Table>
        {tcaption}
        {thead}
        {tbody}
        {children}
      </Table>
    )

    return overflow ? <div>{table}</div> : table
  }
}

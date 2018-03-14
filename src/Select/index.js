import { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { Button } from '../Button'
import { Icon } from '../Icon'
import caretDownIcon from '../icons/directional/caret-down.svg'

const SelectContainer = styled.div`
  position: ${props => props.theme.select.position};
  width: ${props => props.theme.select.width};
  max-width: ${props =>
    props.theme.select.widths[props.widths] || props.theme.select.maxWidth};

  ${props => props.styledSelectContainer};
`

const Options = styled.div`
  box-shadow: ${props => props.theme.select.options.boxShadow};
  position: ${props => props.theme.select.options.position};
  width: ${props => props.theme.select.options.width};
  max-height: ${props => props.theme.select.options.maxHeight};
  border: ${props => props.theme.select.options.border};
  border-top: ${props => props.theme.select.options.borderTop};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  width: ${props => props.theme.select.options.width};
  background: ${props => props.theme.select.options.background};
  left: ${props => props.theme.select.options.left};

  ${props => props.styledSelectOptions};
`

const OptionItem = styled(Button)`
  height: ${props => props.theme.select.options.item.height};
  width: ${props => props.theme.select.options.item.width};
  text-align: ${props => props.theme.select.options.item.textAlign};
  padding: ${props => props.theme.select.options.item.padding};
  background: ${props => props.theme.select.options.item.background};
  color: ${props => props.theme.select.options.item.color};
  text-transform: ${props => props.theme.select.options.item.textTransform};

  ${props => props.styledSelectOptionItem};

  &:hover {
    background: ${props => props.theme.select.options.item.hover.background};
    color: ${props => props.theme.select.options.item.hover.color};
  }
`

const OpenIcon = styled.div`
  position: ${props => props.theme.select.icon.position};
  top: ${props => props.theme.select.icon.top};
  padding: ${props => props.theme.select.icon.padding};
  height: ${props => props.theme.select.icon.height};
  right: ${props => props.theme.select.icon.right};
  transition: ${props => props.theme.select.icon.transition};
  width: ${props => props.theme.select.icon.width};

  &:hover {
    background: ${props => props.theme.select.icon.hover.background};
  }

  ${props => props.styledSelectOpenIcon};
`

export class Select extends Component {
  constructor(props) {
    super(...arguments)

    this.state = {
      opened: false
    }
  }

  handleOnOptionItemClick = event => {
    event.preventDefault()
    const { onChange } = this.props

    onChange({ target: event.target })
    this.toggleOpenOptions()
  }

  closeOptions = () => {
    if (this.state.opened) {
      this.setState({ opened: false })
    }
  }

  toggleOpenOptions = () => {
    this.setState({ opened: !this.state.opened })
  }

  optionItems = () => {
    const { name, options, styledSelectOptionItem } = this.props

    return (
      options &&
      options.map(option => (
        <OptionItem
          className="Select-option-item"
          key={option.value}
          value={option.value}
          name={name}
          onClick={this.handleOnOptionItemClick}
          styledSelectOptionItem={styledSelectOptionItem}
        >
          {option.value}
        </OptionItem>
      ))
    )
  }

  render() {
    const {
      name,
      onChange,
      styledSelectContainer,
      styledSelectOpenIcon,
      styledSelectOptions,
      value
    } = this.props

    const options = this.optionItems()
    return (
      <SelectContainer {...this.props} className="Select">
        <Input
          className="Select-input"
          onChange={onChange}
          name={name}
          value={value}
          onClick={this.closeOptions}
        />
        <OpenIcon
          className="Select-open"
          onClick={this.toggleOpenOptions}
          styledSelectOpenIcon={styledSelectOpenIcon}
        >
          <caretDownIcon height="16px" width="16px" />
        </OpenIcon>

        <Options
          className="Select-options"
          open={this.state.opened}
          styledSelectOptions={styledSelectOptions}
        >
          {options}
        </Options>
      </SelectContainer>
    )
  }
}

import React from 'react'

export const recursivelyMapCloneChildren = (children, callback) => {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursivelyMapCloneChildren(child.props.children, callback)
      })
    }

    return callback(child)
  })
}

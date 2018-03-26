import React from 'react'

export const getInitialChildrenProp = ({ children, props, pervious = {} }) => {
  return React.Children.toArray(children).reduce((previousObj, child) => {
    const hasProps = (objs =>
      objs.map(obj => Boolean(child.props) && child.props[obj]))(props).filter(
      p => Boolean(p)
    )[0]

    if (hasProps) {
      return {
        ...previousObj,
        ...props.reduce((prev, prop) => {
          return {
            ...prev,
            [child.props.name]: {
              ...prev[child.props.name],
              [prop]: child.props[prop] || null
            }
          }
        }, {})
      }
    }

    if (child.props && child.props.children) {
      return getInitialChildrenProp({
        children: child.props.children,
        props: props,
        pervious: previousObj
      })
    }

    return previousObj
  }, pervious)
}

import React from 'react'

export const TabContext = React.createContext({ active: '' })
export const TabProvider = TabContext.Provider
export const TabConsumer = TabContext.Consumer

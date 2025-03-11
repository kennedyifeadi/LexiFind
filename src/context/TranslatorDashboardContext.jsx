import React, { createContext, useState } from 'react'
export const TranslatorDashboardContext = createContext()
export const TranslatorDashboardProvider = ({children}) => {
    const [id, setId] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
        <TranslatorDashboardContext.Provider value={{id, setId, isClicked, setIsClicked}}>
          {children}
        </TranslatorDashboardContext.Provider>
    </div>
  )
}
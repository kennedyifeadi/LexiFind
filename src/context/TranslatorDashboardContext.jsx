import React, { createContext, useState } from 'react'
export const TranslatorDashboardContext = createContext()
export const TranslatorDashboardProvider = ({children}) => {
    const [id, setId] = useState(null);
  return (
    <div>
        <TranslatorDashboardContext.Provider value={{id, setId}}>
          {children}
        </TranslatorDashboardContext.Provider>
    </div>
  )
}

// export const useTranslator = useContext(TranslateContext);
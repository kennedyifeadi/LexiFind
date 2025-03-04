import React, { createContext, useState } from 'react'
export const DashboardContext = createContext()
export const DashboardProvider = ({children}) => {
    const [id, setId] = useState(null);
  return (
    <div>
        <DashboardContext.Provider value={{id, setId}}
    >
        {children}
    </DashboardContext.Provider>
    </div>
  )
}

// export const useTranslator = useContext(TranslateContext);
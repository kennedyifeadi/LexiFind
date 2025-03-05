import React, { createContext, useState } from 'react'
export const ThesaurusDashboardContext = createContext()
export const ThesaurusDashboardProvider = ({children}) => {
    const [id, setId] = useState(null);
  return (
    <div>
        <ThesaurusDashboardContext.Provider value={{id, setId}}>
          {children}
        </ThesaurusDashboardContext.Provider>
    </div>
  )
}

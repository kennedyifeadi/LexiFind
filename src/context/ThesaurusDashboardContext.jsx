import React, { createContext, useState } from 'react'
export const ThesaurusDashboardContext = createContext()
export const ThesaurusDashboardProvider = ({children}) => {
    const [id, setId] = useState(null);
    const [thesaurusTitle, setThesaurusTitle] = useState("")

  return (
    <div>
        <ThesaurusDashboardContext.Provider value={{id, setId, thesaurusTitle, setThesaurusTitle}}>
          {children}
        </ThesaurusDashboardContext.Provider>
    </div>
  )
}

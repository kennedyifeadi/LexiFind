import React, { createContext, useState } from 'react'
export const ThesaurusContext = createContext()

export const ThesaurusProvider = ({children}) => {
  const [isThesaurusClicked, setIsThesaurusClicked] = useState(false);
  return (
    <div>
        <ThesaurusContext.Provider value={{isThesaurusClicked, setIsThesaurusClicked}}>
            {children}
        </ThesaurusContext.Provider>
    </div>
  )
}

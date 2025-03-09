import React, { createContext, useState } from 'react'
export const TranslateContext = createContext()
export const TranslateProvider = ({children}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <TranslateContext.Provider value={{isClicked, setIsClicked}}>
        {children}
      </TranslateContext.Provider>
    </div>
  )
}

// export const useTranslator = useContext(TranslateContext);
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext(null)



// eslint-disable-next-line react/prop-types
function GlobalState({children}){
    const [fontSize , setFontSize] = useState(1)
    const [fontWeight , setFontWeight] = useState('font-normal')

    function handleChangeFontWeight(){
        setFontWeight(fontWeight === 'font-normal' ? 'font-bold' : 'font-extrabold')
    }
    

    return <GlobalContext.Provider value={{fontSize , setFontSize , fontWeight , handleChangeFontWeight}}>
            {children}
        </GlobalContext.Provider>
}

export default GlobalState
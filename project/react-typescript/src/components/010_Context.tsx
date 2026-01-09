

// useContext manages global states

import { createContext, useContext, useState, type ReactNode } from "react";

export type GlobalType = {
    flag : string;
    setFlag: (c : string) => void
}


export const MyGlobalContext = createContext<GlobalType>({
    flag : 'Hello World',
    setFlag : () => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext);

export function GlobalState({children} : {children : ReactNode}){

    const [flag, setFlag] = useState('');

    return <MyGlobalContext.Provider value={{flag, setFlag}}>
        {children}
    </MyGlobalContext.Provider>
}

// wrap the function where context is created and returned with main App like this <GlobalState><App /><GlobalState>
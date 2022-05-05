
import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'


const initialState = {
    progress: 0.,
    fade: 0.
};

const GlobalStateStore= ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default GlobalStateStore;
import { createContext, useReducer } from 'react'
import Reducer from './reducer'

const AppContext = createContext(null);
const initial = {
    value: 'valor inicial'
};

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initial)

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;
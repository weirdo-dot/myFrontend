import { createContext, useReducer } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

const authReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
            case 'LOGOUT':
                return {
                    ...state,
                    user: null
                }
                default:
                    return state
    }
}



const [state, dispatch] = useReducer(authReducer, {user: null})

console.log('Auth', state)
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
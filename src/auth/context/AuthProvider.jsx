import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
  loged: false,
}
const AuthProvider = ({children}) => {
   
  //traes los estado delredsucer
  const [state , dispach] = useReducer( authReducer , initialState);
 
  const login  = ( name="") =>{
    const action ={
      type:types.login,
      payload:{
        id:'abc',
        name:name
      }
    }
    dispach(action);
  }


  return (

    <AuthContext.Provider value={{
        ...state,
        login:login
    }}>
     {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider
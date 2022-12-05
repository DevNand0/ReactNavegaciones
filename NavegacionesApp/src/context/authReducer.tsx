//los reducer son FUNCIONES PURAS

import { AuthState } from "./AuthContext";

type AuthAction = 
     | { type: 'signIn' }
     | { type: 'changeFavIcon', payload: string }
     | { type: 'logOut'}

//resuelve soluciones y genera nuevos estados
//Funcion de generaEstado
export const authReducer = (state:AuthState, action:AuthAction):AuthState=>{
    //estas funciones SIEMPRE DEBEN SER TIPO State

    switch(action.type){
        case 'signIn':
            //RECOMENDADO HACERLO SOLAMENTE ASI!!!
            return {
                ...state,
                isLoggedIn:true,
                username:'no-username-value',
                favoriteIcon:'body-outline'
            }
            
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon:action.payload//tiene el nombre del icono que se va a pasar por parametro
            }

        case 'logOut':
            //RECOMENDADO HACERLO SOLAMENTE ASI!!!
            return {
                ...state,
                isLoggedIn:false,
                username:'no-username-value',
                favoriteIcon:undefined
            }
        default:
            return state;
    }

    
}

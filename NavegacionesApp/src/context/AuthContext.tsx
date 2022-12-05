import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

//Definir como luce, que informacion tendre aqui.
export interface AuthState{
    isLoggedIn:boolean;//obligatorio
    username?:string;//no obligatorio
    favoriteIcon?:string;//no obligatorio
}

//estado inicial

export const authInitialState: AuthState={
    isLoggedIn:false,
    username:'',
    favoriteIcon:undefined
}
//lo usaremos para decirle a React como luce y que pone el context
export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon:(iconName:string)=>void;
}




//crea contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente proveedor del estado
export const AuthProvider = ({children}: any)=>{

    //UseReducer es casi lo mismo que useState, solo que
    //utiliza mas variables y usos mas complejos 
    //por los objetos en el cual se realiza validaciones
    //parametros en useState(funcionEstado,initsalState,init)
    const [authStateR, dispatch] = useReducer(authReducer,authInitialState);
    //dispatch FUNCION QUE MODIFICA EL ESTADO
    const signIn=()=>{
        dispatch({type:'signIn'});
    }

    const logOut=()=>{
        dispatch({type:'logOut'});
    }

    const changeIcon = (iconName:string)=>{
        dispatch({type:'changeFavIcon',payload:iconName});
    }
    return (
        <AuthContext.Provider
            value={{ 
                authState:authStateR,
                signIn:signIn,//la propiedad de la interfaz AuthContextProps 
                //de la funcion signIn llama a la funcion signIn que se creo para ejecutar el dispatch 
                changeFavoriteIcon:changeIcon,//de la propiedad de la interfaz AuthContextProps
                //la funcion changeFavoriteIcon ejecuta el metodo por la vinculacion del dispatch changeIcon para cambiar de icono 
                logOut:logOut//de la propiedad de la interfaz AuthCOntextProps
                //la funcion logOut ejecuta con el metodo de vinculacion del dispatch logOut para terminar la sesion
             }}
        >
            {children}
        </AuthContext.Provider>
    )
}

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginBottom:10
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderRadius:20,
        alignItems:'center',
        justifyContent:"center",
        marginRight:10
        
    },
    botonGrandeTexto:{
        color:'white'
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:100,
        marginHorizontal:30,
        marginVertical:10,
    },
    //menu del panel de la navegacion
    navegacionContainer:{
        marginVertical:30,
        marginHorizontal:30,
    },
    //seccion de cada fila del menu
    menuItemRow:{
        marginVertical:10
    },
    //el texto del item del menu
    menuItemText:{
        color:'gray',
        fontSize:19
    }
})


export const colores = {
    primary:'#5856D6'
    
};

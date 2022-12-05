import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};
export const PersonaScreen = ( {route, navigation } :Props)  => {
    const params=route.params;
    const context = useContext(AuthContext);
    useEffect (()=>{
        navigation.setOptions({
            title:params.nombre
        });
    },[]);
    //EL USEEFFECT ES EL QUE PASA LAS VARIABLES DE LOS DATOS SETEADOS EN LA INTERFAZ
    //NO ES DONDE SE ENCUENTRAN LOS BOTONES, SINO QUIEN TIENE LOS DATOS DE LA VARIABLE
    useEffect(()=>{
        context.changeUsername(params.nombre);
    },[]);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Bienvenido {params.nombre}</Text>
        </View>
    )
}

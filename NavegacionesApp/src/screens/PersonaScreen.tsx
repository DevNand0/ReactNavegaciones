import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { RootStackParams } from '../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};
export const PersonaScreen = ( {route, navigation } :Props)  => {
    const params=route.params;
    useEffect (()=>{
        navigation.setOptions({
            title:params.nombre
        });
    },[]);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Bienvenido {params.nombre}</Text>
        </View>
    )
}

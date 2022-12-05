import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import { colores, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons'

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  //toma esta constante para que no se vea feo en el dispositivo IOS


  const context = useContext(AuthContext);


  return (
    <View style={{
                  ...styles.globalMargin, 
                  marginTop:insets.top + 20
                }}>
        <Text style={styles.title}>SettingsScreen</Text>
        <Text>{JSON.stringify(context.authState,null,4)}</Text>
        {
          context.authState.favoriteIcon &&
          <Icon name = {context.authState.favoriteIcon} size={80} color={colores.primary}/>
        }
    </View>
  )
}

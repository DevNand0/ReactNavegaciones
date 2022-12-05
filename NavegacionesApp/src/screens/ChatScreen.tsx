import React, { useContext } from 'react'
import { View,Text,Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../themes/appTheme'

export const ChatScreen = () => {
  const {logOut, authState} = useContext(AuthContext)//USAR SIEMPRE PORQUE ES EL CONTEXTO
  return (
    <View style={styles.globalMargin}>
        <Text>ChatScreen</Text>

        {
         authState.isLoggedIn? <Button  title="LogOut" onPress={()=>logOut()} /> : null
        }
    </View>
  )
}

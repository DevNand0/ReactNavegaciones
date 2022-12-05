import React, { useContext } from 'react'
import { View,Text,Button } from 'react-native'
import { AuthContext, AuthState } from '../context/AuthContext';
import { styles } from '../themes/appTheme'

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>ContactScreen</Text>
        {
         !authState.isLoggedIn? <Button  title="SignIn" onPress={()=>signIn()} /> : null
        }
        
    </View>
  )
}

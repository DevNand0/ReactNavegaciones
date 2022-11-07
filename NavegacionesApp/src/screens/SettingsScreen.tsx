import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';
export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  //toma esta constante para que no se vea feo en el dispositivo IOS

  return (
    <View style={{
                  ...styles.globalMargin, 
                  marginTop:insets.top + 20
                }}>
        <Text style={styles.title}>SettingsScreen</Text>
    </View>
  )
}

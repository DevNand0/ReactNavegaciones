import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';
import { styles } from '../themes/appTheme';

export const Tab2Screen = () => {
  const {top} = useSafeAreaInsets();
  useEffect(()=>{
    console.log("tab 2 effect");
  },[]);
  return (
    
    <View style={{ 
      ...styles.globalMargin,
      marginTop:top+10
     }}>
        <Text>Tab de Iconos</Text>
        <TouchableIcon iconName="airplane-outline"/>
        <TouchableIcon iconName="attach-outline"/>
        <TouchableIcon iconName="bonfire-outline"/>
        <TouchableIcon iconName="calculator-outline"/>
        <TouchableIcon iconName="leaf-outline"/>
    </View>
  )
}

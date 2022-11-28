import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../themes/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  useEffect(()=>{
    console.log("tab 1 effect");
  },[]);
  const {top} = useSafeAreaInsets();
  return (
    <View style={{ 
      ...styles.globalMargin,
      marginTop:top//para que la vista se acople mejor en iOS
     }}>
        <Text>
          <Icon name="airplane-outline" size={30} color='gray' />
          Tab1Screen
        </Text>
        
    </View>
  )
}

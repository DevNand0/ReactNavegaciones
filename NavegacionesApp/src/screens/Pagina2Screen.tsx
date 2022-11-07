
import React, { useEffect } from 'react'
import { Button, NavigatorIOS, Text, View } from 'react-native'
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<any,any>{};

export const Pagina2Screen = ({navigation}:Props) => {
  const navigator = useNavigation();
  //este permite que se ejecute solo una vez (el useEffect se ejecuta una sola vez)
  useEffect(()=>{
    navigator.setOptions({
      title:'hola mundo',
      headerBackTitle:'Atras'
    });
  },[]);
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina2Screen</Text>
        <Button 
          title="Ir a Pagina 3"
          onPress={()=>navigation.navigate('Pagina3Screen')} />
    </View>
    
  )
}

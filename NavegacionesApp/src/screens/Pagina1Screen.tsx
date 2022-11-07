import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../themes/appTheme'

interface Props extends StackScreenProps<any,any>{};
//interface para la navegacions de drawer, tiene las mismas navegaciones de tipo Stack, pero tambien de navegaciones tipo lateral
//interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {
/*
  useEffect(() => {
    navigation.setOptions({
      headerLeft:()=><Button title="Menu" onPress={ ()=>navigation.toggleDrawer() }/>
    })
  }, [])
  */


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button title="Ir pagina 2"
                onPress={()=>navigation.navigate('Pagina2Screen')}/>
        <Text style={{ marginVertical:15, marginLeft:5, fontSize:20 }}>Navegar con Argumentos</Text>
        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity
              style={styles.botonGrande}
              onPress={()=>navigation.navigate('PersonaScreen',{
                id:1,
                nombre:'Pedro'
              })}>
                <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{
                    ...styles.botonGrande,
                    backgroundColor:'#FF9427'
                    }}
              onPress={()=>navigation.navigate('PersonaScreen',{
                id:2,
                nombre:'Maria'
              })}>
                <Text style={styles.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>
    </View>
    
  )
}

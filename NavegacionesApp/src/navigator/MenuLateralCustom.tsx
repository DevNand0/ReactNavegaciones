import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles, colores } from '../themes/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { Colors } from 'react-native-paper';

const Drawer = createDrawerNavigator();

//NAVEGACION CREADA SOLO PARA QUE EN IPHONE NO SE VEA FEO
const Stack = createStackNavigator();
const SettingsStackScreen = ()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}/>
    </Stack.Navigator>
  )
}
export const MenuLateralCustom = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props)=> <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = (props: DrawerContentComponentProps)=>{

  return (
    <DrawerContentScrollView>
      {/* parte del avatar */}
      <View>
        <Image source={{ 
          uri:"https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif"
         }}
         style={styles.avatar} />
      </View>
      {/* opciones de menu */}
      <View style={styles.navegacionContainer}>
        <TouchableOpacity 
          style={styles.menuItemRow}
          onPress={()=>props.navigation.navigate('Tabs')}
          >
          <Text style={styles.menuItemText}>
          <Icon name='ribbon-outline' size={20} color={colores.primary} />
            Navegacion Tabs
          </Text> 
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItemRow}
          onPress={()=>props.navigation.navigate('SettingsScreen')}
          >
          <Text style={styles.menuItemText}>
            <Icon name='options-outline' size={20} color={colores.primary} />
            Ajustes
          </Text> 
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );

}

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumnsScreen } from '../screens/AlbumnsScreen';
import { ContactsScreen } from '../screens/ContectScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  //personalizacion de Top Tabs utilizando un hook
  const {top} = useSafeAreaInsets();    

  return (
    <TopTab.Navigator
        style={{ 
            paddingTop:top
        }}
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={({route})=>({
            tabBarPressColor:colores.primary,
            tabBarShowIcon:true,
            tabBarIndicatorStyle:{
                backgroundColor:colores.primary
            },
            tabBarStyle:{
                borderBottomWidth:0,
                elevation:0,//la propiedad elevation es considerada en android
                shadowColor:'transparent'
            },
            tabBarIcon:({color, focused})=>{
                let iconName:string="";
                color='green';
                
                switch(route.name){
                  case 'Album':
                    iconName="reader-outline";
                  break; 
                  case 'Contactos':
                    iconName="body-outline";
                  break; 
                  case 'Chat':
                    iconName="chatbox-ellipses-outline";
                  break; 
                  default:
                    iconName="newspaper-outline";
                  break;
                }
                return <Icon name={iconName} size={20} color={color} />
            }
            
        })}
        
    >
      <TopTab.Screen name="Album" component={AlbumnsScreen} />
      <TopTab.Screen name="Contactos"component={ContactsScreen} />
      <TopTab.Screen name="Chat" component={ChatScreen} />
    </TopTab.Navigator>
  );
}

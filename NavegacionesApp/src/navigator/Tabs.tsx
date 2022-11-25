import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/appTheme';
import { Platform, Text } from 'react-native';

export const Tabs = () =>{
    return Platform.OS ==='ios'?<TabsIos/>:<TabsAndroid/>;
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{ 
        backgroundColor:colores.primary
      }}
      screenOptions={({route})=>({
        tabBarIcon:({color, focused})=>{
          let iconName:string="";
          switch(route.name){
            case 'Tab1Screen':
              iconName="T1";
            break; 
            case 'Tab2Screen':
              iconName="";
            break; 
            default:
              iconName="S";
            break;
          }
          return <Text style={{color}}>{iconName}</Text>
        }
       })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title:'Mi Tab 1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title:'Mi Tab 2' }} component={Tab2Screen} />
      <BottomTabAndroid.Screen name="Navegacion Stack" options={{ title:'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIos = createBottomTabNavigator();

export const TabsIos = () => {
  //los tabs se ejecutan una sola vez
  //cada tab seleccionado por primera vez se ejecuta y de ahi se mantiene activo
  return (
    <BottomTabIos.Navigator 
      sceneContainerStyle={{ 
        backgroundColor:'white'
       }}
       
       
       screenOptions={({route})=>({
        
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
          borderTopColor:colores.primary,
          borderTopWidth:0,
          elevation:0//la propiedad elevation es considerada en android
        },
        tabBarLabelStyle:{
          fontSize:15//el tamano de letra del tab
        },

        tabBarIcon:({color, focused,size})=>{
          let iconName:string="";
          switch(route.name){
            case 'Tab1Screen':
              iconName="T1";
            break; 
            case 'Tab2Screen':
              iconName="";
            break; 
            default:
              iconName="S";
            break;
          }
          return <Text style={{color}}>{iconName}</Text>
        }
       })}
    >
      <BottomTabIos.Screen name="Tab1Screen" options={{ title:'Mi Tab 1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="Tab2Screen" options={{ title:'Mi Tab 2'}} component={Tab2Screen} />
      <BottomTabIos.Screen name="NavegacionStack" options={{ title:'Stack'}} component={StackNavigator} />
    </BottomTabIos.Navigator>
  );
  //los Tab.Screen tambien pueden llamar otras formas de navegacion
}

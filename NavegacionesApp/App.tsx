import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralCustom } from './src/navigator/MenuLateralCustom';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateralCustom/>
    </NavigationContainer>
  )
}

export default App;

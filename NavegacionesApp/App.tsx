import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralCustom } from './src/navigator/MenuLateralCustom';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateralCustom/>
      </AppState>
    </NavigationContainer>
  )
}


const AppState = ({children}:any)=>{
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


export default App;

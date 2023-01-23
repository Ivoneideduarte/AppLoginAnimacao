//expo install @react-navigation/native
//npx expo install react-native-screens react-native-safe-area-context
//expo install @react-navigation/native-stack
import React from 'react'
import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#38a69d' barStyle='light-content' />
      <Routes/>
    </NavigationContainer>
  );
}

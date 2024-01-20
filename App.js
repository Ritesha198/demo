import React from 'react';
import BottomTab from './AllScreens/Navigations/BottomTab';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AudioProvider from './AllScreens/Context/AudioProvider';



export default function App() {
  return(
    <AudioProvider>
  <NavigationContainer>
    <BottomTab/>
  </NavigationContainer>
  </AudioProvider>
    
  )
}



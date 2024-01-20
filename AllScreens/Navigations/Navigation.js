import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Player from '../Screens/Player';
import Playlist from '../Screens/Playlist';


const Stack = createNativeStackNavigator();



export const Navigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
       
        headerTintColor: 'yellow',
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
        }
    }}
    >

    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Player" component={Player} />
    <Stack.Screen name="Playlist" component={Playlist} />


    </Stack.Navigator>
        </NavigationContainer>
    )
}

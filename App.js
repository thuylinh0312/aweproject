import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import {Example1} from './src/Example1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignInScreen} from './src/screens/SignInScreen'
import {SignUpScreen} from './src/screens/SignUpScreen'
import {HomeScreen} from './src/screens/HomeScreen'
import { CoinListScreen } from "./src/screens/CoinListScreen";
import { Tabs } from "./src/screens/CoinListScreen/tabs";
const Stack = createNativeStackNavigator();

// https://pro-api.coinmarketcap.com => BASE_URL
// 

const YourApp = () => {
  // return <Example1 />
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name='Tabs' component={Tabs}/>
        {/* <Stack.Screen name='Coin List' component={CoinListScreen}/> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} /> */}
        
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default YourApp
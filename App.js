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
import { Hooks } from "./src/hooks/hooks";
import { UseReducerScreen } from "./src/hooks/useReducer"; 
import { UseCallbackScreen } from "./src/hooks/useCallback";
import { UseMemoScreen } from "./src/hooks/useMemo";
import { UseRefScreen } from "./src/hooks/useRef";
import { UseLayoutEffectScreen } from "./src/hooks/useLayoutEffect";
const Stack = createNativeStackNavigator();


const YourApp = () => {
  // return <Example1 />
  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Hooks" component={Hooks} />
        <Stack.Screen name="UseReducer" component={UseReducerScreen} />
        <Stack.Screen name="UseCallback" component={UseCallbackScreen} />
        <Stack.Screen name="UseMemo" component={UseMemoScreen} />
        <Stack.Screen name="UseRef" component={UseRefScreen} />
        <Stack.Screen name="UseLayoutEffect" component={UseLayoutEffectScreen} />

        {/* <Stack.Screen options={{headerShown: false}} name='Tabs' component={Tabs}/>
        <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name='Coin List' component={CoinListScreen}/> */}
        {/* 
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} /> */}
        
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default YourApp
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
import { UseTransitionScreen } from "./src/hooks/useTransition";
import { UseDeferredValueScreen } from "./src/hooks/useDeferredValue";
import { UseContextScreen } from "./src/hooks/useContext/compA";
import {UseImperativeHandle} from './src/hooks/useImperativeHandle'
import CoinsSummary from "./src/screens/CoinsSummary";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './src/reducers'
import createSagaMiddleware from 'redux-saga'
import coinListSaga from "./src/sagas/coinListSaga";
 
const Stack = createNativeStackNavigator();

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(coinListSaga)
//////////////

const YourApp = () => {
  // return <Example1 />
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Hooks" component={Hooks} />
          <Stack.Screen name="UseContext" component={UseContextScreen} />
          <Stack.Screen name="UseReducer" component={UseReducerScreen} />
          <Stack.Screen name="UseCallback" component={UseCallbackScreen} />
          <Stack.Screen name="UseMemo" component={UseMemoScreen} />
          <Stack.Screen name="UseRef" component={UseRefScreen} />
          <Stack.Screen name="UseTransition" component={UseTransitionScreen} />
          <Stack.Screen name="UseDeferredValue" component={UseDeferredValueScreen} />
          <Stack.Screen name="UseLayoutEffect" component={UseLayoutEffectScreen} />
          <Stack.Screen name='UseImperativeHandle' component={UseImperativeHandle} />

          <Stack.Screen options={{headerShown: false}} name='Tabs' component={Tabs}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name='Coin List' component={CoinListScreen}/>
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name='CoinsSummary' component={CoinsSummary} />
          
        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  )
}

export default YourApp
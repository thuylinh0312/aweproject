import React from "react"
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { coin_home } from './coin_home';
import { coin_feed } from './coin_feed';
import { coin_setting } from './coin_setting';
import { CoinListScreen } from './index';
import { images } from '../../../assets'

const Tab = createBottomTabNavigator();
export const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={"Home"} component={coin_home}
                // options = {{
                //     tabBarIcon: ({focused}) => {
                //         <View style = {{ alighItems: "center", justifyContent: "center" }}>
                //             <Image  source={images.home}
                          
                //             style = {{
                                
                //                 tintColor: focused ? "black" : "red"
                //             }}
                //             />
                //         </View>
                //     }
                // }}
            />
            <Tab.Screen name={"List"} component={CoinListScreen}/>
            <Tab.Screen name={"Feed"} component={coin_feed}/>
            <Tab.Screen name={"Setting"} component={coin_setting}/>
        
        </Tab.Navigator>

    )
}
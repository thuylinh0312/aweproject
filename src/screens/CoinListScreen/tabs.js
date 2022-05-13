import React from "react"
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoinHome } from './coin_home';
import { CoinFeed } from './coin_feed';
import { CoinSetting } from './coin_setting';
import { CoinListScreen } from './index';
import { images } from '../../../assets'

const Tab = createBottomTabNavigator();
export const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={"Home"} component={CoinHome}
                options = {{
                    tabBarIcon: (data) => {
                        const color = data.focused ? "black" : "red"
                        return (
                            <View style = {{ alighItems: "center", justifyContent: "center" }}>
                                <Image  
                                    source={images.home}
                                    style = {{
                                        tintColor: color
                                    }}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name={"List"} component={CoinListScreen}/>
            <Tab.Screen name={"Feed"} component={CoinFeed}/>
            <Tab.Screen name={"Setting"} component={CoinSetting}/>
        
        </Tab.Navigator>

    )
}
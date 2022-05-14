import React from "react"
import {View, Image } from "react-native";
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
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style = {{ alighItems: "center", justifyContent: "center" }}>
                                <Image source={images.home}
                                    style = {{tintColor: focused ? "blue" : "black"}}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name={"List"} component={CoinListScreen}
                options = {{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View style = {{ alighItems: "center", justifyContent: "center" }}>
                                <Image source={images.chart}
                                    style = {{tintColor: focused ? "blue" : "black"}}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name={"Feed"} component={CoinFeed}
            options = {{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style = {{ alighItems: "center", justifyContent: "center" }}>
                            <Image source={images.feed}
                                style = {{tintColor: focused ? "blue" : "black"}}
                            />
                        </View>
                    )
                }
            }}
            />
            <Tab.Screen name={"Setting"} component={CoinSetting}
            options = {{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style = {{ alighItems: "center", justifyContent: "center" }}>
                            <Image source={images.setting}
                                style = {{tintColor: focused ? "blue" : "black"}}
                            />
                        </View>
                    )
                }
            }}/>   
        </Tab.Navigator>

    )
}
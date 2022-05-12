import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { coin_home } from './coin_home';
import { coin_feed } from './coin_feed';
import { coin_setting } from './coin_setting';
import { CoinListScreen } from './index';
const Tab = createBottomTabNavigator();
export const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={coin_home}/>
            <Tab.Screen name={"List"} component={CoinListScreen}/>
            <Tab.Screen name={"Feed"} component={coin_feed}/>
            <Tab.Screen name={"Setting"} component={coin_setting}/>
        
        </Tab.Navigator>

    )
}
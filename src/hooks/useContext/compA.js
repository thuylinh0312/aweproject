import React, {useState, createContext} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import CompB from "./compB";
import { styles } from "./styles";

export const ThemeContext = createContext()
export const UseContextScreen = ({navigation}) => {

    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    
    return (
        <ThemeContext.Provider value ={theme}>
            <View style = {{ flex: 1, padding: 10,}}>
                <Text> CompA -  CompB -  CompC</Text>
                <TouchableOpacity onPress={() => toggleTheme()}>
                    <Text style = {{fontWeight: "bold"}}>Toggle</Text>
                </TouchableOpacity>
                <CompB/>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style = {{fontWeight: "bold"}}>Back</Text>
                </TouchableOpacity>  
               
            </View>
        </ThemeContext.Provider>
    )
}


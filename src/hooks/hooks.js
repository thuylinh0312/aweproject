import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export const Hooks = ({navigation}) => {
    return (
        <View style = {{ flex: 1, padding: 10}}>
            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useReducer</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseReducer")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useCallback</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseCallback")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View>

            <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
                <Text>useMemo</Text>
                <View style = {{flex: 1}}></View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("UseMemo")}
                > 
                <Text style = {{backgroundColor: "lightblue", padding:5}}>X</Text>
                </TouchableOpacity>         
            </View> 
            
        </View>
        
    )
}
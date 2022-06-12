import React, { useReducer } from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

export const UseReducerScreen = ({navigation}) => {
    const initState = 0;
    const up = "up"
    const down = "down"
    const reducer = (state, action) => {
        switch(action) {
            case up:
                return state + 1
            case down:
                return state - 1
            default:
                alert("Error")
        }

    }

    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <View style = {{ flex: 1, padding: 10, }}>
            <Text style= {{marginBottom:10, fontWeight: "bold"}}>useReducer</Text>
            <View style = {{ flexDirection: "row", justifyContent:"space-between", padding:20}}> 
                <Text>{count}</Text>
                <TouchableOpacity 
                    onPress={()=> dispatch(up)}
                >
                <Text style = {{fontWeight: "bold", backgroundColor: "lightblue"}}> + </Text>
                </TouchableOpacity>   
                <TouchableOpacity 
                    onPress={()=> dispatch(down)}
                >
                <Text style = {{fontWeight: "bold", backgroundColor: "lightblue"}}> - </Text>
                </TouchableOpacity>  

                
            </View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style = {{fontWeight: "bold"}}>Back</Text>
                </TouchableOpacity> 
        </View>
    )
}
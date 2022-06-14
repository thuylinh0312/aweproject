import React, { useLayoutEffect, useState , useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export const UseLayoutEffectScreen = ({navigation}) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if(count > 9) {
            setCount(0)
        }
    },[count])

    // useLayoutEffect(() => {
    //     if(count > 9) {
    //         setCount(0)
    //     }
    // },[count])

    return (
        <View style = {{ flex: 1, padding: 10, }}>
            <TouchableOpacity onPress={() => setCount(count + 1)}> 
                <Text style = {{backgroundColor: "red"}}>Click me</Text>
            </TouchableOpacity> 
            <Text>{count}</Text>  
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style = {{fontWeight: "bold"}}>Back</Text>
            </TouchableOpacity>      
        </View>
    )
}
import React, {useState, useMemo} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
export const UseMemoScreen = ({navigation}) => {

    const [count, setCount] = useState(0)
    const [num, setNum] = useState(10)
    const squaredFunction = (num) => {
        return num*num
    }
    const number = useMemo(() => {
        return squaredFunction(num)
    },[num])
    return (
        <View style = {{ flex: 1, padding: 10, }}>
            <TouchableOpacity onPress={() => setCount(count + 1)}> 
                <Text style = {{backgroundColor: "red"}}>Click me</Text>
            </TouchableOpacity> 
            <Text>{count}</Text>  
            <Text>Number: {number}</Text>  
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style = {{fontWeight: "bold"}}>Back</Text>
            </TouchableOpacity>      
        </View>
    )
}
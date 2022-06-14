import React, { useCallback, useState } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Content from './content'

export const UseCallbackScreen = ({navigation}) => {

    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    },[])
    return (
        <View style = {{ flex: 1, padding: 10, }}>
            <Content onIncrease = {handleIncrease}/>
            <Text>{count}</Text>  
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style = {{fontWeight: "bold"}}>Back</Text>
            </TouchableOpacity>      
        </View>
    )
}
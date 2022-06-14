import React, { useRef, useState , useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export const UseRefScreen = ({navigation}) => {
    const [count, setCount] = useState(60)
    const timeId = useRef()
    const prevCount = useRef()

    //trang thai truoc do cua State
    useEffect(() => {
        prevCount.current = count
    },[count])

    const handleStart = () => {
        timeId.current = setInterval(() =>{
            setCount(prevCount => prevCount - 1)
        },1000)
    }
    const handleStop = () => {
        clearInterval(timeId.current)
    }
    return (
        <View style = {{ flex: 1, padding: 10, }}>
            <View style = {{ flexDirection: "row", justifyContent:"space-between", padding:20}}> 
                <Text>{count}</Text> 
                <TouchableOpacity onPress={()=> handleStart()}>
                    <Text style = {{fontWeight: "bold", backgroundColor: "lightblue"}}> Start </Text>
                </TouchableOpacity>   
                <TouchableOpacity onPress={()=> handleStop()}>
                    <Text style = {{fontWeight: "bold", backgroundColor: "lightblue"}}> Stop </Text>
                </TouchableOpacity>
            
            </View>
                  
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style = {{fontWeight: "bold"}}>Back</Text>
            </TouchableOpacity>      
        </View>
    )
}
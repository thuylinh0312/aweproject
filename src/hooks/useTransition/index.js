import React, {useState, useTransition} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import SlowComponent from "./slowComponent";

export const UseTransitionScreen = ({navigation}) => {

    const [number, setNumber] = useState(0)
    const [value, setValue] = useState(100)
    // const [isPending, startTransition] = useTransition();
    const handleClick = () => {
        setNumber(number + 1)
        // startTransition(() => setValue(value + 1))
    }
    return (
        <View style = {{ flex: 1, padding: 10, }}>
            <TouchableOpacity onPress={() => handleClick()}> 
                <Text >Click to add: </Text>
                <Text>{number} </Text>
            </TouchableOpacity>   

            {/* <View style = {{opacity: isPending ? 0.25 : 1}}>
                <SlowComponent value = {value}/>
            </View>   */}
        </View>
    )
}
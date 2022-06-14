import React, {useState, useDeferredValue} from "react";
import {View, Text, TouchableOpacity} from 'react-native'

export const UseDeferredValueScreen = ({navigation}) => {

    const [number, setNumber] = useState(0)
    // const defer = useDeferredValue(number)
    const handleClick = () => {
        setNumber(number + 1)
    }
    return (
        <View style = {{ flex: 1, padding: 10, }}>
            <TouchableOpacity onPress={() => handleClick()}> 
                <Text >Click to add: </Text>
                <Text>{number} </Text>
            </TouchableOpacity>   
            {/* <Text>DeferredValue: {defer}</Text>  */}
        </View>
    )
}
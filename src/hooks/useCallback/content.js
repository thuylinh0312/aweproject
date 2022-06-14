import React, { memo} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

const Content = ({onIncrease}) => {
    return (
        <View>
            <Text style= {{marginBottom:10, fontWeight: "bold"}}>useCallback</Text>
            <TouchableOpacity onPress={onIncrease}> 
                <Text style = {{backgroundColor: "red"}}>Click me</Text>
            </TouchableOpacity>   
        </View>
    )
}
export default memo(Content)

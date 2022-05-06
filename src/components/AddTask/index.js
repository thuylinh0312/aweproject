import React from 'react'
import {View, TextInput, TouchableOpacity, Text} from 'react-native'

export const AddTask = ({taskInput, setTaskInput, onAdd, placeholder}) => {
    return (
        <View style = {{flexDirection:"row", alignItems:"center", justifyContent: "space-between", marginHorizontal:25}}>
                <TextInput
                    value={taskInput}
                    onChangeText={setTaskInput} 
                    placeholder={placeholder} />
                <TouchableOpacity onPress={onAdd}>
                    <Text style = {{backgroundColor:"gray", borderRadius: 500, fontSize:20}}>  +  </Text>
                </TouchableOpacity>
            </View>
    )
}
import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'

export const TimerButton = ({text, onPressButton}) => {
    return (
        <TouchableOpacity 
            style = {styles.button}
            onPress={onPressButton}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
       backgroundColor: "white", 
       padding: 10, 
       borderColor: "black", 
       borderWidth:2, borderRadius:10
    }
})

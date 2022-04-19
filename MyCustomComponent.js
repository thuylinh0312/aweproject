import React from 'react'
import {Text, View, TouchableOpacity, } from 'react-native'

// JSX

export const MyCustomComponent = ({ backgroundColor, onPressButton }) => {
    // <Text />

    return (
        <View style={{alignItems: 'flex-start', backgroundColor: backgroundColor}}>
            <Text style={{fontSize: 49, color: 'red', backgroundColor: 'yellow'}}>
                Phan Trung Viet
            </Text>
            <TouchableOpacity
                onPress={onPressButton}
                style={{backgroundColor: 'red'}}>
                <Text>Button</Text>
            </TouchableOpacity>
            <Text>12312312312312321</Text>
        </View>
    )
}
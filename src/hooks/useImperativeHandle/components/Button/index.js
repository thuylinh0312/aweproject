import React, {useCallback, useImperativeHandle, forwardRef, useState} from 'react'
import {Pressable, Text} from 'react-native'

export const Button = React.memo(forwardRef((props, ref) => {

    const onPress = () => {
        alert('123123')
    }
    const [count] = useState(1000)

    useImperativeHandle(ref, () => ({
        onPressText: () => onPress(),
        count,
    }))


    return (
        <Pressable onPress={onPress}>
            <Text>Pressable</Text>
        </Pressable>
    )
}))
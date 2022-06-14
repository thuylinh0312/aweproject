import React, {useCallback, useRef, useEffect} from 'react'
import {View} from 'react-native'
import { Button } from './components/Button'

export const UseImperativeHandle = React.memo(() => {
    const buttonRef = useRef(null)
    // const onPress = useCallback(() => {
    //     alert('123123')
    // }, [])

    useEffect(() => {
        console.log('123213213213231232132', buttonRef.current.count)
    }, [])



    return (
        <View>
            <Button ref={buttonRef} />
        </View>
    )
})
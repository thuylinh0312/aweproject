import React, {useEffect, useState, useRef} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"
import { delayPromise } from "../../utils/common";

// setTimeout, setInterval

// const a = () => {
//     return alert(123123)
// }

// const sum = (a, b) => {
//     return a + b
// }

// a()

// const tong = sum(1, 2)

// xử lý bất đồng bộ: asynchorous

// Promise

export const CoinHome = ({navigation})=> {
    const [count, setCount] = useState(0)
    const interval = useRef()


    const startCount = () => {
        interval.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
    }

    // const callDelay = () => {
    //     delayPromise(5000)
    //         .then(() => {
    //             alert('Sau 3 giay')
    //         }).catch((e) => {
    //             console.log(e)
    //         }).finally(() => {
    //             console.log('finallllllllllllllllyyy')
    //         })

    //         alert('123123123')
    // }

    const callDelay = async () => {
        try {
            const data = await delayPromise(5000)
            //,,,,,,,,,
            alert(data)

            ///////
            /////
        } catch (e) {
            console.log(e)
        } finally {
            console.log('finallllllllllllllllyyy')
        }
    }


    useEffect(() => {
        callDelay()

        console.log('Chay 1 lan duy nhat') 
        // const timeout = setTimeout(() => {
        //     setCount(0)
        // }, 10000)

        
        startCount()

        // setTimeout(() => {
        //     clearInterval(interval)
        //     clearTimeout(timeout)
        // }, 7000) 

        return () => {
            clearInterval(interval.current)
        }
    }, [])

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{count}</Text>
            <TouchableOpacity style={{marginLeft: 100}} onPress={() => clearInterval(interval.current)}>
                <Text>STOP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 100}} onPress={startCount}>
                <Text>RESUME</Text>
            </TouchableOpacity>
        </View>
    )
}
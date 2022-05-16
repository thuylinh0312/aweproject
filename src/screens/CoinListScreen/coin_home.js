import React, {useEffect, useState, useRef} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"
import { delayPromise } from "../../utils/common";

// setTimeout, setInterval
// xử lý bất đồng bộ: asynchorous
// Promise

export const CoinHome = ({navigation})=> {
    const [check, setCheck] = useState(false)
    const [minute, setMinute] = useState(0)
    const [count, setCount] = useState(0)
    const interval = useRef()

   
    const startCount = () => {
        interval.current = setInterval(() => {
            setCount(count => count + 1)
            if (count === 59){
                setCount(0);
                setMinute(minute => minute + 1)
            }
        }, 1000)
    }
    let time = {minute: minute, second: count}
    const reset = () => {
        setCount(0);
        setMinute(0);
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

    // const callDelay = async () => {
    //     try {
    //         const data = await delayPromise(5000)
    //         //,,,,,,,,,
    //         alert(data)

    //         ///////
    //     } catch (e) {
    //         console.log(e)
    //     } finally {
    //         console.log('finallllllllllllllllyyy')
    //     }
    // }


    useEffect(() => {
    // callDelay()
        if (check === true){
            startCount()
        }
        
        return () => {
            clearInterval(interval.current)
        }
    }, [check, count])

    return (
        <View style={{ flex: 1, }}>
            <View style = {{backgroundColor: "white", padding: 10, alignItems: "center"}}>
                <Text >{minute} : {count}</Text>
                
            </View>
           
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop:10}}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => setCheck(!check)}>
                    {check === false ? <Text>Bắt đầu</Text> : <Text>Tạm dừng</Text>}
                </TouchableOpacity>
                <TouchableOpacity  
                    style = {styles.button}
                    onPress={() => reset()}
                >
                    {check === false ? <Text>Đặt lại</Text> : <Text>Vòng chạy</Text>}
                </TouchableOpacity>
            </View>
        </View>
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

 